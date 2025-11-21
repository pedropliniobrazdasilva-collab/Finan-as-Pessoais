export interface Lesson {
  id: string;
  title: string;
  duration: string; // e.g., "15 min"
  content: {
    intro: string;
    explanation: string;
    examples: string[];
    commonErrors: string;
    summary: string;
    exercise: string;
  };
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface CourseState {
  completedLessons: string[]; // Array of Lesson IDs
  currentLessonId: string | null; // null means Dashboard
  isDarkMode: boolean;
  showWelcomeModal: boolean;
}

export interface CourseContextType {
  modules: Module[];
  completedLessons: string[];
  currentLessonId: string | null;
  setCurrentLesson: (id: string | null) => void;
  markLessonComplete: (id: string) => void;
  progressPercentage: number;
  navigateToNext: () => void;
  navigateToPrev: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  showWelcomeModal: boolean;
  closeWelcomeModal: () => void;
}