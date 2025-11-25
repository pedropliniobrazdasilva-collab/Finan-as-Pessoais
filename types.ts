export interface Lesson {
  id: string;
  title: string;
  duration: string;
  image: string; // URL da imagem de capa da aula
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

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string; // Stored locally for demo purposes
  registeredAt: string;
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