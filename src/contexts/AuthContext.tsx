
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  email: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  logout: () => {}
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated from localStorage
    const authData = localStorage.getItem('nef-auth');
    
    if (authData) {
      const { isAuthenticated, user, expiresAt } = JSON.parse(authData);
      
      if (expiresAt && expiresAt > Date.now()) {
        setIsAuthenticated(isAuthenticated);
        setUser(user);
      } else {
        // Token expired
        localStorage.removeItem('nef-auth');
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('nef-auth');
    setIsAuthenticated(false);
    setUser(null);
    navigate('/landing');
  };

  const value = {
    isAuthenticated,
    user,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
