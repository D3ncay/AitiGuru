import { useMutation } from '@tanstack/react-query';
import { loginRequest } from '@/api/auth/requests';
import { useAuth } from '@/contexts/AuthProvider';
import { LoginBodyType } from '@/api/auth/types';

export const useLoginRequest = () => {
  const { login } = useAuth();
  return useMutation({
    mutationKey: ['login'],
    mutationFn: (_: LoginBodyType) => loginRequest(),
    onSuccess: (data, variables) => {
      login({ ...data, rememberMe: variables.rememberMe });
    }
  });
};
