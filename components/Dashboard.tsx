import React, { useState } from 'react';
import { CourseContextType, Module } from '../types';
import { ProgressBar } from './ProgressBar';
import { 
  Trophy, Clock, BookOpen, Play, CheckCircle, 
  Target, TrendingUp, ShieldCheck, ChevronDown, 
  ChevronUp, Lock, PlayCircle, ArrowRight
} from 'lucide-react';

interface DashboardProps {
  context: CourseContextType;
}

export const Dashboard: React.FC<DashboardProps> = ({ context }) => {
  const { modules, progressPercentage, setCurrentLesson, completedLessons } = context;
  const [activeModuleId, setActiveModuleId] = useState<string | null>('mod1');

  const scrollToModules = () => {
    const element = document.getElementById('modules-list');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleModule = (id: string) => {
    setActiveModuleId(activeModuleId === id ? null : id);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white dark:bg-dark-card border-b border-gray-200 dark:border-dark-border transition-colors duration-300">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-xs font-bold tracking-wide uppercase mb-4 border border-brand-200 dark:border-brand-800/50">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                Área do Aluno
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
                Finanças Pessoais
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Você deu o primeiro passo para a liberdade. Aqui você vai dominar seu dinheiro, 
                eliminar dívidas e construir um patrimônio sólido.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={scrollToModules}
                  className="bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-brand-500/20 transition-all transform hover:-translate-y-1 flex items-center gap-3"
                >
                  {progressPercentage > 0 ? 'CONTINUAR ESTUDOS' : 'COMEÇAR AGORA'}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="w-full md:w-1/3 bg-gray-50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 dark:border-dark-border shadow-xl">
              <h3 className="text-gray-900 dark:text-white font-bold mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Seu Desempenho
              </h3>
              <ProgressBar progress={progressPercentage} className="mb-6" />
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-dark-card p-4 rounded-xl border border-gray-100 dark:border-dark-border">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {completedLessons.length}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase mt-1">
                    Aulas Concluídas
                  </div>
                </div>
                <div className="bg-white dark:bg-dark-card p-4 rounded-xl border border-gray-100 dark:border-dark-border">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {modules.reduce((acc, m) => acc + m.lessons.length, 0)}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase mt-1">
                    Total de Aulas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Pillars */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">O que você vai dominar</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-dark-card p-6 rounded-xl border border-gray-200 dark:border-dark-border hover:border-brand-500 dark:hover:border-brand-500 transition-colors group">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Organização Total</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Aprenda a mapear cada centavo, criar orçamentos inteligentes e nunca mais ficar no vermelho.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-card p-6 rounded-xl border border-gray-200 dark:border-dark-border hover:border-brand-500 dark:hover:border-brand-500 transition-colors group">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Blindagem & Dívidas</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Estratégias para sair das dívidas pagando menos e proteger seu patrimônio de armadilhas.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-card p-6 rounded-xl border border-gray-200 dark:border-dark-border hover:border-brand-500 dark:hover:border-brand-500 transition-colors group">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-brand-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Investimentos</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Do Tesouro Direto aos Fundos Imobiliários. Faça o dinheiro trabalhar por você.
            </p>
          </div>
        </div>
      </div>

      {/* Course Content List */}
      <div id="modules-list" className="max-w-5xl mx-auto px-6 py-12 pb-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Conteúdo do Curso</h2>
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            {modules.length} Módulos • {modules.reduce((acc, m) => acc + m.lessons.length, 0)} Aulas
          </span>
        </div>

        <div className="space-y-6">
          {modules.map((module, index) => {
            const isActive = activeModuleId === module.id;
            const completedInModule = module.lessons.filter(l => completedLessons.includes(l.id)).length;
            const totalInModule = module.lessons.length;
            const percentModule = Math.round((completedInModule / totalInModule) * 100);
            const isModuleCompleted = percentModule === 100;

            return (
              <div 
                key={module.id} 
                className={`
                  rounded-2xl border transition-all duration-300 overflow-hidden
                  ${isActive 
                    ? 'bg-white dark:bg-dark-card border-brand-500 dark:border-brand-500 shadow-lg shadow-brand-500/10' 
                    : 'bg-white dark:bg-dark-card border-gray-200 dark:border-dark-border hover:border-gray-300 dark:hover:border-gray-600'}
                `}
              >
                <button 
                  onClick={() => toggleModule(module.id)}
                  className="w-full px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-bold text-lg transition-colors
                      ${isModuleCompleted 
                        ? 'bg-brand-100 dark:bg-brand-900/50 text-brand-600 dark:text-brand-400' 
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'}
                    `}>
                      {isModuleCompleted ? <CheckCircle className="w-6 h-6" /> : index + 1}
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${isActive ? 'text-brand-700 dark:text-brand-400' : 'text-gray-900 dark:text-white'}`}>
                        {module.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {completedInModule}/{totalInModule} aulas concluídas
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 pl-16 md:pl-0">
                    <div className="hidden md:block w-32">
                      <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-brand-500 rounded-full" 
                          style={{ width: `${percentModule}%` }}
                        />
                      </div>
                    </div>
                    {isActive ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </div>
                </button>

                {/* Lessons List */}
                <div className={`
                  transition-all duration-300 ease-in-out
                  ${isActive ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
                  bg-gray-50 dark:bg-slate-900/50 border-t border-gray-100 dark:border-dark-border
                `}>
                  <div className="p-2 md:p-4 space-y-2">
                    {module.lessons.map((lesson) => {
                      const isLessonCompleted = completedLessons.includes(lesson.id);
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => setCurrentLesson(lesson.id)}
                          className="w-full flex items-center justify-between p-3 md:p-4 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors group text-left border border-transparent hover:border-gray-200 dark:hover:border-dark-border"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`
                              w-8 h-8 rounded-full flex items-center justify-center shrink-0
                              ${isLessonCompleted ? 'text-brand-500' : 'text-gray-400'}
                            `}>
                              {isLessonCompleted ? <CheckCircle className="w-5 h-5" /> : <PlayCircle className="w-5 h-5 group-hover:text-brand-500 transition-colors" />}
                            </div>
                            <div>
                              <span className={`text-sm md:text-base font-medium ${isLessonCompleted ? 'text-gray-500 dark:text-gray-500 line-through' : 'text-gray-700 dark:text-gray-200'}`}>
                                {lesson.title}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <Clock className="w-3 h-3" />
                            {lesson.duration}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};