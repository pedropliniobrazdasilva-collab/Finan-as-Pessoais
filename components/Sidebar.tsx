import React, { useState } from 'react';
import { Module, Lesson } from '../types';
import { ChevronDown, ChevronRight, CheckCircle, Circle, PlayCircle } from 'lucide-react';

interface SidebarProps {
  modules: Module[];
  completedLessons: string[];
  currentLessonId: string | null;
  onSelectLesson: (id: string) => void;
  isOpen: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  modules, 
  completedLessons, 
  currentLessonId, 
  onSelectLesson,
  isOpen,
  onCloseMobile
}) => {
  // Auto expand the module containing the current lesson
  const [expandedModules, setExpandedModules] = useState<string[]>(() => {
    if (!currentLessonId) return ['mod1'];
    const activeMod = modules.find(m => m.lessons.some(l => l.id === currentLessonId));
    return activeMod ? [activeMod.id] : ['mod1'];
  });

  const toggleModule = (modId: string) => {
    setExpandedModules(prev => 
      prev.includes(modId) ? prev.filter(id => id !== modId) : [...prev, modId]
    );
  };

  const isModuleComplete = (mod: Module) => {
    return mod.lessons.every(l => completedLessons.includes(l.id));
  };

  return (
    <aside className={`
      fixed inset-y-0 left-0 z-40 w-80 bg-white dark:bg-dark-card border-r border-gray-200 dark:border-dark-border transform transition-transform duration-300 ease-in-out overflow-y-auto
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      lg:translate-x-0 lg:static lg:h-screen
    `}>
      <div className="p-6 border-b border-gray-100 dark:border-dark-border">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
          Finanças Pessoais
          <span className="block text-sm font-normal text-brand-600 dark:text-brand-400 mt-1">Do Zero ao Avançado</span>
        </h1>
      </div>

      <div className="py-4">
        {modules.map((module) => {
          const isExpanded = expandedModules.includes(module.id);
          const isComplete = isModuleComplete(module);
          
          return (
            <div key={module.id} className="mb-2">
              <button
                onClick={() => toggleModule(module.id)}
                className="w-full flex items-center justify-between px-6 py-3 text-left hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {isComplete ? (
                    <CheckCircle className="w-5 h-5 text-brand-500" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center text-xs font-bold text-gray-400 dark:text-gray-500">
                      {modules.indexOf(module) + 1}
                    </div>
                  )}
                  <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{module.title}</span>
                </div>
                {isExpanded ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
              </button>

              {isExpanded && (
                <div className="bg-gray-50 dark:bg-slate-900/50 py-2 border-y border-gray-100 dark:border-dark-border">
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
                          w-full flex items-start gap-3 px-8 py-3 text-left text-sm transition-colors border-l-4
                          ${isActive 
                            ? 'bg-brand-50 dark:bg-brand-900/20 text-brand-800 dark:text-brand-300 border-brand-500 font-medium' 
                            : 'text-gray-600 dark:text-gray-400 border-transparent hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white'}
                        `}
                      >
                        <div className="mt-0.5 shrink-0">
                           {isCompleted ? (
                             <CheckCircle className="w-4 h-4 text-brand-500" />
                           ) : isActive ? (
                             <PlayCircle className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                           ) : (
                             <Circle className="w-4 h-4 text-gray-300 dark:text-gray-600" />
                           )}
                        </div>
                        <span className={isCompleted ? 'line-through text-gray-400 dark:text-gray-600' : ''}>
                          {lesson.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};