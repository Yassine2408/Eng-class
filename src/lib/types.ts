// Core data types for Travel English Coaching App

export type UserRole = 'teacher' | 'student' | null;

export interface VocabItem {
  id: string;
  word: string;
  meaning: string;
  example?: string;
  category?: string;
}

export interface PhraseItem {
  id: string;
  phrase: string;
  translation: string;
  situation?: string;
  category?: string;
}

export interface Exercise {
  id: string;
  type: 'fill-blank' | 'multiple-choice' | 'matching' | 'dialogue-builder' | 'speaking-prompt' | 'roleplay-card';
  title: string;
  instruction: string;
  content: ExerciseContent;
  answerKey?: string;
}

export type ExerciseContent = 
  | FillBlankContent
  | MultipleChoiceContent
  | MatchingContent
  | DialogueBuilderContent
  | SpeakingPromptContent
  | RoleplayCardContent;

export interface FillBlankContent {
  sentences: Array<{
    id: string;
    text: string; // Use ___ for blank
    answer: string;
  }>;
}

export interface MultipleChoiceContent {
  questions: Array<{
    id: string;
    question: string;
    options: string[];
    correctIndex: number;
  }>;
}

export interface MatchingContent {
  pairs: Array<{
    id: string;
    left: string;
    right: string;
  }>;
}

export interface DialogueBuilderContent {
  lines: Array<{
    id: string;
    speaker: string;
    text: string;
    correctOrder: number;
  }>;
}

export interface SpeakingPromptContent {
  prompt: string;
  duration: number; // in seconds
  suggestedPoints?: string[];
}

export interface RoleplayCardContent {
  situation: string;
  studentRole: string;
  teacherRole: string;
  studentLines: Array<{
    id: string;
    prompt: string;
    suggestedResponse?: string;
  }>;
  teacherLines: Array<{
    id: string;
    line: string;
  }>;
}

export interface Homework {
  id: string;
  task: string;
  type: 'recording' | 'writing' | 'study' | 'quiz';
  details?: string;
  completed?: boolean;
}

export interface Session {
  id: string;
  number: number;
  date: string; // ISO date string
  title: string;
  goal: string;
  vocab: VocabItem[];
  phrases: PhraseItem[];
  grammar: {
    title: string;
    explanation: string;
    examples: string[];
  };
  lessonSteps: Array<{
    id: string;
    title: string;
    duration: number; // minutes
    description: string;
  }>;
  exercises: Exercise[];
  homework: Homework[];
  roleplay: {
    title: string;
    situation: string;
    studentRole: string;
    teacherRole: string;
    script: Array<{
      speaker: 'student' | 'teacher';
      line: string;
      cue?: string;
    }>;
  };
  answerKey: string;
  teacherNotes: string;
}

export interface StudentSubmission {
  sessionId: string;
  textAnswers: Record<string, string>;
  audioUrl?: string;
  selfRating: number; // 1-5
  timestamp: string;
}

export interface SessionProgress {
  sessionId: string;
  attended: boolean;
  homeworkCompleted: boolean;
  confidenceRating: number; // 1-5
  notes?: string;
}

export interface StudentNotes {
  sessionId: string;
  notes: string;
  updatedAt: string;
}

export interface AppData {
  sessions: Session[];
  submissions: StudentSubmission[];
  progress: SessionProgress[];
  teacherPassword: string;
  studentPassword: string;
  favoritePhraseIds: string[];
  phrasebook: PhraseItem[];
  studentNotes: StudentNotes[];
}

export interface ResourceItem {
  id: string;
  category: string;
  title: string;
  content: string;
  tags: string[];
}
