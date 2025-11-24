
import { useState } from 'react';
import { User } from '../types';
import { hashValue, ADMIN_HASH } from '../utils/crypto';

// Gerador de ID seguro com fallback
const generateId = () => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem('fp_active_user');
      return saved ? JSON.parse(saved) : null;
    } catch { return null; }
  });

  const [isAdmin, setIsAdmin] = useState(false);

  const getAllUsers = (): User[] => {
    try {
      const users = localStorage.getItem('fp_users');
      return users ? JSON.parse(users) : [];
    } catch { return []; }
  };

  const login = async (email: string, pass: string) => {
    try {
      const users = getAllUsers();
      const passHash = await hashValue(pass);
      
      const found = users.find(u => u.email === email && u.password === passHash);
      
      if (found) {
        const { password, ...safeUser } = found;
        setUser(safeUser as User);
        localStorage.setItem('fp_active_user', JSON.stringify(safeUser));
        return true;
      }
      return false;
    } catch (e) {
      console.error("Erro no login:", e);
      return false;
    }
  };

  const register = async (name: string, email: string, pass: string) => {
    try {
      const users = getAllUsers();
      if (users.some(u => u.email === email)) {
        return { success: false, message: 'E-mail já cadastrado.' };
      }

      const passwordHash = await hashValue(pass);

      const newUser: User = {
        id: generateId(),
        name,
        email,
        password: passwordHash,
        registeredAt: new Date().toISOString()
      };

      const updatedUsers = [...users, newUser];
      localStorage.setItem('fp_users', JSON.stringify(updatedUsers));
      
      const { password, ...safeUser } = newUser;
      setUser(safeUser as User);
      localStorage.setItem('fp_active_user', JSON.stringify(safeUser));
      
      return { success: true };
    } catch (e) {
      console.error("Erro no registro:", e);
      return { success: false, message: 'Erro interno ao registrar.' };
    }
  };

  const logout = () => {
    setUser(null);
    setIsAdmin(false);
    localStorage.removeItem('fp_active_user');
  };

  const verifyAdmin = async (pass: string) => {
    try {
      // Se crypto API não existir (ambiente inseguro), o hash gerado aqui
      // não baterá com o ADMIN_HASH (SHA-256), então o admin só funciona em HTTPS/Localhost.
      // Isso é esperado para segurança.
      const inputHash = await hashValue(pass);
      if (inputHash === ADMIN_HASH) {
        setIsAdmin(true);
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  };

  return {
    user,
    isAdmin,
    users: isAdmin ? getAllUsers() : [],
    login,
    register,
    logout,
    verifyAdmin
  };
};
