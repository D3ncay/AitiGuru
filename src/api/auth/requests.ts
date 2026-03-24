import { api } from '@/api/instance';
import { LoginResponse } from '@/api/auth/types';
import { AxiosResponse } from 'axios';

export const loginRequest = async () => {
  const response: AxiosResponse<LoginResponse> = await api.post('/auth/login', {
    username: 'emilys',
    password: 'emilyspass',
    expiresInMins: 30
  });
  return response.data;
};
