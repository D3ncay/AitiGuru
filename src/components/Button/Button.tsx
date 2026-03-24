import React from 'react';
import { IconContainer, StyledButton } from './styles';

export type ButtonProps = {
  buttonText?: string;
  type?: 'button' | 'submit' | 'reset';
  leftIcon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export const Button = ({ buttonText, type, leftIcon, onClick, className }: ButtonProps) => {
  return (
    <StyledButton className={className} type={type} onClick={onClick} $hasIcon={!!leftIcon}>
      {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
      {buttonText}
    </StyledButton>
  );
};
