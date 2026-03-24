export type LoginBodyType = {
  username: string;
  password: string;
  rememberMe?: boolean;
};

export type LoginResponse = {
  id: string;
  username: string;
  accessToken: string;
  refreshToken: string;
};
