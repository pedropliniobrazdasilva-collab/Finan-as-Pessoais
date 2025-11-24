
import React, { useEffect, useMemo } from 'react';
import { Module } from '../types';
import { ChevronLeft, ChevronRight, CheckCircle, Clock, ArrowRight, AlertTriangle, BookOpen, Sparkles, Lightbulb } from 'lucide-react';

interface LessonViewProps {
  lessonId: string;
  modules: Module[];
  isCompleted: boolean;
  onComplete: (id: string) => void;
  onNext: () => void;
  onPrev: () => void;
  onHome: () => void;
}

// --- Parser de Markdown Ajustado e Limpo (Sans-Serif Only) ---
const parseInline = (text: string): React.ReactNode[] => {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/);
  
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-bold text-gray-900 dark:text-white">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      // Importante: font-sans aqui para evitar serifa
      return <em key={i} className="italic text-gray-600 dark:text-gray-400 font-medium font-sans">{part.slice(1, -1)}</em>;
    }
    return part;
  });
};

const parseMarkdown = (text: string) => {
  if (!text) return null;

  const blocks = text.split(/\n\n+/);

  return blocks.map((block, index) => {
    const cleanBlock = block.trim();

    // 1. Títulos (###)
    if (cleanBlock.startsWith('###')) {
      const content = cleanBlock.replace(/^###\s*/, '');
      return (
        <h3 key={index} className="font-sans text-xl md:text-2xl font-extrabold text-brand-900 dark:text-brand-50 mt-10 mb-4 tracking-tight">
          {parseInline(content)}
        </h3>
      );
    }
    
    // 2. Títulos Menores (##)
    if (cleanBlock.startsWith('##')) {
      const content = cleanBlock.replace(/^##\s*/, '');
      return (
        <h2 key={index} className="font-sans text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mt-12 mb-6 tracking-tight">
          {parseInline(content)}
        </h2>
      );
    }

    // 3. Listas Não Ordenadas (- item)
    if (cleanBlock.startsWith('- ')) {
      const items = cleanBlock.split('\n').filter(line => line.trim().startsWith('-'));
      return (
        <ul key={index} className="space-y-4 mb-8 text-gray-700 dark:text-gray-300 font-sans">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 pl-2 leading-relaxed text-lg">
              <span className="w-2 h-2 rounded-full bg-brand-500 mt-2.5 shrink-0"></span>
              <span>{parseInline(item.replace(/^- /, '').trim())}</span>
            </li>
          ))}
        </ul>
      );
    }

    // 4. Listas Ordenadas (1. item)
    if (/^\d+\./.test(cleanBlock)) {
      const items = cleanBlock.split('\n').filter(line => /^\d+\./.test(line.trim()));
      return (
        <div key={index} className="space-y-4 mb-8 font-sans">
          {items.map((item, i) => {
             const content = item.replace(/^\d+\.\s*/, '').trim();
             return (
              <div key={i} className="flex gap-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed bg-gray-50 dark:bg-slate-800/50 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 transition-all hover:bg-gray-100 dark:hover:bg-slate-800">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 font-bold shrink-0 text-sm">
                  {i + 1}
                </span>
                <div>{parseInline(content)}</div>
              </div>
             )
          })}
        </div>
      );
    }

    // 5. Parágrafos Normais
    return (
      <p key={index} className="font-sans mb-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg font-normal text-left">
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
    <div className="w-full min-h-screen bg-white dark:bg-[#0B1120] transition-colors duration-500 pb-24 font-sans selection:bg-brand-200 dark:selection:bg-brand-900/50">
      
      {/* Header Minimalista de Navegação */}
      <div className="sticky top-0 z-20 bg-white/80 dark:bg-[#0B1120]/90 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
           <button onClick={onHome} className="text-sm font-semibold font-sans text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white flex items-center gap-1.5 transition-colors px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800">
              <ChevronLeft className="w-4 h-4" /> Voltar
           </button>
           
           <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-slate-800 rounded-full border border-gray-200 dark:border-gray-700">
             <Clock className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
             <span className="text-xs font-bold font-sans text-gray-600 dark:text-gray-300">{lesson.duration}</span>
          </div>
        </div>
      </div>

      {/* Conteúdo Centralizado */}
      <div className="max-w-3xl mx-auto px-6 py-10 md:py-16 font-sans">
        
        {/* Cabeçalho da Aula */}
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
           <span className="inline-block px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/20 text-xs font-bold tracking-wider text-brand-600 dark:text-brand-400 uppercase mb-4 border border-brand-100 dark:border-brand-900/30 font-sans">
              {module.title}
           </span>
           <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight mb-2 font-sans">
              {lesson.title.split('. ')[1] || lesson.title}
           </h1>
        </div>

        {/* Introdução com Design Moderno (Sans-Serif) */}
        <div className="mb-12 p-8 bg-gradient-to-br from-gray-50 to-white dark:from-slate-800/40 dark:to-slate-900/40 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-500"></div>
          <p className="text-xl text-gray-800 dark:text-gray-100 font-medium leading-relaxed font-sans">
            {parseInline(lesson.content.intro)}
          </p>
        </div>

        {/* Corpo do Conteúdo (Explicação Principal) */}
        <div className="mb-12 font-sans">
           {parseMarkdown(lesson.content.explanation)}
        </div>

        {/* --- POSICIONAMENTO ESTRATÉGICO: BREAK VISUAL --- */}
        
        <div className="grid gap-6 my-16">
          
          {/* 1. O ALERTA (Vermelho) - Design "Card" limpo */}
          <div className="relative overflow-hidden rounded-3xl bg-rose-50 dark:bg-[#2C0B0E] border border-rose-100 dark:border-rose-900/30 p-8 shadow-sm">
             <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-rose-500/10 rounded-full blur-xl"></div>
             
             <div className="relative z-10">
                <h3 className="text-sm font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest mb-4 flex items-center gap-2 font-sans">
                   <AlertTriangle className="w-5 h-5" />
                   Ponto de Atenção
                </h3>
                <div className="text-lg font-medium text-gray-900 dark:text-rose-100 leading-relaxed border-l-4 border-rose-500 pl-6 py-1 font-sans">
                   {parseInline(lesson.content.commonErrors)}
                </div>
             </div>
          </div>

          {/* 2. O EXEMPLO (Verde) - Design "Card" limpo */}
          {lesson.content.examples?.length > 0 && (
            <div className="relative overflow-hidden rounded-3xl bg-emerald-50 dark:bg-[#062C1B] border border-emerald-100 dark:border-emerald-900/30 p-8 shadow-sm transition-shadow">
               
               <div className="relative z-10">
                  <h3 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-6 flex items-center gap-2 font-sans">
                      <Lightbulb className="w-5 h-5" />
                      Exemplo Prático
                  </h3>
                  <div className="space-y-4">
                    {lesson.content.examples.map((ex, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 dark:bg-emerald-900/20 border border-emerald-200/50 dark:border-emerald-800/50 backdrop-blur-sm">
                        <div className="bg-emerald-100 dark:bg-emerald-800 p-1.5 rounded-full shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-300" />
                        </div>
                        <span className="text-gray-800 dark:text-emerald-50 text-lg leading-relaxed font-medium font-sans">{parseInline(ex)}</span>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          )}
        </div>

        {/* Exercício (Call to Action) - Finaliza a aula com ação */}
        <div className="bg-gray-900 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 text-white rounded-3xl p-8 md:p-10 mb-16 shadow-2xl shadow-brand-900/20 relative overflow-hidden group">
           <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-500 rounded-full blur-[80px] opacity-30 group-hover:opacity-40 transition-opacity duration-700"></div>
           
           <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                   <BookOpen className="w-6 h-6 text-brand-300" />
                </div>
                <h3 className="text-lg font-bold tracking-wide text-brand-100 font-sans">Sua Missão</h3>
              </div>
              
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-white font-sans">
                {parseInline(lesson.content.exercise)}
              </p>
           </div>
        </div>

        {/* Resumo Final */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-10 mt-10 text-center md:text-left">
          <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4 flex items-center justify-center md:justify-start gap-2 font-sans">
            <Sparkles className="w-4 h-4" />
            Resumo da Aula
          </h4>
          <p className="text-2xl md:text-3xl text-gray-800 dark:text-white font-bold leading-tight font-sans">
            "{parseInline(lesson.content.summary)}"
          </p>
        </div>

      </div>

      {/* Footer Navegação */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-[#0B1120]/90 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 p-4 md:static md:bg-transparent md:border-0 md:p-0 md:mt-16 z-30">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          <button 
             onClick={onPrev}
             disabled={!onPrev}
             className={`hidden md:flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-sm transition-all font-sans ${!onPrev ? 'opacity-0 cursor-default' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'}`}
           >
             <ChevronLeft className="w-5 h-5" /> Anterior
           </button>

          <button
            onClick={() => onComplete(lessonId)}
            className={`
              flex-1 md:flex-none md:w-auto px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 transition-all shadow-lg hover:-translate-y-1 active:scale-95 font-sans
              ${isCompleted 
                ? 'bg-emerald-600 text-white shadow-emerald-500/30 hover:bg-emerald-700' 
                : 'bg-brand-600 text-white shadow-brand-500/30 hover:bg-brand-700'}
            `}
          >
            {isCompleted ? (
              <>
                <CheckCircle className="w-5 h-5" /> Aula Concluída
              </>
            ) : (
              <>
                Concluir e Avançar <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>

           <button 
             onClick={onNext}
             disabled={!onNext}
             className={`hidden md:flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-sm transition-all font-sans ${!onNext ? 'opacity-0 cursor-default' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'}`}
           >
             Próxima <ChevronRight className="w-5 h-5" />
           </button>
        </div>
      </div>
    </div>
  );
};
