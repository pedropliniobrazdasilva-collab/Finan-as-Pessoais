
import React, { useMemo } from 'react';
import { CourseContextType } from '../types';
import { 
  Trophy, 
  ArrowRight, 
  Play, 
  CheckCircle, 
  Clock, 
  Target, 
  Flame, 
  Lock, 
  TrendingUp,
  BookOpen
} from 'lucide-react';

interface DashboardProps {
  context: CourseContextType;
  userName: string;
  onViewModule: (moduleId: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ context, userName, onViewModule }) => {
  const { modules, progressPercentage, setCurrentLesson, completedLessons, timeSpent } = context;

  // Lógica para encontrar a próxima lição
  const nextLessonData = useMemo(() => {
    for (const mod of modules) {
      for (const lesson of mod.lessons) {
        if (!completedLessons.includes(lesson.id)) {
          return { lesson, module: mod };
        }
      }
    }
    return null;
  }, [modules, completedLessons]);

  // Estatísticas
  const stats = useMemo(() => {
    const totalLessons = modules.reduce((acc, mod) => acc + mod.lessons.length, 0);
    const totalCompleted = completedLessons.length;
    const completedModules = modules.filter(m => 
      m.lessons.every(l => completedLessons.includes(l.id))
    ).length;
    
    // Formatação do tempo real (timeSpent está em segundos)
    const hours = Math.floor(timeSpent / 3600);
    const minutes = Math.floor((timeSpent % 3600) / 60);

    return { totalLessons, totalCompleted, completedModules, hours, minutes };
  }, [modules, completedLessons, timeSpent]);

  const handleContinueModule = (module: any) => {
    const firstUncompletedLesson = module.lessons.find((l: any) => !completedLessons.includes(l.id));
    if (firstUncompletedLesson) {
      setCurrentLesson(firstUncompletedLesson.id);
    } else {
      setCurrentLesson(module.lessons[0].id);
    }
  };

  return (
    <div className="w-full min-h-screen pb-20 animate-in fade-in duration-700 bg-gray-50 dark:bg-[#0B1120]">
      
      {/* Header & Greetings */}
      <header className="px-6 md:px-10 pt-10 pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 max-w-7xl mx-auto">
          <div>
            <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
              Painel do Aluno
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              Olá, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-400">{userName.split(' ')[0]}</span>!
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">
              Sua liberdade financeira está a <strong className="text-brand-600 dark:text-brand-400">{100 - progressPercentage}%</strong> de distância.
            </p>
          </div>
          
          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
             <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
             <span className="text-sm font-bold text-gray-700 dark:text-gray-200">
               Modo Foco Ativo
             </span>
          </div>
        </div>
      </header>

      <div className="px-6 md:px-10 max-w-7xl mx-auto space-y-12">
        
        {/* HERO: Continue Watching */}
        {nextLessonData ? (
          <section className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-900/20 group cursor-pointer transition-transform hover:scale-[1.01]" onClick={() => setCurrentLesson(nextLessonData.lesson.id)}>
             {/* Background Image com Overlay */}
             <div className="absolute inset-0">
               <img 
                 src={nextLessonData.lesson.image} 
                 alt="Next Lesson" 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                 onError={(e) => {
                    // Fallback para imagem segura caso a original falhe
                    e.currentTarget.src = "https://images.unsplash.com/photo-1611974765270-ca1258ef3612?q=80&w=1200";
                 }}
               />
               <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
             </div>

             <div className="relative z-10 p-8 md:p-12 flex flex-col items-start justify-center min-h-[300px] md:min-h-[380px]">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-lg shadow-brand-500/40">
                  <Play className="w-3 h-3 fill-current" /> Continuar de onde parou
                </div>
                
                <h3 className="text-brand-300 font-bold text-sm md:text-base uppercase tracking-widest mb-2">
                  {nextLessonData.module.title}
                </h3>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 max-w-2xl leading-tight">
                  {nextLessonData.lesson.title.split('. ')[1] || nextLessonData.lesson.title}
                </h2>
                
                <div className="flex items-center gap-6 mb-8 text-gray-300 text-sm font-medium">
                   <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {nextLessonData.lesson.duration}</span>
                   <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                   <span>Aula {nextLessonData.module.lessons.findIndex(l => l.id === nextLessonData.lesson.id) + 1} de {nextLessonData.module.lessons.length}</span>
                </div>

                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentLesson(nextLessonData.lesson.id);
                  }}
                  className="px-8 py-4 bg-white text-gray-900 hover:bg-brand-50 font-bold rounded-xl flex items-center gap-3 transition-all shadow-xl hover:shadow-white/20 active:scale-95"
                >
                  <Play className="w-5 h-5 fill-gray-900" />
                  Assistir Agora
                </button>
             </div>
          </section>
        ) : (
          <section className="relative w-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-brand-600 to-emerald-800 p-12 text-center text-white shadow-xl">
             <div className="relative z-10">
               <Trophy className="w-20 h-20 mx-auto text-yellow-300 mb-6 drop-shadow-lg" />
               <h2 className="text-4xl font-extrabold mb-4">Parabéns! Você concluiu o curso.</h2>
               <p className="text-xl text-brand-100 max-w-xl mx-auto mb-8">
                 Você completou 100% das aulas. Seu futuro financeiro começa agora.
               </p>
               <button className="px-8 py-3 bg-white text-brand-700 font-bold rounded-xl shadow-lg hover:bg-gray-50 transition-colors">
                 Emitir Certificado (Em breve)
               </button>
             </div>
          </section>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
           <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                 <BookOpen className="w-5 h-5" />
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalCompleted}/{stats.totalLessons}</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Aulas Concluídas</p>
           </div>
           
           <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 flex items-center justify-center mb-3">
                 <CheckCircle className="w-5 h-5" />
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.completedModules}</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Módulos Finalizados</p>
           </div>

           <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
                 <Clock className="w-5 h-5" />
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                 {stats.hours}h {stats.minutes}m
              </p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Tempo Online</p>
           </div>

           <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-3">
                 <TrendingUp className="w-5 h-5" />
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{progressPercentage}%</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Progresso Total</p>
           </div>
        </div>

        {/* Modules Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Target className="w-6 h-6 text-brand-500" />
              Sua Jornada
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => {
              const completedCount = module.lessons.filter(l => completedLessons.includes(l.id)).length;
              const totalCount = module.lessons.length;
              const percent = Math.round((completedCount / totalCount) * 100);
              const isStarted = completedCount > 0;
              const isCompleted = percent === 100;
              
              // Define o status do módulo
              const isLocked = false; 

              return (
                <div 
                  key={module.id} 
                  className={`
                    group relative bg-white dark:bg-[#131B2C] rounded-3xl border border-gray-100 dark:border-white/5 overflow-hidden transition-all duration-300
                    ${isLocked ? 'opacity-70 grayscale' : 'hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/10'}
                  `}
                >
                  {/* Image Cover */}
                  <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
                    <img 
                      src={module.lessons[0]?.image || 'https://images.unsplash.com/photo-1579621970569-c70188618bd2'} 
                      alt={module.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1611974765270-ca1258ef3612?q=80&w=1200";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131B2C] to-transparent opacity-90"></div>
                    
                    <div className="absolute top-4 right-4 z-10">
                       {isCompleted ? (
                         <div className="bg-green-500 text-white p-1.5 rounded-full shadow-lg">
                           <CheckCircle className="w-5 h-5" />
                         </div>
                       ) : isLocked ? (
                         <div className="bg-gray-800 text-gray-400 p-1.5 rounded-full">
                           <Lock className="w-5 h-5" />
                         </div>
                       ) : (
                         <div className="bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold border border-white/20">
                           {totalCount} Aulas
                         </div>
                       )}
                    </div>

                    <div className="absolute bottom-4 left-6 right-6 z-10">
                       <p className="text-xs font-bold text-brand-400 uppercase tracking-widest mb-1">Módulo {String(index).padStart(2, '0')}</p>
                       <h4 className="text-xl font-bold text-white leading-tight">
                         {module.title.split(': ')[1] || module.title}
                       </h4>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3 text-sm">
                       <span className="text-gray-500 dark:text-gray-400 font-medium">Progresso</span>
                       <span className={`font-bold ${isCompleted ? 'text-green-500' : 'text-brand-600 dark:text-brand-400'}`}>
                         {percent}%
                       </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden mb-6">
                       <div 
                         className={`h-full rounded-full transition-all duration-500 ${isCompleted ? 'bg-green-500' : 'bg-brand-500'}`}
                         style={{ width: `${percent}%` }}
                       ></div>
                    </div>

                    <div className="flex gap-3">
                       <button 
                         onClick={() => handleContinueModule(module)}
                         className={`
                           flex-1 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors
                           ${isCompleted 
                             ? 'bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10' 
                             : 'bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-500/20'}
                         `}
                       >
                         {isCompleted ? 'Revisar' : isStarted ? 'Continuar' : 'Iniciar'}
                         {!isCompleted && <Play className="w-3.5 h-3.5 fill-current" />}
                       </button>
                       
                       <button 
                         onClick={() => onViewModule(module.id)}
                         className="px-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-brand-500 text-gray-500 dark:text-gray-400 hover:text-brand-500 transition-colors"
                         title="Ver aulas"
                       >
                         <BookOpen className="w-5 h-5" />
                       </button>
                    </div>
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
