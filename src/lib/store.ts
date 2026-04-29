import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppData, Session, StudentSubmission, SessionProgress, UserRole, PhraseItem, StudentNotes } from './types';
import { initialAppData } from './seed-data';

interface AppState {
  // Auth
  userRole: UserRole;
  isUnlocked: boolean;
  
  // Data
  sessions: Session[];
  submissions: StudentSubmission[];
  progress: SessionProgress[];
  teacherPassword: string;
  studentPassword: string;
  favoritePhraseIds: string[];
  phrasebook: PhraseItem[];
  selectedMonth: string; // 'all' or 'YYYY-MM'
  studentNotes: StudentNotes[];
  
  // Current view
  currentView: 'landing' | 'student' | 'teacher';
  
  // Actions
  setUserRole: (role: UserRole) => void;
  unlock: (password: string, role: 'teacher' | 'student') => boolean;
  lock: () => void;
  setCurrentView: (view: 'landing' | 'student' | 'teacher') => void;
  setSelectedMonth: (month: string) => void;
  
  // Session actions
  updateSession: (sessionId: string, updates: Partial<Session>) => void;
  
  // Submission actions
  addSubmission: (submission: StudentSubmission) => void;
  
  // Progress actions
  updateProgress: (sessionId: string, updates: Partial<SessionProgress>) => void;
  
  // Phrasebook actions
  toggleFavoritePhrase: (phraseId: string) => void;
  
  // Student notes actions
  updateStudentNotes: (sessionId: string, notes: string) => void;
  getStudentNotes: (sessionId: string) => string;
  
  // Data management
  exportData: () => string;
  importData: (data: string) => boolean;
  resetData: () => void;
  
  // Password management
  updatePassword: (role: 'teacher' | 'student', newPassword: string) => void;
}

function mergeSeedSessions(savedSessions?: Session[]): Session[] {
  const byId = new Map<string, Session>();
  const seedIds = new Set(initialAppData.sessions.map((session) => session.id));

  // Use seed sessions as canonical curriculum content so translation/content fixes propagate.
  for (const seedSession of initialAppData.sessions) {
    byId.set(seedSession.id, seedSession);
  }

  // Keep user-created custom sessions (ids not part of seed curriculum).
  for (const session of savedSessions ?? []) {
    const isLegacySeedSession = /^session-\d+$/.test(session.id);
    if (!seedIds.has(session.id) && !isLegacySeedSession) {
      byId.set(session.id, session);
    }
  }

  return Array.from(byId.values()).sort((a, b) => a.number - b.number);
}

