import React from 'react';
import { CourseContextType } from '../types';
import { ProgressBar } from './ProgressBar';
import { Trophy, ArrowRight, Play, CheckCircle, List, Eye } from 'lucide-react';

interface DashboardProps {
  context: CourseContextType;
  userName: string;
  onViewModule: (moduleId: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ context, userName, onViewModule }) => {
  const { modules, progressPercentage, setCurrentLesson, completedLessons } = context;

  const nextLesson = React.useMemo(() => {
    for (const mod of modules) {
      for (const lesson of mod.lessons) {
        if (!completedLessons.includes(lesson.id)) {
          return { lesson, module: mod };
        }
      }
    }
    return null;
  }, [modules, completedLessons]);

  const handleContinueModule = (module: any) => {
    // Encontra a primeira aula NÃO completada deste módulo
    const firstUncompletedLesson = module.lessons.find((l: any) => !completedLessons.includes(l.id));
    
    if (firstUncompletedLesson) {
      setCurrentLesson(firstUncompletedLesson.id);
    } else {
      // Se todas estiverem completas, volta para a primeira (revisão)
      setCurrentLesson(module.lessons[0].id);
    }
  };

  return (
    <div className="w-full animate-in fade-in duration-500 pb-20">
      
      {/* Welcome Hero */}
      <header className="bg-white dark:bg-dark-card border-b border-gray-100 dark:border-dark-border px-6 md:px-12 py-12 mb-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
            Olá, <span className="text-brand-600 dark:text-brand-400">{userName}</span>! 👋
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Vamos continuar construindo sua liberdade financeira hoje?
          </p>
        </div>
      </header>

      <div className="px-6 md:px-12 max-w-7xl mx-auto space-y-10">
        
        {/* Progress Card */}
        <section className="bg-gradient-to-r from-brand-600 to-brand-800 rounded-3xl p-8 text-white shadow-xl shadow-brand-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex-1 w-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Trophy className="w-6 h-6 text-yellow-300" />
                </div>
                <h2 className="font-bold text-lg">Seu Progresso Geral</h2>
              </div>
              <div className="w-full bg-black/20 rounded-full h-4 mb-2 overflow-hidden backdrop-blur-sm">
                <div 
                  className="bg-white h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <p className="text-brand-100 text-sm font-medium">{progressPercentage}% Concluído</p>
            </div>

            {nextLesson ? (
              <div className="w-full md:w-auto bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl min-w-[300px]">
                <p className="text-brand-100 text-xs font-bold uppercase mb-2 tracking-wider">Próxima Aula Sugerida</p>
                <h3 className="font-bold text-xl mb-1 line-clamp-1">{nextLesson.lesson.title}</h3>
                <p className="text-sm text-brand-50 mb-4 opacity-90">{nextLesson.module.title}</p>
                <button 
                  onClick={() => setCurrentLesson(nextLesson.lesson.id)}
                  className="w-full bg-white text-brand-700 hover:bg-brand-50 font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  Continuar <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
               <div className="w-full md:w-auto bg-white/20 backdrop-blur-md p-6 rounded-2xl text-center min-w-[200px]">
                 <p className="font-bold text-xl">🎉 Curso Concluído!</p>
               </div>
            )}
          </div>
        </section>

        {/* Modules Grid */}
        <section>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-brand-500 rounded-full"></span>
            Módulos do Curso
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => {
              const completedCount = module.lessons.filter(l => completedLessons.includes(l.id)).length;
              const totalCount = module.lessons.length;
              const percent = Math.round((completedCount / totalCount) * 100);
              const isStarted = completedCount > 0;
              const isCompleted = percent === 100;
              const hasPending = completedCount < totalCount;

              return (
                <div 
                  key={module.id} 
                  className={`
                    group bg-white dark:bg-dark-card border rounded-2xl p-6 transition-all hover:shadow-lg flex flex-col
                    ${isStarted ? 'border-brand-200 dark:border-brand-900/30' : 'border-gray-200 dark:border-dark-border'}
                  `}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg
                      ${isCompleted ? 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400' : 'bg-gray-100 text-gray-500 dark:bg-slate-800 dark:text-gray-400'}
                    `}>
                      {isCompleted ? <CheckCircle className="w-6 h-6" /> : (modules.indexOf(module) + 1)}
                    </div>
                    {isStarted && (
                      <span className="text-xs font-bold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20 px-2 py-1 rounded-full">
                        {percent}%
                      </span>
                    )}
                  </div>
                  
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-2 leading-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {module.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex-1">
                    {completedCount} de {totalCount} aulas
                  </p>

                  <div className="grid grid-cols-4 gap-2">
                    {/* Botão Principal: Continuar/Iniciar */}
                    <button 
                      onClick={() => handleContinueModule(module)}
                      className="col-span-3 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-500/20"
                    >
                      {isStarted && hasPending ? 'Continuar' : isCompleted ? 'Revisar' : 'Iniciar'}
                      <Play className="w-4 h-4 fill-current" />
                    </button>

                    {/* Botão Secundário: Visualizar Aulas (Olho) */}
                    <button 
                      onClick={() => onViewModule(module.id)}
                      title="Visualizar lista de aulas"
                      className="col-span-1 flex items-center justify-center rounded-xl border-2 border-gray-100 dark:border-gray-700 hover:border-brand-500 dark:hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-900/10 text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-all"
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};