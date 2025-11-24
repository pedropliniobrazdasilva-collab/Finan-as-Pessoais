import React from 'react';
import { Module } from '../types';
import { ChevronDown, ChevronRight, CheckCircle, Circle, Play, UserCircle, LogOut, ShieldCheck } from 'lucide-react';

interface SidebarProps {
  modules: Module[];
  completedLessons: string[];
  currentLessonId: string | null;
  onSelectLesson: (id: string) => void;
  isOpen: boolean;
  onCloseMobile: () => void;
  userName: string;
  onLogout: () => void;
  expandedModules: string[];
  toggleModule: (id: string) => void;
  onOpenAdmin: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  modules, 
  completedLessons, 
  currentLessonId, 
  onSelectLesson,
  isOpen,
  onCloseMobile,
  userName,
  onLogout,
  expandedModules,
  toggleModule,
  onOpenAdmin
}) => {
  return (
    <aside className={`
      fixed inset-y-0 left-0 z-50 w-80 bg-white dark:bg-dark-card border-r border-gray-200 dark:border-dark-border transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl lg:shadow-none
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      lg:translate-x-0 lg:static lg:h-full lg:z-auto
    `}>
      {/* Header */}
      <div className="p-6 border-b border-gray-100 dark:border-dark-border flex justify-between items-center lg:block">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <span className="w-2 h-6 bg-brand-500 rounded-full"></span>
          Finanças Pessoais
        </h2>
        {/* Botão fechar apenas mobile dentro do menu para UX */}
        <button onClick={onCloseMobile} className="lg:hidden text-gray-500">
           {/* Ícone ou texto se necessário, mas o overlay já fecha */}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-2 custom-scrollbar">
        {modules.map((module, idx) => {
          const isExpanded = expandedModules.includes(module.id);
          const completedCount = module.lessons.filter(l => completedLessons.includes(l.id)).length;
          const isModuleComplete = completedCount === module.lessons.length;
          
          return (
            <div key={module.id} className="mb-2">
              <button
                onClick={() => toggleModule(module.id)}
                className={`
                  w-full flex items-center justify-between p-3 text-left rounded-xl transition-all outline-none focus:ring-2 focus:ring-brand-500/20
                  ${isExpanded ? 'bg-gray-50 dark:bg-slate-800/50' : 'hover:bg-gray-50 dark:hover:bg-slate-800/30'}
                `}
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className={`
                    w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0 transition-colors
                    ${isModuleComplete ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}
                  `}>
                    {isModuleComplete ? <CheckCircle className="w-4 h-4" /> : idx + 1}
                  </div>
                  <span className="font-semibold text-gray-700 dark:text-gray-200 text-sm truncate">{module.title}</span>
                </div>
                {isExpanded ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
              </button>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="ml-3 border-l-2 border-gray-100 dark:border-gray-800 my-1 pl-2 space-y-1">
                  {module.lessons.map((lesson) => {
                    const isCompleted = completedLessons.includes(lesson.id);
                    const isActive = currentLessonId === lesson.id;

                    return (
                      <button
                        key={lesson.id}
                        onClick={() => {
                          onSelectLesson(lesson.id);
                          onCloseMobile();
                        }}
                        className={`
                          w-full flex items-center gap-3 px-3 py-2.5 text-left text-sm rounded-lg transition-all outline-none
                          ${isActive 
                            ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:text-brand-400 font-medium' 
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800/20'}
                        `}
                      >
                        <div className="shrink-0">
                           {isCompleted ? (
                             <CheckCircle className="w-4 h-4 text-green-500" />
                           ) : isActive ? (
                             <Play className="w-4 h-4 fill-current" />
                           ) : (
                             <Circle className="w-3 h-3 text-gray-300 dark:text-gray-600" />
                           )}
                        </div>
                        <span className={`truncate ${isCompleted ? 'opacity-70' : ''}`}>
                          {lesson.title.split('. ')[1] || lesson.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </nav>

      {/* User Footer */}
      <div className="p-4 border-t border-gray-100 dark:border-dark-border bg-gray-50 dark:bg-slate-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-brand-100 dark:bg-brand-900 rounded-full flex items-center justify-center text-brand-600 dark:text-brand-400">
            <UserCircle className="w-6 h-6" />
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{userName}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Aluno</p>
          </div>
        </div>
        
        <div className="space-y-1">
          <button 
            onClick={onOpenAdmin}
            className="w-full flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 py-2 rounded-lg transition-colors"
          >
            <ShieldCheck className="w-4 h-4" />
            Painel Admin
          </button>
          
          <button 
            onClick={onLogout}
            className="w-full flex items-center justify-center gap-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 py-2 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sair da Conta
          </button>
        </div>
      </div>
    </aside>
  );
};