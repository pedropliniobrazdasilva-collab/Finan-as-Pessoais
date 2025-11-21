import React, { useState } from 'react';
import { Lock, ArrowRight, AlertCircle, ShieldCheck } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [inputKey, setInputKey] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputKey.trim() === 'financas2025') {
      onLogin();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-dark-bg transition-colors duration-300 px-4">
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
                        <input 
                            type="password" 
                            value={inputKey}
                            onChange={(e) => {
                                setInputKey(e.target.value);
                                setError(false);
                            }}
                            className={`
                                w-full px-4 py-3.5 rounded-xl border bg-gray-50 dark:bg-slate-900 dark:text-white focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none font-medium
                                ${error ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' : 'border-gray-200 dark:border-gray-700'}
                            `}
                            placeholder="Digite a chave..."
                            autoFocus
                        />
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

                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 text-center">
                    <div className="flex items-center justify-center gap-2 text-gray-400 text-xs uppercase tracking-wide font-semibold">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Acesso Seguro</span>
                    </div>
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