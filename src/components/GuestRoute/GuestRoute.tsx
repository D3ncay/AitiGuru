import React, { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthProvider';
import { Outlet, useNavigate } from 'react-router-dom';

export const GuestRoute = () => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate('/products');
    }
    return;
  });
  return <Outlet />;
};
