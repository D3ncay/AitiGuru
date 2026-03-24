import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  width: 100%;
  position: relative;
`;

export const InputLabel = styled.label`
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #232323;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  border: 1.5px solid #ededed;
  border-radius: 12px;
  padding: 14px 16px;
  background: #fff;
  width: 100%;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const StyledInput = styled.input`
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #232323;
  border: none;
  outline: none;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
`;

export const ErrorMessage = styled.span`
  position: absolute;
  bottom: -15px;
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;
