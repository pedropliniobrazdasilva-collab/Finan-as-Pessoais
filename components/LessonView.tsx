
import React, { useEffect, useMemo } from 'react';
import { Module } from '../types';
import { ChevronLeft, ChevronRight, CheckCircle, Clock, ArrowRight, AlertTriangle, BookOpen, Sparkles, Lightbulb, PlayCircle } from 'lucide-react';

interface LessonViewProps {
  lessonId: string;
  modules: Module[];
  isCompleted: boolean;
  onComplete: (id: string) => void;
  onNext: () => void;
  onPrev: () => void;
  onHome: () => void;
}

// Helper para renderizar negrito e itálico
const parseInline = (text: string): React.ReactNode[] => {
  if (!text) return [];
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/);
  
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-bold text-gray-900 dark:text-white">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i} className="italic text-gray-600 dark:text-gray-400 font-medium font-sans">{part.slice(1, -1)}</em>;
    }
    return part;
  });
};

const parseMarkdown = (text: string) => {
  if (!text) return null;
  // Divide por quebras de linha duplas para parágrafos, mas respeita quebras simples para listas
  const blocks = text.split(/\n\n+/);

  return blocks.map((block, index) => {
    const cleanBlock = block.trim();

    // Títulos H3
    if (cleanBlock.startsWith('###')) {
      return (
        <h3 key={index} className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-3">
          <span className="w-1.5 h-5 bg-brand-500 rounded-full"></span>
          {parseInline(cleanBlock.replace(/^###\s*/, ''))}
        </h3>
      );
    }
    
    // Títulos H2
    if (cleanBlock.startsWith('##')) {
      return (
        <h2 key={index} className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-6 border-b border-gray-100 dark:border-gray-800 pb-3">
          {parseInline(cleanBlock.replace(/^##\s*/, ''))}
        </h2>
      );
    }

    // Tabelas (linhas começando com |)
    if (cleanBlock.startsWith('|')) {
      const rows = cleanBlock.split('\n').filter(r => r.trim());
      const headerRow = rows[0];
      const bodyRows = rows.slice(2); // Pula a linha separadora |---|---|

      const parseCell = (row: string) => {
        return row.split('|').filter(c => c.trim() !== '').map(c => c.trim());
      };

      const headers = parseCell(headerRow);

      return (
        <div key={index} className="overflow-x-auto my-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-gray-50 dark:bg-slate-900/50">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-gray-100 dark:bg-slate-800 border-b border-gray-200 dark:border-gray-700">
                {headers.map((h, i) => (
                  <th key={i} className="px-5 py-4 text-xs font-extrabold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                    {parseInline(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {bodyRows.map((row, rIndex) => {
                const cells = parseCell(row);
                return (
                  <tr key={rIndex} className="hover:bg-gray-50 dark:hover:bg-slate-800/30 transition-colors">
                    {cells.map((cell, cIndex) => (
                      <td key={cIndex} className="px-5 py-4 text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed align-top">
                        {parseInline(cell)}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }

    // Listas com Bullets
    if (cleanBlock.startsWith('* ') || cleanBlock.startsWith('- ')) {
      const items = cleanBlock.split('\n').filter(line => line.trim().match(/^[*|-]\s/));
      return (
        <ul key={index} className="space-y-3 mb-6 ml-1">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 leading-relaxed p-2 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/30">
              <div className="mt-2 w-1.5 h-1.5 bg-brand-500 rounded-full shrink-0" />
              <span className="text-base md:text-lg">{parseInline(item.replace(/^[*|-]\s/, '').trim())}</span>
            </li>
          ))}
        </ul>
      );
    }

    // Listas Numeradas
    if (/^\d+\./.test(cleanBlock)) {
      const items = cleanBlock.split('\n').filter(line => /^\d+\./.test(line.trim()));
      return (
        <div key={index} className="grid gap-3 mb-6">
          {items.map((item, i) => {
             const content = item.replace(/^\d+\.\s*/, '').trim();
             return (
              <div key={i} className="flex gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-slate-800/40 border border-gray-100 dark:border-slate-700/50 hover:border-gray-300 dark:hover:border-slate-600 transition-colors">
                <span className="flex items-center justify-center w-6 h-6 rounded-md bg-brand-100 dark:bg-slate-700 text-brand-700 dark:text-brand-400 font-bold text-xs shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                  {parseInline(content)}
                </div>
              </div>
             )
          })}
        </div>
      );
    }

    // Parágrafos Padrão
    return (
      <p key={index} className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg font-normal text-left">
        {parseInline(cleanBlock)}
      </p>
    );
  });
};

export const LessonView: React.FC<LessonViewProps> = ({
  lessonId,
  modules,
  isCompleted,
  onComplete,
  onNext,
  onPrev,
  onHome
}) => {
  const activeData = useMemo(() => {
    if (!modules) return null;
    for (const mod of modules) {
      const lesson = mod.lessons?.find(l => l.id === lessonId);
      if (lesson) return { lesson, module: mod };
    }
    return null;
  }, [lessonId, modules]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lessonId]);

  if (!activeData) return null;
  const { lesson, module } = activeData;

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-[#0B1120] pb-32 font-sans selection:bg-brand-500/30 selection:text-inherit">
      
      {/* Barra de Navegação Topo */}
      <div className="sticky top-0 z-30 bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 px-4 h-16 flex items-center justify-between">
         <button onClick={onHome} className="flex items-center gap-2 text-gray-500 hover:text-brand-600 dark:text-gray-400 transition-colors text-sm font-medium">
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Voltar ao Menu</span>
         </button>
         
         <div className="flex items-center gap-3">
           <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-slate-800 rounded-full text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wide">
             <Clock className="w-3.5 h-3.5" />
             {lesson.duration}
           </div>
           <span className="text-sm font-semibold text-gray-900 dark:text-white truncate max-w-[200px] md:max-w-md">
             {lesson.title}
           </span>
         </div>

         <div className="w-8"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-12">
        
        {/* Header da Aula */}
        <div className="mb-8">
           <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider shadow-sm">
                {module.title}
              </span>
              {isCompleted && (
                <span className="px-3 py-1.5 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-bold flex items-center gap-1.5 border border-green-100 dark:border-green-900/30">
                  <CheckCircle className="w-3.5 h-3.5" /> Concluída
                </span>
              )}
           </div>
           
           <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-8 tracking-tight">
              {lesson.title.split('. ')[1] || lesson.title}
           </h1>

           <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800 border-l-4 border-brand-500 shadow-sm">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed font-serif italic">
                "{parseInline(lesson.content.intro)}"
              </p>
           </div>
        </div>

        {/* Conteúdo Principal em Card */}
        <div className="bg-white dark:bg-slate-800/40 rounded-3xl p-6 md:p-10 border border-gray-100 dark:border-gray-800 shadow-sm mb-12">
            {parseMarkdown(lesson.content.explanation)}
        </div>

        {/* Blocos Estratégicos */}
        <div className="grid gap-8 mb-16">
          
          {/* Alerta de Erro Comum */}
          <div className="relative overflow-hidden rounded-2xl border border-rose-100 dark:border-rose-900/30 bg-white dark:bg-[#1a1012] p-8 shadow-sm">
             <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>
             <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="p-3 bg-rose-50 dark:bg-rose-900/40 rounded-xl shrink-0 text-rose-600 dark:text-rose-400">
                   <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                   <h3 className="text-xs font-bold text-rose-700 dark:text-rose-400 uppercase tracking-widest mb-2">
                     Ponto de Atenção
                   </h3>
                   <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                     {parseInline(lesson.content.commonErrors)}
                   </p>
                </div>
             </div>
          </div>

          {/* Exemplos Práticos */}
          {lesson.content.examples?.length > 0 && (
            <div className="rounded-2xl bg-white dark:bg-slate-800/20 border border-gray-200 dark:border-slate-700 p-8 shadow-sm">
               <div className="flex items-center gap-4 mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Exemplos Reais
                  </h3>
               </div>
               
               <div className="grid gap-4">
                 {lesson.content.examples.map((ex, i) => (
                   <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-700/50">
                     <div className="mt-1 shrink-0">
                       <CheckCircle className="w-5 h-5 text-emerald-500" />
                     </div>
                     <span className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                       {parseInline(ex)}
                     </span>
                   </div>
                 ))}
               </div>
            </div>
          )}
        </div>

        {/* Exercício */}
        <div className="rounded-3xl bg-gray-900 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 text-white p-8 md:p-10 shadow-xl shadow-gray-200 dark:shadow-none relative overflow-hidden mb-16">
           <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <BookOpen className="w-64 h-64" />
           </div>
           <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-brand-300 text-xs font-bold uppercase tracking-wider mb-6">
                <PlayCircle className="w-3.5 h-3.5" /> Prática
              </div>
              <h3 className="text-2xl font-bold mb-4">
                 Sua Missão
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                {parseInline(lesson.content.exercise)}
              </p>
           </div>
        </div>

        {/* Resumo */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-12 mb-12">
           <div className="flex flex-col items-center text-center max-w-3xl mx-auto bg-white dark:bg-slate-800/40 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <Sparkles className="w-8 h-8 text-brand-500 mb-4" />
              <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">Resumo da Aula</h3>
              <p className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-tight font-serif">
                "{parseInline(lesson.content.summary)}"
              </p>
           </div>
        </div>

      </div>

      {/* Footer Fixo */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-[#0B1120]/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 p-4 z-40">
         <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <button 
              onClick={onPrev}
              disabled={!onPrev}
              className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors ${!onPrev ? 'opacity-0 pointer-events-none' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800'}`}
            >
               <ChevronLeft className="w-5 h-5" /> Anterior
            </button>

            <button
              onClick={() => onComplete(lessonId)}
              className={`
                flex-1 md:flex-none md:min-w-[320px] px-8 py-3.5 rounded-xl font-bold text-base md:text-lg flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl
                ${isCompleted 
                  ? 'bg-emerald-600 text-white shadow-emerald-500/20 hover:bg-emerald-500' 
                  : 'bg-brand-600 text-white shadow-brand-500/20 hover:bg-brand-500'}
              `}
            >
              {isCompleted ? (
                <>Aula Concluída <CheckCircle className="w-5 h-5" /></>
              ) : (
                <>Concluir e Avançar <ArrowRight className="w-5 h-5" /></>
              )}
            </button>

            <button 
              onClick={onNext}
              disabled={!onNext}
              className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors ${!onNext ? 'opacity-0 pointer-events-none' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800'}`}
            >
               Próxima <ChevronRight className="w-5 h-5" />
            </button>
         </div>
      </div>

    </div>
  );
};
