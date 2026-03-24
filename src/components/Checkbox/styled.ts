import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  > input {
    position: absolute;
    display: none;
  }
`;

export const IconContainer = styled.div<{ $checked?: boolean }>`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  position: relative;
  border-radius: 4px;

  > svg {
    border-radius: 4px;
    fill: ${({ $checked }) => ($checked ? '#3C538E' : 'transparent')};
    transition: background 0.2s ease-in-out;
  }
`;

export const CheckedContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 12px;
    height: 12px;
    path {
      stroke: #fff;
    }
  }
`;

export const Text = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #9c9c9c;
`;
