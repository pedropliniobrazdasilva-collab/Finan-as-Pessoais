import { useState, useEffect, useMemo } from 'react';
import { COURSE_MODULES } from '../data/courseContent';

export const useCourseProgress = () => {
  // Initialize state from LocalStorage
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    const saved = localStorage.getItem('fp_completed_lessons');
    return saved ? JSON.parse(saved) : [];
  });

  const [currentLessonId, setCurrentLessonId] = useState<string | null>(() => {
    const saved = localStorage.getItem('fp_current_lesson');
    return saved ? JSON.parse(saved) : null;
  });

  // Theme State - Default true (Dark Mode)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('fp_theme');
    return saved ? JSON.parse(saved) : true; 
  });

  // Welcome Modal State
  const [showWelcomeModal, setShowWelcomeModal] = useState<boolean>(() => {
    const hasSeen = localStorage.getItem('fp_has_seen_welcome');
    return !hasSeen;
  });

  // Persist changes
  useEffect(() => {
    localStorage.setItem('fp_completed_lessons', JSON.stringify(completedLessons));
  }, [completedLessons]);

  useEffect(() => {
    if (currentLessonId) {
      localStorage.setItem('fp_current_lesson', JSON.stringify(currentLessonId));
    } else {
      localStorage.removeItem('fp_current_lesson');
    }
  }, [currentLessonId]);

  useEffect(() => {
    localStorage.setItem('fp_theme', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
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
    return COURSE_MODULES.flatMap(m => m.lessons);
  }, []);

  const progressPercentage = useMemo(() => {
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
    modules: COURSE_MODULES,
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
    closeWelcomeModal
  };
};