function mergeSeedPhrases(savedPhrases?: PhraseItem[]): PhraseItem[] {
  const byId = new Map<string, PhraseItem>();

  for (const phrase of savedPhrases ?? []) {
    byId.set(phrase.id, phrase);
  }

  for (const seedPhrase of initialAppData.phrasebook) {
    if (!byId.has(seedPhrase.id)) {
      byId.set(seedPhrase.id, seedPhrase);
    }
  }

  return Array.from(byId.values());
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Initial state
      userRole: null,
      isUnlocked: false,
      sessions: initialAppData.sessions,
      submissions: [],
      progress: [],
      teacherPassword: initialAppData.teacherPassword,
      studentPassword: initialAppData.studentPassword,
      favoritePhraseIds: [],
      phrasebook: initialAppData.phrasebook,
      selectedMonth: 'all',
      studentNotes: [],
      currentView: 'landing',
      
      // Actions
      setUserRole: (role) => set({ userRole: role }),
      
      unlock: (password, role) => {
        const state = get();
        const correctPassword = role === 'teacher' ? state.teacherPassword : state.studentPassword;
        if (password === correctPassword) {
          set({ userRole: role, isUnlocked: true, currentView: role });
          return true;
        }
        return false;
      },
      
      lock: () => set({ userRole: null, isUnlocked: false, currentView: 'landing' }),
      
      setCurrentView: (view) => set({ currentView: view }),
      setSelectedMonth: (month) => set({ selectedMonth: month }),
      
      updateSession: (sessionId, updates) => {
        set((state) => ({
          sessions: state.sessions.map((session) =>
            session.id === sessionId ? { ...session, ...updates } : session
          ),
        }));
      },
      
      addSubmission: (submission) => {
        set((state) => ({
          submissions: [...state.submissions.filter(s => s.sessionId !== submission.sessionId), submission],
        }));
      },
      
      updateProgress: (sessionId, updates) => {
        set((state) => {
          const existingProgress = state.progress.find((p) => p.sessionId === sessionId);
          if (existingProgress) {
            return {
              progress: state.progress.map((p) =>
                p.sessionId === sessionId ? { ...p, ...updates } : p
              ),
            };
          }
          return {
            progress: [...state.progress, { sessionId, ...updates } as SessionProgress],
          };
        });
      },
      
      toggleFavoritePhrase: (phraseId) => {
        set((state) => {
          const isFavorite = state.favoritePhraseIds.includes(phraseId);
          return {
            favoritePhraseIds: isFavorite
              ? state.favoritePhraseIds.filter((id) => id !== phraseId)
              : [...state.favoritePhraseIds, phraseId],
          };
        });
      },
      
      updateStudentNotes: (sessionId, notes) => {
        set((state) => {
          const existing = state.studentNotes.findIndex(n => n.sessionId === sessionId);
          if (existing >= 0) {
            const updated = [...state.studentNotes];
            updated[existing] = { sessionId, notes, updatedAt: new Date().toISOString() };
            return { studentNotes: updated };
          }
          return { studentNotes: [...state.studentNotes, { sessionId, notes, updatedAt: new Date().toISOString() }] };
        });
      },
      
      getStudentNotes: (sessionId) => {
        const state = get();
        const note = state.studentNotes.find(n => n.sessionId === sessionId);
        return note?.notes ?? '';
      },
      
      exportData: () => {
        const state = get();
        const dataToExport = {
          sessions: state.sessions,
          submissions: state.submissions,
          progress: state.progress,
          favoritePhraseIds: state.favoritePhraseIds,
          teacherPassword: state.teacherPassword,
          studentPassword: state.studentPassword,
          exportedAt: new Date().toISOString(),
        };
        return JSON.stringify(dataToExport, null, 2);
      },
      
      importData: (data) => {
        try {
          const parsed = JSON.parse(data);
          set({
            sessions: parsed.sessions || initialAppData.sessions,
            submissions: parsed.submissions || [],
            progress: parsed.progress || [],
            favoritePhraseIds: parsed.favoritePhraseIds || [],
            teacherPassword: parsed.teacherPassword || initialAppData.teacherPassword,
            studentPassword: parsed.studentPassword || initialAppData.studentPassword,
          });
          return true;
        } catch {
          return false;
        }
      },
      
      resetData: () => {
        set({
          sessions: initialAppData.sessions,
          submissions: [],
          progress: [],
          favoritePhraseIds: [],
          teacherPassword: initialAppData.teacherPassword,
          studentPassword: initialAppData.studentPassword,
        });
      },
      
      updatePassword: (role, newPassword) => {
        if (role === 'teacher') {
          set({ teacherPassword: newPassword });
        } else {
          set({ studentPassword: newPassword });
        }
      },
    }),
    {
      name: 'travel-english-coaching-v2-ar',
      partialize: (state) => ({
        sessions: state.sessions,
        submissions: state.submissions,
        progress: state.progress,
        teacherPassword: state.teacherPassword,
        studentPassword: state.studentPassword,
        favoritePhraseIds: state.favoritePhraseIds,
        phrasebook: state.phrasebook,
        selectedMonth: state.selectedMonth,
      }),
      merge: (persistedState, currentState) => {
        const persisted = persistedState as Partial<AppState>;
        return {
          ...currentState,
          ...persisted,
          sessions: mergeSeedSessions(persisted.sessions),
          phrasebook: mergeSeedPhrases(persisted.phrasebook),
          submissions: persisted.submissions ?? currentState.submissions,
          progress: persisted.progress ?? currentState.progress,
          teacherPassword: persisted.teacherPassword ?? currentState.teacherPassword,
          studentPassword: persisted.studentPassword ?? currentState.studentPassword,
          favoritePhraseIds: persisted.favoritePhraseIds ?? currentState.favoritePhraseIds,
          selectedMonth: persisted.selectedMonth ?? currentState.selectedMonth,
        };
      },
    }
  )
);

// Helper hooks
export const useUserRole = () => useAppStore((state) => state.userRole);
export const useIsUnlocked = () => useAppStore((state) => state.isUnlocked);
export const useSessions = () => useAppStore((state) => state.sessions);
export const useProgress = () => useAppStore((state) => state.progress);
export const useSubmissions = () => useAppStore((state) => state.submissions);

// Get next session
export const useNextSession = () => {
  const sessions = useSessions();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return sessions.find((session) => {
    const sessionDate = new Date(session.date);
    sessionDate.setHours(0, 0, 0, 0);
    return sessionDate >= today;
  });
};

// Calculate overall progress
export const useOverallProgress = () => {
  const sessions = useSessions();
  const progress = useProgress();
  
  const totalSessions = sessions.length;
  const attendedSessions = progress.filter(p => p.attended).length;
  const completedHomework = progress.filter(p => p.homeworkCompleted).length;
  const avgConfidence = progress.length > 0
    ? Math.round(progress.reduce((sum, p) => sum + p.confidenceRating, 0) / progress.length)
    : 0;
  
  return {
    totalSessions,
    attendedSessions,
    completedHomework,
    avgConfidence,
    completionPercentage: Math.round((attendedSessions / totalSessions) * 100) || 0,
    streak: calculateStreak(progress, sessions),
  };
};

function calculateStreak(progress: SessionProgress[], sessions: Session[]): number {
  const sortedSessions = [...sessions].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  let streak = 0;
  
  for (const session of sortedSessions) {
    const sessionProgress = progress.find(p => p.sessionId === session.id);
    if (sessionProgress?.attended) {
      streak++;
    } else {
      break;
    }
  }
  
  return streak;
}
