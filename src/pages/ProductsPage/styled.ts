import styled from 'styled-components';
import { Button } from '@/components/Button/Button';

export const ProductsPageWrapper = styled.div``;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 26px 30px;
  max-width: 1920px;
  background: #fff;
  margin-bottom: 30px;
`;

export const HeaderTitle = styled.h1`
  font-weight: 700;
  font-size: 24px;
  color: '#202020';
`;

export const SearchbarContainer = styled.div`
  margin: 0 auto;
  width: 1023px;
`;

export const ContentWrapper = styled.div`
  border-radius: 12px;
  padding: 30px;
  max-width: 1920px;
  background: #fff;
`;

export const ContentHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const HeadTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  color: #333;
`;

export const HeadActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const IconButton = styled.button<{ $sortOrder?: 'asc' | 'desc' }>`
  display: flex;
  border: 1px solid #ececeb;
  background: ${({ $sortOrder }) => (!!$sortOrder ? '#242edb' : 'transparent')};
  color: ${({ $sortOrder }) => (!!$sortOrder ? '#fff' : 'unset')};
  border-radius: 8px;
  padding: 10px;
  width: 42px;
  height: 42px;

  > svg {
    transform: ${({ $sortOrder }) => ($sortOrder === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;

export const CustomTitleCell = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
  align-items: center;
  text-align: left;
`;

export const CellImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #ececeb;
`;

export const CellContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CellName = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: #161919;
`;

export const CellCategory = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #b2b3b9;
`;

export const VendorCell = styled.span`
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: #000;
`;

export const RatingCell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const RatingText = styled.span<{ $isNegative?: boolean }>`
  color: ${({ $isNegative }) => $isNegative && '#f11010'};
`;

export const ActionsCell = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

export const StyledButton = styled(Button)`
  padding: 1.5px 14px;
  width: min-content;
  border-radius: 23px;
`;

export const NameHeader = styled.span`
  display: block;
  text-align: left;
`;
