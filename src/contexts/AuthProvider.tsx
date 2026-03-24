import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { LoginResponse } from '@/api/auth/types';
import { useLocalStorage } from '@/hooks/useLocalStorage';

type AuthContextType = {
  isAuth: boolean;
  login: (loginData: LoginResponse & { rememberMe?: boolean }) => void;
};

export const useAuth = () => useContext(AuthContext);

const AuthContext = React.createContext<AuthContextType | null>(null);

export const AuthProvider = () => {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');
  const isAuth = !!(accessToken || sessionStorage.getItem('accessToken'));

  const login = ({
    accessToken: newAccessToken,
    rememberMe
  }: LoginResponse & { rememberMe?: boolean }) => {
    if (rememberMe) {
      setAccessToken(newAccessToken);
    } else {
      sessionStorage.setItem('accessToken', newAccessToken);
    }
  };

  const value = {
    isAuth,
    login
  };

  return (
    <AuthContext.Provider value={value}>
      <Outlet />
    </AuthContext.Provider>
  );
};
