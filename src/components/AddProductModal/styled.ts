import { Box } from '@mui/material';
import styled from 'styled-components';

export const ModalCard = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 32px);
  max-width: 500px;
  max-height: calc(100vh - 48px);
  overflow: auto;
  background: #fff;
  border-radius: 16px;
  border: 1px solid #ededed;
  box-shadow:
    0 24px 48px -12px rgba(35, 35, 35, 0.14),
    0 0 0 1px rgba(0, 0, 0, 0.02);
  outline: none;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 22px 22px 18px;
  border-bottom: 1px solid #f0f0f0;
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-weight: 600;
  font-size: 22px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #232323;
`;

export const ModalSubtitle = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #6b6b6b;
`;
export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 100%;
  padding: 20px 22px 22px;
`;

export const FieldsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;

  @media (min-width: 440px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding-top: 4px;
`;

export const CancelButton = styled.button`
  flex: 1;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  letter-spacing: -0.01em;
  color: #232323;
  background: #fff;
  border: 1.5px solid #ededed;
  border-radius: 12px;
  padding: 14px 18px;
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    background 0.15s ease;

  &:hover {
    border-color: #d8d8d8;
    background: #fafafa;
  }
`;

export const SubmitWrap = styled.div`
  flex: 1;
  min-width: 0;
`;
