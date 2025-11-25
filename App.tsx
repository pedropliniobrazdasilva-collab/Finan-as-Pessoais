
import React, { useState, useEffect } from 'react';
import { useCourseProgress } from './hooks/useCourseProgress';
import { useAuth } from './hooks/useAuth';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { LessonView } from './components/LessonView';
import { Auth } from './components/Auth';
import { AdminPanel } from './components/AdminPanel';
import { LandingPage } from './components/LandingPage';
import { Menu, X, Moon, Sun, LogOut } from 'lucide-react';

const ThemeToggle: React.FC<{ isDark: boolean; toggle: () => void }> = ({ isDark, toggle }) => (
  <button
    onClick={toggle}
    className="fixed bottom-6 right-6 z-[60] bg-white dark:bg-slate-800 text-gray-900 dark:text-white p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-brand-500"
  >
    {isDark ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-slate-600" />}
  </button>
);

const App: React.FC = () => {
  const auth = useAuth();
  const progress = useCourseProgress();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showLanding, setShowLanding] = useState(true);
  const [initialAuthMode, setInitialAuthMode] = useState<'login' | 'register'>('login');
  
  // Estado elevado para controlar quais módulos estão abertos no menu
  const [expandedModules, setExpandedModules] = useState<string[]>(['mod1']);

  // Content Protection Logic
  useEffect(() => {
    // Disable Right Click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable Shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) && 
        (e.key === 'c' || e.key === 'C' || 
         e.key === 'x' || e.key === 'X' || 
         e.key === 'u' || e.key === 'U' || 
         e.key === 's' || e.key === 'S' || 
         e.key === 'p' || e.key === 'P')
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Disable Drag and Drop
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  const toggleModule = (modId: string) => {
    setExpandedModules(prev => 
      prev.includes(modId) ? prev.filter(id => id !== modId) : [...prev, modId]
    );
  };

  const handleOpenModule = (modId: string) => {
    if (!expandedModules.includes(modId)) {
      setExpandedModules(prev => [...prev, modId]);
    }
    setIsSidebarOpen(true);
  };

  const handleLogout = () => {
    auth.logout();
    setShowLanding(true); // Volta para Landing Page ao sair
  };

  // Auth Routing
  if (showAdminLogin) {
    return (
      <AdminPanel 
        isAuthenticated={auth.isAdmin} 
        onVerify={auth.verifyAdmin} 
        users={auth.users} 
        onGenerateUsers={auth.generateTestUsers}
        onBack={() => {
          if (!auth.user) {
            auth.logout();
          }
          setShowAdminLogin(false);
        }} 
      />
    );
  }

  // Se não estiver logado
  if (!auth.user) {
    // Se estiver no modo Landing Page, mostra a landing
    if (showLanding) {
      return (
        <LandingPage 
          onGetStarted={() => {
            setInitialAuthMode('register');
            setShowLanding(false);
          }}
          onLogin={() => {
            setInitialAuthMode('login');
            setShowLanding(false);
          }}
          isDarkMode={progress.isDarkMode}
          toggleTheme={progress.toggleTheme}
        />
      );
    }

    // Se saiu da Landing Page, mostra Auth (Login/Register)
    return (
      <>
        <ThemeToggle isDark={progress.isDarkMode} toggle={progress.toggleTheme} />
        <Auth 
          initialMode={initialAuthMode}
          onLogin={auth.login} 
          onRegister={auth.register} 
          onAdminClick={() => setShowAdminLogin(true)}
          onBack={() => setShowLanding(true)} // Botão para voltar para Landing Page
        />
      </>
    );
  }

  // Course App (Logado)
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-300 select-none">
      <ThemeToggle isDark={progress.isDarkMode} toggle={progress.toggleTheme} />

      {/* Header Mobile */}
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-white dark:bg-dark-card border-b border-gray-200 dark:border-dark-border px-4 py-3 z-30 flex items-center justify-between shadow-sm">
        <h1 className="font-bold text-brand-600 dark:text-brand-400 text-lg">Finanças</h1>
        <div className="flex items-center gap-2">
           <button onClick={handleLogout} className="p-2 text-gray-500 hover:text-red-500">
             <LogOut className="w-5 h-5" />
           </button>
           <button 
             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
             className="p-2 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
           >
             {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
           </button>
        </div>
      </header>

      {/* Overlay Escuro para Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className="lg:h-screen lg:sticky lg:top-0">
        <Sidebar 
          modules={progress.modules}
          completedLessons={progress.completedLessons}
          currentLessonId={progress.currentLessonId}
          onSelectLesson={progress.setCurrentLesson}
          isOpen={isSidebarOpen}
          onCloseMobile={() => setIsSidebarOpen(false)}
          userName={auth.user.name}
          onLogout={handleLogout}
          expandedModules={expandedModules}
          toggleModule={toggleModule}
          onOpenAdmin={() => {
            setIsSidebarOpen(false);
            setShowAdminLogin(true);
          }}
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 w-full pt-16 lg:pt-0 min-h-screen flex flex-col max-w-[1600px] mx-auto z-0 relative">
        {progress.currentLessonId ? (
          <LessonView 
            lessonId={progress.currentLessonId}
            modules={progress.modules}
            isCompleted={progress.completedLessons.includes(progress.currentLessonId)}
            onComplete={(id) => {
              progress.markLessonComplete(id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
              progress.navigateToNext();
            }}
            onNext={progress.navigateToNext}
            onPrev={progress.navigateToPrev}
            onHome={() => progress.setCurrentLesson(null)}
          />
        ) : (
          <Dashboard 
            context={progress} 
            userName={auth.user.name} 
            onViewModule={handleOpenModule}
          />
        )}
      </main>
    </div>
  );
};

export default App;
