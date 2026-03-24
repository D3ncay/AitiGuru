import styled from 'styled-components';
import { TableCell } from '@mui/material';

export const TableHeaderCell = styled(TableCell)`
  border-bottom: unset !important;
`;

export const StyledHeaderCellText = styled.p<{ $textAlign?: AlignSetting }>`
  font-weight: 700;
  font-size: 16px;
  text-align: ${({ $textAlign }) => $textAlign || 'center'};
  color: #b2b3b9;
`;

export const StyledBodyCellText = styled.div`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #000;
`;

export const TableBodyCell = styled(TableCell)<{ $isSelected?: boolean; $isFirstColumn?: boolean }>`
  border-bottom: 1px solid #e2e2e2;
  border-top: 1px solid #e2e2e2;
  ${({ $isFirstColumn }) =>
    $isFirstColumn &&
    `
    border-left: 3px solid transparent !important;
  `}
  ${({ $isSelected, $isFirstColumn }) =>
    $isSelected &&
    $isFirstColumn &&
    `
    border-left: 3px solid #3C538E !important;
  `}
`;

export const TablePagination = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
`;

export const LimitInformation = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: #969b9f;

  span {
    color: #333;
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ArrowButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
`;

export const PageNumbers = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PageWrapper = styled.div<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ececeb;
  border-radius: 4px;
  width: 30px;
  height: 30px;
  font-weight: 400;
  font-size: 14px;
  color: ${({ $isActive }) => ($isActive ? '#fff' : '#b2b3b9')};
  background: ${({ $isActive }) => ($isActive ? '#797fea;' : 'transparent')};
`;
