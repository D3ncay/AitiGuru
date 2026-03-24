import { Modal } from '@mui/material';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormInput } from '@/components/Input/Input';
import { Button } from '@/components/Button/Button';
import {
  CancelButton,
  FieldsGrid,
  HeaderText,
  ModalCard,
  ModalFooter,
  ModalForm,
  ModalHeader,
  ModalSubtitle,
  ModalTitle,
  SubmitWrap
} from '@/components/AddProductModal/styled';

export type AddProductModalProps = {
  openModal: boolean;
  handleClose: () => void;
  onSubmit: () => void;
};

export const AddProductModal = ({ openModal, handleClose, onSubmit }: AddProductModalProps) => {
  const methods = useForm({
    defaultValues: {
      name: '',
      price: '',
      brand: '',
      sku: ''
    }
  });

  const onHandleSubmit = useCallback(() => {
    onSubmit();
    handleClose();
  }, [handleClose, onSubmit]);

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="add-product-modal-title"
      aria-describedby="add-product-modal-desc"
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(35, 35, 35, 0.48)',
            backdropFilter: 'blur(6px)'
          }
        }
      }}
    >
      <ModalCard>
        <ModalHeader>
          <HeaderText>
            <ModalTitle id="add-product-modal-title">Новый товар</ModalTitle>
            <ModalSubtitle id="add-product-modal-desc">
              Заполните карточку — данные появятся в каталоге после сохранения
            </ModalSubtitle>
          </HeaderText>
        </ModalHeader>
        <FormProvider {...methods}>
          <ModalForm onSubmit={methods.handleSubmit(onHandleSubmit)}>
            <FieldsGrid>
              <FormInput fieldName="name" label="Наименование" />
              <FormInput fieldName="price" label="Цена" />
              <FormInput fieldName="brand" label="Вендор" />
              <FormInput fieldName="sku" label="Артикул" />
            </FieldsGrid>
            <ModalFooter>
              <CancelButton type="button" onClick={handleClose}>
                Отмена
              </CancelButton>
              <SubmitWrap>
                <Button buttonText="Добавить товар" type="submit" />
              </SubmitWrap>
            </ModalFooter>
          </ModalForm>
        </FormProvider>
      </ModalCard>
    </Modal>
  );
};
