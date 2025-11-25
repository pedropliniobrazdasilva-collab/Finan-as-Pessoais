
import { useState, useEffect, useMemo } from 'react';
import { COURSE_MODULES } from '../data/courseContent';

export const useCourseProgress = () => {
  // Initialize state from LocalStorage with Try-Catch to prevent crashes (Blue/White screen)
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('fp_completed_lessons');
      if (saved === 'undefined' || saved === 'null') return [];
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn('Erro ao carregar progresso, resetando...', e);
      return [];
    }
  });

  const [currentLessonId, setCurrentLessonId] = useState<string | null>(() => {
    try {
      const saved = localStorage.getItem('fp_current_lesson');
      if (saved === 'undefined' || saved === 'null') return null;
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      console.warn('Erro ao carregar lição atual, resetando...', e);
      return null;
    }
  });

  // Theme State - Default true (Dark Mode)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('fp_theme');
      if (saved === 'undefined') return true;
      return saved ? JSON.parse(saved) : true; 
    } catch (e) {
      return true;
    }
  });

  // Welcome Modal State
  const [showWelcomeModal, setShowWelcomeModal] = useState<boolean>(() => {
    try {
      const hasSeen = localStorage.getItem('fp_has_seen_welcome');
      return !hasSeen;
    } catch (e) {
      return true;
    }
  });

  // Time Spent State (in seconds)
  const [timeSpent, setTimeSpent] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('fp_time_spent');
      return saved ? parseInt(saved, 10) : 0;
    } catch (e) {
      return 0;
    }
  });

  // Timer Logic: Incrementa a cada segundo enquanto o app estiver aberto
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Persist Time Spent (Salva a cada 10 segundos para não sobrecarregar o storage)
  useEffect(() => {
    const saveTimer = setInterval(() => {
      try {
        localStorage.setItem('fp_time_spent', timeSpent.toString());
      } catch (e) {
        console.error('Erro ao salvar tempo', e);
      }
    }, 10000);

    // Salva também ao desmontar
    return () => {
        clearInterval(saveTimer);
        try {
            localStorage.setItem('fp_time_spent', timeSpent.toString());
        } catch (e) {}
    };
  }, [timeSpent]);

  // Persist changes with safety
  useEffect(() => {
    try {
      localStorage.setItem('fp_completed_lessons', JSON.stringify(completedLessons));
    } catch (e) {
      console.error('Erro ao salvar progresso', e);
    }
  }, [completedLessons]);

  useEffect(() => {
    try {
      if (currentLessonId) {
        localStorage.setItem('fp_current_lesson', JSON.stringify(currentLessonId));
      } else {
        localStorage.removeItem('fp_current_lesson');
      }
    } catch (e) {
      console.error('Erro ao salvar lição atual', e);
    }
  }, [currentLessonId]);

  useEffect(() => {
    try {
      localStorage.setItem('fp_theme', JSON.stringify(isDarkMode));
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      console.error('Erro ao salvar tema', e);
    }
  }, [isDarkMode]);

  const markLessonComplete = (id: string) => {
    setCompletedLessons(prev => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const closeWelcomeModal = () => {
    setShowWelcomeModal(false);
    localStorage.setItem('fp_has_seen_welcome', 'true');
  };

  const flattenLessons = useMemo(() => {
    if (!COURSE_MODULES) return [];
    return COURSE_MODULES.flatMap(m => m.lessons || []);
  }, []);

  const progressPercentage = useMemo(() => {
    if (flattenLessons.length === 0) return 0;
    return Math.round((completedLessons.length / flattenLessons.length) * 100);
  }, [completedLessons, flattenLessons]);

  const navigateToNext = () => {
    if (!currentLessonId) return;
    const currentIndex = flattenLessons.findIndex(l => l.id === currentLessonId);
    if (currentIndex >= 0 && currentIndex < flattenLessons.length - 1) {
      setCurrentLessonId(flattenLessons[currentIndex + 1].id);
      window.scrollTo(0,0);
    }
  };

  const navigateToPrev = () => {
    if (!currentLessonId) return;
    const currentIndex = flattenLessons.findIndex(l => l.id === currentLessonId);
    if (currentIndex > 0) {
      setCurrentLessonId(flattenLessons[currentIndex - 1].id);
      window.scrollTo(0,0);
    }
  };

  return {
    modules: COURSE_MODULES || [],
    completedLessons,
    currentLessonId,
    setCurrentLesson: setCurrentLessonId,
    markLessonComplete,
    progressPercentage,
    navigateToNext,
    navigateToPrev,
    isDarkMode,
    toggleTheme,
    showWelcomeModal,
    closeWelcomeModal,
    timeSpent
  };
};
