import React, { useEffect, useMemo } from 'react';
import { Lesson, Module } from '../types';
import { ChevronLeft, ChevronRight, CheckCircle, Home, Clock, BookOpen, PenTool } from 'lucide-react';

interface LessonViewProps {
  lessonId: string;
  modules: Module[];
  isCompleted: boolean;
  onComplete: (id: string) => void;
  onNext: () => void;
  onPrev: () => void;
  onHome: () => void;
}

export const LessonView: React.FC<LessonViewProps> = ({
  lessonId,
  modules,
  isCompleted,
  onComplete,
  onNext,
  onPrev,
  onHome
}) => {
  // Find current lesson and its module
  const activeData = useMemo(() => {
    for (const mod of modules) {
      const lesson = mod.lessons.find(l => l.id === lessonId);
      if (lesson) return { lesson, module: mod };
    }
    return null;
  }, [lessonId, modules]);

  // Scroll to top on lesson change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lessonId]);

  if (!activeData) return <div className="p-10 text-center dark:text-white">Aula não encontrada</div>;

  const { lesson, module } = activeData;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* Header Navigation */}
      <div className="flex items-center justify-between mb-8 text-sm text-gray-500 dark:text-gray-400">
        <button onClick={onHome} className="flex items-center gap-1 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
          <Home className="w-4 h-4" />
          Dashboard
        </button>
        <div className="flex items-center gap-2">
          <span className="bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 px-3 py-1 rounded-full font-medium text-xs tracking-wide uppercase border border-brand-100 dark:border-brand-800">
            {module.title.split(':')[0]}
          </span>
        </div>
      </div>

      {/* Title Header */}
      <div className="mb-10 border-b border-gray-200 dark:border-dark-border pb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
          {lesson.title}
        </h1>
        <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {lesson.duration}
          </div>
          {isCompleted && (
            <div className="flex items-center gap-1 text-brand-600 dark:text-brand-400 font-medium">
              <CheckCircle className="w-4 h-4" />
              Concluída
            </div>
          )}
        </div>
      </div>

      {/* Content Body */}
      <div className="prose prose-lg prose-slate dark:prose-invert max-w-none mb-16">
        {/* Intro */}
        <div className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-8 font-medium">
          <div dangerouslySetInnerHTML={{ __html: lesson.content.intro.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 dark:text-white font-bold">$1</strong>') }} />
        </div>

        {/* Note Taking Warning */}
        <div className="flex items-start md:items-center gap-4 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800/30 p-5 rounded-xl mb-8 shadow-sm">
          <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-lg shrink-0">
             <PenTool className="w-5 h-5 text-yellow-700 dark:text-yellow-400" />
          </div>
          <p className="text-sm md:text-base font-medium text-yellow-800 dark:text-yellow-200 m-0">
            <strong>Atenção:</strong> Anote os pontos principais desta aula em um caderno ou bloco de notas. Escrever ajuda a fixar o conteúdo!
          </p>
        </div>

        {/* Aula Content Box - Gray Background */}
        <div className="bg-gray-100 dark:bg-slate-800/60 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-dark-border shadow-sm mb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-0 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                Aula
            </h3>
            <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-0">
            {lesson.content.explanation}
            </p>
        </div>

        {lesson.content.examples.length > 0 && (
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
            <h4 className="text-blue-800 dark:text-blue-300 font-bold mb-3 text-lg mt-0">Exemplos Reais</h4>
            <ul className="space-y-2 mb-0">
              {lesson.content.examples.map((ex, i) => (
                <li key={i} className="flex gap-2 text-blue-900 dark:text-blue-200">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0" />
                  {ex}
                </li>
              ))}
            </ul>
          </div>
        )}

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Onde a Maioria Erra</h3>
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-xl p-6 mb-8">
          <p className="text-red-800 dark:text-red-300 font-medium flex gap-3 mb-0">
             <span className="text-2xl">⚠️</span>
             {lesson.content.commonErrors}
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-slate-800 p-8 rounded-2xl mt-12 border border-gray-200 dark:border-dark-border">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-0">Resumo</h3>
          <p className="text-gray-700 dark:text-gray-300 italic mb-6 border-l-4 border-brand-500 pl-4">
            "{lesson.content.summary}"
          </p>

          <h3 className="text-xl font-bold text-brand-700 dark:text-brand-400 mb-4 flex items-center gap-2">
             🚀 Exercício Prático
          </h3>
          <div className="bg-white dark:bg-dark-card p-6 rounded-xl border border-gray-200 dark:border-dark-border shadow-sm">
             <p className="text-gray-800 dark:text-gray-200 font-medium mb-0">
               {lesson.content.exercise}
             </p>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex flex-col items-center gap-6 border-t border-gray-100 dark:border-dark-border pt-10">
        {!isCompleted ? (
          <button
            onClick={() => onComplete(lessonId)}
            className="w-full md:w-auto bg-brand-600 hover:bg-brand-700 dark:bg-brand-600 dark:hover:bg-brand-500 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg shadow-brand-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-6 h-6" />
            MARCAR COMO CONCLUÍDA
          </button>
        ) : (
          <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold text-lg bg-brand-50 dark:bg-brand-900/20 px-6 py-3 rounded-xl">
            <CheckCircle className="w-6 h-6" />
            Aula Concluída
          </div>
        )}

        <div className="flex justify-between w-full mt-6">
          <button 
            onClick={onPrev}
            className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors font-medium"
          >
            <ChevronLeft className="w-5 h-5" />
            Aula Anterior
          </button>
          
          <button 
            onClick={onNext}
            className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors font-medium"
          >
            Próxima Aula
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};