'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile } from '@/types';

interface AuthContextType {
  user: UserProfile | null;
  login: (email: string) => Promise<boolean>;
  register: (name: string, email: string, phone: string) => Promise<boolean>;
  logout: () => void;
  isAuthModalOpen: boolean;
  openAuthModal: (onSuccessCallback?: () => void) => void;
  closeAuthModal: () => void;
  postAuthCallback: (() => void) | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const defaultDemoUser: UserProfile = {
  id: 'usr_rohan_01',
  name: 'Rohan Jayasinghe',
  email: 'rohan.j@gmail.com',
  phone: '077 123 4567',
  district: 'Colombo (කොළඹ)',
  address: 'No 24, Chapel Road, Nugegoda',
  createdAt: '2026-09-15T10:00:00Z'
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [postAuthCallback, setPostAuthCallback] = useState<(() => void) | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('prime_life_care_user');
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    } else {
      // Initialize with demo user for seamless instant testing
      setUser(defaultDemoUser);
      localStorage.setItem('prime_life_care_user', JSON.stringify(defaultDemoUser));
    }
  }, []);

  const login = async (email: string): Promise<boolean> => {
    const loggedUser: UserProfile = {
      id: `usr_${Date.now()}`,
      name: email.split('@')[0].toUpperCase(),
      email: email.trim(),
      phone: '077 123 4567',
      district: 'Colombo (කොළඹ)',
      createdAt: new Date().toISOString()
    };
    setUser(loggedUser);
    localStorage.setItem('prime_life_care_user', JSON.stringify(loggedUser));
    setIsAuthModalOpen(false);
    if (postAuthCallback) {
      postAuthCallback();
      setPostAuthCallback(null);
    }
    return true;
  };

  const register = async (name: string, email: string, phone: string): Promise<boolean> => {
    const newUser: UserProfile = {
      id: `usr_${Date.now()}`,
      name,
      email: email.trim(),
      phone,
      district: 'Colombo (කොළඹ)',
      createdAt: new Date().toISOString()
    };
    setUser(newUser);
    localStorage.setItem('prime_life_care_user', JSON.stringify(newUser));
    setIsAuthModalOpen(false);
    if (postAuthCallback) {
      postAuthCallback();
      setPostAuthCallback(null);
    }
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('prime_life_care_user');
  };

  const openAuthModal = (callback?: () => void) => {
    if (callback) {
      setPostAuthCallback(() => callback);
    } else {
      setPostAuthCallback(null);
    }
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
    setPostAuthCallback(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthModalOpen,
        openAuthModal,
        closeAuthModal,
        postAuthCallback
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
