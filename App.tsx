import React, { useState } from 'react';
import { useCourseProgress } from './hooks/useCourseProgress';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { LessonView } from './components/LessonView';
import { Login } from './components/Login';
import { Menu, X, Moon, Sun, PartyPopper, Check } from 'lucide-react';

// Theme Toggle Component
const ThemeToggle: React.FC<{ isDark: boolean; toggle: () => void }> = ({ isDark, toggle }) => (
  <button
    onClick={toggle}
    className="fixed bottom-6 right-6 z-50 bg-white dark:bg-slate-800 text-gray-900 dark:text-white p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform"
    title={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
  >
    {isDark ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-slate-600" />}
  </button>
);

// Welcome Modal Component
const WelcomeModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white dark:bg-dark-card w-full max-w-lg rounded-2xl shadow-2xl p-8 relative overflow-hidden animate-in zoom-in-95 duration-300 border border-gray-200 dark:border-dark-border">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-400 to-brand-600"></div>
        
        <div className="flex justify-center mb-6">
          <div className="bg-brand-100 dark:bg-brand-900/50 p-4 rounded-full animate-bounce">
            <PartyPopper className="w-12 h-12 text-brand-600 dark:text-brand-400" />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
          Parabéns pela decisão!
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
          Você acaba de investir no seu maior ativo: <strong>você mesmo.</strong>
        </p>

        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
              <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
            </div>
            <span>Aprenda a controlar cada centavo</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
              <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
            </div>
            <span>Saia das dívidas de forma inteligente</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
              <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
            </div>
            <span>Comece a investir e multiplicar riqueza</span>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="w-full bg-brand-600 hover:bg-brand-700 text-white py-3.5 rounded-xl font-bold text-lg shadow-lg transition-transform active:scale-95"
        >
          Começar minha jornada
        </button>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const progress = useCourseProgress();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Auth State logic
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('fp_access_granted') === 'true';
  });

  const handleLogin = () => {
    localStorage.setItem('fp_access_granted', 'true');
    setIsAuthenticated(true);
  };

  // If user is NOT authenticated, show Login Screen
  if (!isAuthenticated) {
    return (
      <>
        <Login onLogin={handleLogin} />
        {/* Show theme toggle on login screen too */}
        <ThemeToggle isDark={progress.isDarkMode} toggle={progress.toggleTheme} />
      </>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
      
      <ThemeToggle isDark={progress.isDarkMode} toggle={progress.toggleTheme} />
      <WelcomeModal isOpen={progress.showWelcomeModal} onClose={progress.closeWelcomeModal} />

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white dark:bg-dark-card border-b border-gray-200 dark:border-dark-border px-4 py-3 z-50 flex items-center justify-between transition-colors duration-300">
        <span className="font-bold text-gray-900 dark:text-white">Finanças Pessoais</span>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg"
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <Sidebar 
        modules={progress.modules}
        completedLessons={progress.completedLessons}
        currentLessonId={progress.currentLessonId}
        onSelectLesson={progress.setCurrentLesson}
        isOpen={isSidebarOpen}
        onCloseMobile={() => setIsSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full transition-all duration-300 pt-16 lg:pt-0 min-h-screen">
        {progress.currentLessonId ? (
          <LessonView 
            lessonId={progress.currentLessonId}
            modules={progress.modules}
            isCompleted={progress.completedLessons.includes(progress.currentLessonId)}
            onComplete={(id) => {
              progress.markLessonComplete(id);
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }}
            onNext={progress.navigateToNext}
            onPrev={progress.navigateToPrev}
            onHome={() => progress.setCurrentLesson(null)}
          />
        ) : (
          <Dashboard context={progress} />
        )}
      </main>
    </div>
  );
};

export default App;