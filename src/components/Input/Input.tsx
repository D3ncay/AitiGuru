import React, { useState } from 'react';
import {
  Container,
  ErrorMessage,
  IconButton,
  IconContainer,
  InputLabel,
  InputWrapper,
  StyledInput
} from './styled';
import { ReactComponent as EyeOff } from '../../assets/icons/EyeOff.svg';
import { ReactComponent as CloseSvg } from '../../assets/icons/Close.svg';
import { useController, useFormContext } from 'react-hook-form';

export type InputProps = {
  label?: string;
  startIcon?: React.ReactNode;
  isPassword?: boolean;
  value?: string;
  onChange: (value: string) => void;
  errorMessage?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type', 'onChange'>;

export const FormInput = ({
  fieldName,
  ...props
}: { fieldName: string } & Omit<InputProps, 'onChange'>) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({ name: fieldName, control });
  const error = fieldState.error?.message;
  const { onChange, value } = field;
  return <Input onChange={onChange} value={value} errorMessage={error} {...props} />;
};

export const Input = ({
  label,
  startIcon,
  isPassword,
  onChange,
  value,
  errorMessage,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const onHandleClearInput = () => {
    onChange('');
  };

  return (
    <InputWrapper>
      {label && <InputLabel>{label}</InputLabel>}
      <Container>
        <IconContainer> {startIcon}</IconContainer>
        <StyledInput
          {...props}
          type={isPassword ? (showPassword ? 'text' : 'password') : 'text'}
          value={value}
          onChange={onHandleChange}
        />
        {isPassword ? (
          <IconButton type="button" onClick={() => setShowPassword(!showPassword)}>
            <EyeOff />
          </IconButton>
        ) : (
          value && (
            <IconButton type="button" onClick={onHandleClearInput}>
              <CloseSvg />
            </IconButton>
          )
        )}
      </Container>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputWrapper>
  );
};
