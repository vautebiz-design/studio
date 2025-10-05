
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import type { User } from '@/lib/types';
import { MOCK_USERS } from '@/lib/data';
import { Skeleton } from '@/components/ui/skeleton';

type AuthContextType = {
  user: User | null;
  login: (email: string, pass: string) => boolean;
  logout: () => void;
  loading: boolean;
  switchRole: (role: 'industry' | 'admin') => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('bluebalance-user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (e) {
      console.error('Failed to parse user from localStorage', e);
      localStorage.removeItem('bluebalance-user');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (loading) return;

    const isAuthPage = pathname === '/' || pathname === '/signup';

    if (!user && !isAuthPage) {
      router.push('/');
    } else if (user && isAuthPage) {
      router.push('/dashboard');
    }
  }, [user, loading, pathname, router]);

  const login = (email: string, pass: string): boolean => {
    const foundUser = MOCK_USERS.find(u => u.email === email);
    // In a real app, you'd also check the password hash
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('bluebalance-user', JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('bluebalance-user');
    router.push('/');
  };
  
  const switchRole = (role: 'industry' | 'admin') => {
    const newUser = MOCK_USERS.find(u => u.role === role);
    if(newUser){
        setUser(newUser);
        localStorage.setItem('bluebalance-user', JSON.stringify(newUser));
        router.push('/dashboard'); // Navigate to a neutral page after role switch
    }
  };


  const value = { user, login, logout, loading, switchRole };
  
  const isAuthPage = pathname === '/' || pathname === '/signup';

  if (loading && !isAuthPage) {
    return <LoadingScreen/>
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

const LoadingScreen = () => (
    <div className="flex items-center justify-center h-screen w-screen bg-background">
        <div className="w-full max-w-md p-8 space-y-4">
            <Skeleton className="h-12 w-12 rounded-full mx-auto" />
            <Skeleton className="h-8 w-3/4 mx-auto" />
            <Skeleton className="h-6 w-1/2 mx-auto" />
            <div className="space-y-2 pt-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
            </div>
        </div>
    </div>
);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
