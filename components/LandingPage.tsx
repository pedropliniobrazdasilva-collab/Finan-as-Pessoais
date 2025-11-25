
import React from 'react';
import { COURSE_MODULES } from '../data/courseContent';
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  ShieldCheck, 
  Target, 
  Play, 
  Star, 
  Menu, 
  X, 
  ChevronRight, 
  DollarSign, 
  Lock,
  BarChart3,
  Users
} from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
  onLogin: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted, onLogin, isDarkMode, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1120] text-gray-900 dark:text-gray-100 font-sans selection:bg-brand-500 selection:text-white overflow-x-hidden">
      
      {/* Navbar Premium */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-lg border-b border-gray-100 dark:border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Domine<span className="text-brand-600">Dinheiro</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#modulos" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">O Curso</a>
            <a href="#sobre" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Metodologia</a>
            <a href="#depoimentos" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Resultados</a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={onLogin}
              className="text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-brand-600 transition-colors px-4 py-2"
            >
              Área do Aluno
            </button>
            <button 
              onClick={onGetStarted}
              className="px-6 py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold hover:bg-brand-600 dark:hover:bg-brand-400 dark:hover:text-white transition-all transform hover:-translate-y-0.5 shadow-lg shadow-brand-500/20"
            >
              Começar Agora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-[#0B1120] border-b border-gray-100 dark:border-gray-800 p-6 flex flex-col gap-4 shadow-xl">
            <a href="#modulos" onClick={() => setMobileMenuOpen(false)} className="py-2 text-lg font-medium border-b border-gray-100 dark:border-gray-800">Módulos</a>
            <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="py-2 text-lg font-medium border-b border-gray-100 dark:border-gray-800">Sobre</a>
            <button onClick={() => { onLogin(); setMobileMenuOpen(false); }} className="py-2 text-lg font-medium text-left">Área do Aluno</button>
            <button 
              onClick={() => { onGetStarted(); setMobileMenuOpen(false); }}
              className="w-full py-3 mt-2 rounded-xl bg-brand-600 text-white font-bold"
            >
              Quero Começar
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/20 border border-brand-100 dark:border-brand-500/20 text-brand-700 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Star className="w-3.5 h-3.5 fill-current" />
            Método Comprovado por +10.000 Alunos
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-gray-900 dark:text-white animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Domine o Seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-400">Dinheiro</span> <br className="hidden md:block"/>
            e Construa Sua Liberdade.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            Do zero ao investidor. Um curso completo para organizar suas finanças, sair das dívidas e multiplicar seu patrimônio com segurança.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
            <button 
              onClick={onGetStarted}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-brand-500/30 flex items-center justify-center gap-2"
            >
              Quero Começar Agora
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Social Proof Bar */}
          <div className="mt-20 pt-10 border-t border-gray-100 dark:border-white/5 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2 font-bold text-xl text-gray-400 dark:text-gray-500">
               <ShieldCheck className="w-6 h-6" /> Segurança
             </div>
             <div className="flex items-center gap-2 font-bold text-xl text-gray-400 dark:text-gray-500">
               <TrendingUp className="w-6 h-6" /> Resultado
             </div>
             <div className="flex items-center gap-2 font-bold text-xl text-gray-400 dark:text-gray-500">
               <Users className="w-6 h-6" /> Comunidade
             </div>
             <div className="flex items-center gap-2 font-bold text-xl text-gray-400 dark:text-gray-500">
               <Target className="w-6 h-6" /> Foco
             </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section id="sobre" className="py-20 bg-gray-50 dark:bg-[#0F1623]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">O que você vai dominar?</h2>
             <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
               Nosso método é baseado em 3 pilares fundamentais para garantir não apenas conhecimento, mas transformação real.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white dark:bg-[#131B2C] p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-lg shadow-gray-200/50 dark:shadow-none hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Organização Total</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                Aprenda a mapear cada centavo. Diga adeus à sensação de não saber para onde seu dinheiro foi no fim do mês.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-[#131B2C] p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-lg shadow-gray-200/50 dark:shadow-none hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full blur-3xl"></div>
              <div className="w-12 h-12 rounded-2xl bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-6 relative z-10">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white relative z-10">Blindagem Patrimonial</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed relative z-10">
                Construa sua Reserva de Emergência e proteja quem você ama. Esteja preparado para qualquer imprevisto.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-[#131B2C] p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-lg shadow-gray-200/50 dark:shadow-none hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Multiplicação</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                Do zero ao primeiro investimento. Entenda Renda Fixa, Ações e FIIs sem "economês" complicado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Preview Section */}
      <section id="modulos" className="py-24 bg-white dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
             <div>
                <span className="text-brand-600 dark:text-brand-400 font-bold tracking-wider uppercase text-sm">Cronograma Completo</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 dark:text-white">Sua Jornada de Aprendizado</h2>
             </div>
             <button onClick={onLogin} className="text-gray-500 hover:text-brand-600 font-semibold flex items-center gap-2 group">
               Ver grade detalhada <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSE_MODULES.map((module, index) => (
              <div key={module.id} className="group p-6 rounded-2xl bg-gray-50 dark:bg-[#131B2C] border border-gray-100 dark:border-white/5 hover:border-brand-500/30 dark:hover:border-brand-500/30 transition-all cursor-default">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Módulo 0{index}</span>
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-black/20 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    {index < 3 ? <CheckCircle className="w-4 h-4" /> : <Lock className="w-3 h-3" />}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{module.title.split(': ')[1] || module.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{module.lessons.length} aulas práticas de alta densidade.</p>
              </div>
            ))}
            
            {/* Call to Action Card inside Grid */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-bold mb-2">E muito mais...</h3>
              <p className="text-brand-100 text-sm mb-6">Planilhas, exercícios e suporte.</p>
              <button onClick={onGetStarted} className="px-6 py-2 bg-white text-brand-700 font-bold rounded-lg hover:bg-brand-50 transition-colors w-full">
                Desbloquear Acesso
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quem faz, recomenda.</h2>
            <p className="text-gray-400">Junte-se a milhares de alunos que transformaram sua vida financeira.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ricardo Mendes",
                role: "Engenheiro",
                text: "Eu ganhava bem, mas terminava o mês no vermelho. O método dos envelopes mudou minha vida. Hoje invisto 30% do que ganho.",
                stars: 5
              },
              {
                name: "Ana Clara",
                role: "Autônoma",
                text: "Achava que investir era só para ricos. O curso é didático, direto ao ponto e sem enrolação. Minha reserva de emergência está completa!",
                stars: 5
              },
              {
                name: "Felipe Costa",
                role: "Estudante",
                text: "A melhor parte é a didática. As aulas sobre dívidas me ajudaram a negociar um desconto de 90% com o banco. O curso se pagou em 1 semana.",
                stars: 5
              }
            ].map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="flex gap-1 mb-4 text-amber-400">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-300 italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{t.name}</p>
                    <p className="text-brand-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white dark:bg-[#0B1120]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-brand-600 rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-2xl shadow-brand-500/30 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             
             <div className="relative z-10">
               <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Pare de brigar com seu dinheiro.</h2>
               <p className="text-brand-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                 O único investimento com retorno garantido é o conhecimento. Comece hoje a escrever um novo futuro para você e sua família.
               </p>
               
               <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                 <button 
                  onClick={onGetStarted}
                  className="w-full sm:w-auto px-10 py-5 bg-white text-brand-700 font-bold text-lg rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                 >
                   Garantir Minha Vaga
                 </button>
                 <p className="text-brand-200 text-sm mt-4 sm:mt-0 font-medium flex items-center gap-2">
                   <Lock className="w-4 h-4" /> Acesso Imediato
                 </p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#0F1623] border-t border-gray-100 dark:border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
              <DollarSign className="w-5 h-5" />
            </div>
            <span className="font-bold text-gray-700 dark:text-gray-200">Finanças na Prática</span>
          </div>
          
          <div className="text-sm text-gray-500 dark:text-gray-400">
            &copy; 2025 Todos os direitos reservados.
          </div>

          <div className="flex gap-6">
             <button onClick={toggleTheme} className="text-gray-400 hover:text-brand-600 transition-colors text-sm">
               {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
             </button>
             <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors text-sm">Termos</a>
             <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors text-sm">Privacidade</a>
          </div>
        </div>
      </footer>

    </div>
  );
};
