import styled from 'styled-components';

export const StyledButton = styled.button<{ $hasIcon?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 100%;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  letter-spacing: -0.01em;
  color: #fff;
  border: 1px solid #367aff;
  border-radius: 12px;
  padding: ${({ $hasIcon }) => ($hasIcon ? '10px 20px' : '16px 20px')};
  box-shadow:
    inset 0 -2px 0 1px rgba(0, 0, 0, 0.08),
    0 8px 8px 0 rgba(54, 122, 255, 0.03);
  background:
    linear-gradient(0deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), #242edb;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;
