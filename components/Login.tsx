import React, { useState } from 'react';
import { Lock, ArrowRight, AlertCircle, ShieldCheck, Eye, EyeOff, MessageCircle, Mail } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [inputKey, setInputKey] = useState('');
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputKey.trim() === 'financas2025') {
      onLogin();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-dark-bg transition-colors duration-300 px-4 py-10">
      <div className="w-full max-w-md animate-in fade-in zoom-in-95 duration-500">
        <div className="bg-white dark:bg-dark-card rounded-2xl shadow-2xl border border-gray-200 dark:border-dark-border overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-br from-brand-600 to-brand-800 p-8 text-center relative overflow-hidden">
                 <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                 <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-black/10 rounded-full blur-xl"></div>
                 
                 <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm shadow-lg">
                    <Lock className="w-8 h-8 text-white" />
                 </div>
                 <h1 className="text-2xl font-bold text-white">Área do Aluno</h1>
                 <p className="text-brand-100 text-sm mt-2 font-medium">Curso Finanças Pessoais</p>
            </div>

            {/* Form */}
            <div className="p-8">
                <p className="text-gray-600 dark:text-gray-300 text-center text-sm mb-6">
                  Digite sua chave de acesso exclusiva para entrar na plataforma.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                            Chave de Acesso
                        </label>
                        <div className="relative">
                            <input 
                                type={showPassword ? "text" : "password"}
                                value={inputKey}
                                onChange={(e) => {
                                    setInputKey(e.target.value);
                                    setError(false);
                                }}
                                className={`
                                    w-full pl-4 pr-12 py-3.5 rounded-xl border bg-gray-50 dark:bg-slate-900 dark:text-white focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none font-medium
                                    ${error ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' : 'border-gray-200 dark:border-gray-700'}
                                `}
                                placeholder="••••••••"
                                autoFocus
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
                                title={showPassword ? "Ocultar senha" : "Mostrar senha"}
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                        {error && (
                            <div className="flex items-center gap-2 text-red-500 text-sm mt-3 animate-pulse font-medium">
                                <AlertCircle className="w-4 h-4" />
                                <span>Chave incorreta. Verifique seu e-mail.</span>
                            </div>
                        )}
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-500/30 transition-all transform hover:-translate-y-1 hover:shadow-brand-500/40 flex items-center justify-center gap-2 group"
                    >
                        ACESSAR CURSO
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>

                {/* Support Section */}
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                    <p className="text-center text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-4">
                        Caso não tenha recebido código entre em contato com o suporte:
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                        <a 
                            href="https://wa.me/5511915103290?text=Ol%C3%A1%2C+comprei+o+curso+Finan%C3%A7as+Pessoais+mas+n%C3%A3o+encontrei+minha+chave+de+acesso.+Poderiam+me+ajudar%3F"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 py-3 px-2 rounded-xl border border-green-500/30 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors text-sm font-bold shadow-sm"
                        >
                            <MessageCircle className="w-4 h-4" />
                            WhatsApp
                        </a>
                        <a 
                            href="mailto:EquipeKirpo@gmail.com?subject=Suporte%20Acesso%20-%20Finan%C3%A7as%20Pessoais&body=Ol%C3%A1%2C%20equipe.%0A%0AComprei%20o%20curso%20e%20gostaria%20de%20solicitar%20ajuda%20com%20minha%20chave%20de%20acesso."
                            className="flex items-center justify-center gap-2 py-3 px-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-700 dark:text-gray-300 transition-colors text-sm font-bold shadow-sm"
                        >
                            <Mail className="w-4 h-4" />
                            E-mail
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Footer */}
            <div className="bg-gray-50 dark:bg-slate-900/50 py-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center justify-center gap-2 text-gray-400 text-xs uppercase tracking-wide font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Ambiente Seguro</span>
                </div>
            </div>
        </div>
        <p className="text-center text-gray-400 text-xs mt-8 font-medium">
            &copy; 2025 Finanças na Prática. Plataforma Exclusiva.
        </p>
      </div>
    </div>
  );
};