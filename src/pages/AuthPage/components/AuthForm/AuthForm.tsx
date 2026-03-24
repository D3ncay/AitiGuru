import React from 'react';
import { Form, Separator, SeparatorLine } from '../../styled';
import { FormInput } from '@/components/Input/Input';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import { Button } from '@/components/Button/Button';
import { ReactComponent as LockSvg } from '../../../../assets/icons/Lock.svg';
import { ReactComponent as UserSvg } from '../../../../assets/icons/User.svg';
import { FormProvider, useForm } from 'react-hook-form';
import { boolean, object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginBodyType } from '@/api/auth/types';
import { useLoginRequest } from '@/api/auth/queries';

let schema = object({
  username: string().required('Введите логин'),
  password: string().required('Введите пароль'),
  rememberMe: boolean()
});

export const AuthForm = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      password: '',
      rememberMe: false
    }
  });
  const { mutate } = useLoginRequest();

  const onHandleSubmit = (data: LoginBodyType) => {
    mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onHandleSubmit)}>
        <FormInput fieldName="username" startIcon={<UserSvg />} label="Логин" />
        <FormInput fieldName="password" startIcon={<LockSvg />} label="Пароль" isPassword />
        <Checkbox fieldName="rememberMe" innerText="Запомнить данные" />
        <Button buttonText="Войти" type="submit" />
        <Separator>
          <SeparatorLine />
          или
          <SeparatorLine />
        </Separator>
      </Form>
    </FormProvider>
  );
};
