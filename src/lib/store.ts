import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppData, Session, StudentSubmission, SessionProgress, UserRole, PhraseItem } from './types';
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
  
  // Current view
  currentView: 'landing' | 'student' | 'teacher';
  
  // Actions
  setUserRole: (role: UserRole) => void;
  unlock: (password: string, role: 'teacher' | 'student') => boolean;
  lock: () => void;
  setCurrentView: (view: 'landing' | 'student' | 'teacher') => void;
  
  // Session actions
  updateSession: (sessionId: string, updates: Partial<Session>) => void;
  
  // Submission actions
  addSubmission: (submission: StudentSubmission) => void;
  
  // Progress actions
  updateProgress: (sessionId: string, updates: Partial<SessionProgress>) => void;
  
  // Phrasebook actions
  toggleFavoritePhrase: (phraseId: string) => void;
  
  // Data management
  exportData: () => string;
  importData: (data: string) => boolean;
  resetData: () => void;
  
  // Password management
  updatePassword: (role: 'teacher' | 'student', newPassword: string) => void;
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
      }),
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
