import React from 'react';
import {
  ContentWrapper,
  CreateLink,
  FormHeader,
  FormWindow,
  FormWrapper,
  LogoContainer,
  NoAccountContainer,
  Subtitle,
  Title
} from './styled';
import { ReactComponent as LogoSvg } from '../../assets/icons/Logo.svg';
import { AuthForm } from './components/AuthForm/AuthForm';

export const AuthPage = () => {
  return (
    <FormWindow>
      <FormWrapper>
        <ContentWrapper>
          <LogoContainer>
            <LogoSvg />
          </LogoContainer>
          <FormHeader>
            <Title>Добро пожаловать</Title>
            <Subtitle>Пожалуйста, авторизуйтесь</Subtitle>
          </FormHeader>
          <AuthForm />
          <NoAccountContainer>
            Нет аккаунта? <CreateLink href="/">Создать</CreateLink>
          </NoAccountContainer>
        </ContentWrapper>
      </FormWrapper>
    </FormWindow>
  );
};
