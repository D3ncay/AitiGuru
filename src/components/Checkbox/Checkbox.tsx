import React from 'react';
import { Container, IconContainer, Text } from './styled';
import { ReactComponent as CheckboxSvg } from '../../assets/icons/Checkbox.svg';
import { useController, useFormContext } from 'react-hook-form';

export type CheckboxProps = {
  innerText?: string;
  fieldName?: string;
  checked?: boolean;
  onChange?: (checked: any) => void;
  indeterminate?: boolean;
};

export const Checkbox = ({
  innerText,
  fieldName,
  checked,
  onChange,
  indeterminate
}: CheckboxProps) => {
  const formContext = useFormContext();

  // Use form context only if fieldName and formContext are available
  const { field } =
    fieldName && formContext
      ? // eslint-disable-next-line react-hooks/rules-of-hooks
        useController({ name: fieldName, control: formContext.control })
      : { field: { value: checked, onChange } };

  const { onChange: fieldOnChange, value } = field;

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (fieldOnChange) {
      fieldOnChange(e);
    }
  };

  return (
    <Container>
      <IconContainer $checked={!!value}>
        <CheckboxSvg />
      </IconContainer>
      <input
        type="checkbox"
        checked={!!value}
        onChange={onHandleChange}
        ref={(el) => {
          if (el) el.indeterminate = !!indeterminate;
        }}
      />
      {innerText && <Text>{innerText}</Text>}
    </Container>
  );
};
