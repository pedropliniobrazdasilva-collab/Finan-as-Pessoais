
import React, { useState } from 'react';
import { User } from '../types';
import { Lock, ArrowLeft, Users, Calendar, Mail, Loader2, Eye, EyeOff, Database, PlusCircle, Info } from 'lucide-react';

interface AdminPanelProps {
  onVerify: (pass: string) => Promise<boolean>;
  users: User[];
  onBack: () => void;
  isAuthenticated: boolean;
  onGenerateUsers?: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onVerify, users, onBack, isAuthenticated, onGenerateUsers }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Hook do useAuth injetaria essa função, mas como passamos via prop no App.tsx, 
  // precisamos garantir que ela exista. Vamos fazer um wrapper no App.tsx depois ou aqui.
  // Para simplificar, vou assumir que o App.tsx passará essa prop se atualizarmos lá, 
  // mas farei um fallback visual caso não passe.
  
  // Nota: O TypeScript pode reclamar se não atualizarmos o App.tsx, mas o código JS funciona.
  // Vou usar o onGenerateUsers passado via props.

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const isValid = await onVerify(password);
    if (!isValid) {
      setError(true);
    }
    setLoading(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
        <div className="w-full max-w-sm bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
          <button onClick={onBack} className="text-gray-400 hover:text-white mb-6 flex items-center gap-2 text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" /> Voltar
          </button>
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/20">
               <Lock className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-xl font-bold text-white">Área Administrativa</h2>
            <p className="text-gray-400 text-sm mt-2">Acesso restrito à equipe</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Senha Mestra</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={e => { setPassword(e.target.value); setError(false); }}
                  placeholder="Digite a senha"
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-4 pr-12 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all placeholder:text-gray-600"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-white transition-colors rounded-lg hover:bg-gray-700"
                  tabIndex={-1}
                  title={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-900/20 border border-red-900/50 text-red-400 text-sm font-medium text-center animate-pulse flex items-center justify-center gap-2">
                <Lock className="w-4 h-4" /> Senha incorreta
              </div>
            )}
            
            <button 
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-red-900/20"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Acessar Painel"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="bg-brand-600 p-3 rounded-xl shadow-lg shadow-brand-500/20">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Gerenciamento de Alunos</h1>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded text-xs font-bold">Online</span>
                <span>Banco de Dados Local</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {onGenerateUsers && (
                <button 
                onClick={onGenerateUsers}
                className="px-4 py-2.5 bg-brand-50 dark:bg-brand-900/10 border border-brand-200 dark:border-brand-800 rounded-lg text-brand-700 dark:text-brand-400 hover:bg-brand-100 dark:hover:bg-brand-900/30 transition-colors font-bold text-sm flex items-center gap-2"
                >
                <PlusCircle className="w-4 h-4" /> Gerar Alunos de Teste
                </button>
            )}
            <button onClick={onBack} className="px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm font-medium text-sm">
                Sair do Admin
            </button>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl p-4 mb-8 flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div>
                <h3 className="text-sm font-bold text-blue-800 dark:text-blue-300">Modo de Demonstração (LocalStorage)</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 leading-relaxed mt-1">
                    Como esta aplicação não possui um servidor em nuvem conectado, os dados dos alunos são salvos 
                    apenas no <strong>navegador deste dispositivo</strong>. Usuários cadastrados em outros computadores 
                    não aparecerão nesta lista. Use o botão "Gerar Alunos de Teste" para popular a tabela.
                </p>
            </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Total de Alunos</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{users.length}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Cadastrados Hoje</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    {users.filter(u => new Date(u.registeredAt).toDateString() === new Date().toDateString()).length}
                </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Status do Sistema</p>
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">Operacional</p>
                </div>
            </div>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
                  <th className="px-6 py-4 text-xs font-extrabold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Aluno</th>
                  <th className="px-6 py-4 text-xs font-extrabold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Contato</th>
                  <th className="px-6 py-4 text-xs font-extrabold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Segurança</th>
                  <th className="px-6 py-4 text-xs font-extrabold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Data de Registro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {users.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">
                      <div className="flex flex-col items-center gap-3">
                        <Database className="w-10 h-10 opacity-20" />
                        <p className="font-medium">Nenhum aluno registrado neste dispositivo.</p>
                        <button 
                            onClick={onGenerateUsers}
                            className="text-brand-600 hover:text-brand-500 text-sm font-bold underline"
                        >
                            Clique para gerar dados fictícios
                        </button>
                      </div>
                    </td>
                  </tr>
                ) : (
                  users.map((user, i) => (
                    <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-700 dark:text-brand-400 font-bold text-xs">
                                {user.name.charAt(0).toUpperCase()}
                            </div>
                            <span className="font-bold text-gray-900 dark:text-white text-sm">{user.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="w-3.5 h-3.5 text-gray-400" />
                          {user.email}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400 text-xs font-bold border border-gray-200 dark:border-gray-700">
                          <Lock className="w-3 h-3" /> Hash (SHA-256)
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-gray-400" />
                          {new Date(user.registeredAt).toLocaleDateString('pt-BR', {
                            day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
                          })}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
