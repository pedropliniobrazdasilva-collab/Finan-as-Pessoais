
import React, { useState } from 'react';
import { Lock, Mail, User as UserIcon, ArrowRight, AlertCircle, ShieldCheck, Loader2 } from 'lucide-react';

interface AuthProps {
  onLogin: (email: string, pass: string) => Promise<boolean>;
  onRegister: (name: string, email: string, pass: string) => Promise<{ success: boolean; message?: string }>;
  onAdminClick: () => void;
}

export const Auth: React.FC<AuthProps> = ({ onLogin, onRegister, onAdminClick }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!formData.email || !formData.password) {
        setError('Preencha todos os campos obrigatórios.');
        setLoading(false);
        return;
      }

      if (isLogin) {
        const success = await onLogin(formData.email, formData.password);
        if (!success) setError('E-mail ou senha incorretos.');
      } else {
        if (!formData.name) {
          setError('Nome é obrigatório.');
          setLoading(false);
          return;
        }
        if (!validateEmail(formData.email)) {
          setError('Formato de e-mail inválido.');
          setLoading(false);
          return;
        }
        if (formData.password.length < 8) {
          setError('A senha deve ter no mínimo 8 caracteres.');
          setLoading(false);
          return;
        }

        const res = await onRegister(formData.name, formData.email, formData.password);
        if (!res.success) setError(res.message || 'Erro ao registrar.');
      }
    } catch (err) {
      setError('Ocorreu um erro inesperado. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-bg px-4 py-8">
      <div className="w-full max-w-md bg-white dark:bg-dark-card rounded-2xl shadow-xl border border-gray-200 dark:border-dark-border overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        
        {/* Header */}
        <div className="bg-brand-600 p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <h1 className="text-2xl font-bold text-white mb-2">Finanças Pessoais</h1>
            <p className="text-brand-100 text-sm">Plataforma do Aluno</p>
          </div>
        </div>

        {/* Form */}
        <div className="p-8">
          <div className="flex gap-4 mb-8 bg-gray-100 dark:bg-slate-800 p-1 rounded-xl">
            <button
              onClick={() => { setIsLogin(true); setError(''); }}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${isLogin ? 'bg-white dark:bg-dark-card shadow-sm text-brand-600 dark:text-brand-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'}`}
            >
              Entrar
            </button>
            <button
              onClick={() => { setIsLogin(false); setError(''); }}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${!isLogin ? 'bg-white dark:bg-dark-card shadow-sm text-brand-600 dark:text-brand-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'}`}
            >
              Criar Conta
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Nome Completo</label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase">E-mail</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase">Senha {isLogin ? '' : '(Min. 8 dígitos)'}</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={e => setFormData({...formData, password: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm flex items-center gap-2 animate-pulse">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-brand-500/20 transition-all active:scale-95 flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  {isLogin ? 'Acessar Curso' : 'Cadastrar Gratuitamente'}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
             <div className="flex items-center gap-2 text-green-600 dark:text-green-500 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Criptografia Ativa
             </div>
             <button onClick={onAdminClick} className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
               Acesso Admin
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
