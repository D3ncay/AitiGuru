import React from 'react';
import { Alert, Snackbar } from '@mui/material';

export type ToastProps = {
  isOpen: boolean;
  onClose?: () => void;
};

export const Toast = ({ isOpen, onClose }: ToastProps) => {
  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity="success" variant="filled" sx={{ width: '100%' }}>
        Товар успешно добавлен!
      </Alert>
    </Snackbar>
  );
};
