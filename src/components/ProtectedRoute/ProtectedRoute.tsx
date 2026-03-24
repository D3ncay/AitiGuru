import React, { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthProvider';
import { Outlet, useNavigate } from 'react-router-dom';

export const ProtectedRoute = () => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/');
      return;
    }
  });
  return <Outlet />;
};
