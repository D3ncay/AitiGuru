import React from 'react';
import {
  ContentHead,
  ContentWrapper,
  HeadActionsContainer,
  Header,
  HeaderTitle,
  HeadTitle,
  IconButton,
  ProductsPageWrapper,
  SearchbarContainer
} from '@/pages/ProductsPage/styled';
import { Input } from '@/components/Input/Input';
import { ReactComponent as SearchIcon } from '../../assets/icons/Search.svg';
import { ReactComponent as PlusIcon } from '../../assets/icons/Plus.svg';
import { ReactComponent as RefetchIcon } from '../../assets/icons/Refetch.svg';
import { Button } from '@/components/Button/Button';
import { useProducts } from '@/api/products/queries';
import { TableComponent } from '@/components/Table/Table';
import { useColumns } from '@/pages/ProductsPage/useColumns';
import { AddProductModal } from '@/components/AddProductModal/AddProductModal';
import { Toast } from '@/components/Toast/Toast';
import SortIcon from '@mui/icons-material/Sort';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useDebounce } from '@/hooks/useDebounce';

export const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  const [openToast, setOpenToast] = React.useState(false);
  const [sort, setSort] = useLocalStorage<{ sortBy?: string; order?: 'desc' | 'asc' }>('sort', {});
  const debouncedQuery = useDebounce(searchQuery, 500);

  const { data, isSuccess, isLoading, refetch, isFetching } = useProducts({
    searchQuery: debouncedQuery,
    ...sort
  });
  const columns = useColumns();

  const onHandleChange = (value: string) => {
    setSearchQuery(value);
  };

  const onHandleChangeSort = () => {
    if (sort.order === undefined) {
      setSort({ sortBy: 'price', order: 'asc' });
    } else if (sort.order === 'asc') {
      setSort({ sortBy: 'price', order: 'desc' });
    } else {
      setSort({ sortBy: undefined, order: undefined });
    }
  };

  return (
    <ProductsPageWrapper>
      <Header>
        <HeaderTitle>Товары</HeaderTitle>
        <SearchbarContainer>
          <Input
            placeholder="Найти"
            startIcon={<SearchIcon />}
            onChange={onHandleChange}
            value={searchQuery}
          />
        </SearchbarContainer>
      </Header>
      <ContentWrapper>
        <ContentHead>
          <HeadTitle>Все позиции</HeadTitle>
          <HeadActionsContainer>
            <IconButton onClick={onHandleChangeSort} $sortOrder={sort.order}>
              <SortIcon />
            </IconButton>
            <IconButton onClick={() => refetch()}>
              <RefetchIcon />
            </IconButton>
            <Button
              buttonText="Добавить"
              leftIcon={<PlusIcon />}
              onClick={() => setOpenModal(true)}
            />
          </HeadActionsContainer>
        </ContentHead>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          isSuccess && <TableComponent isLoading={isFetching} data={data} columns={columns} />
        )}
      </ContentWrapper>
      <AddProductModal
        openModal={openModal}
        handleClose={() => setOpenModal(false)}
        onSubmit={() => setOpenToast(true)}
      />
      <Toast isOpen={openToast} onClose={() => setOpenToast(false)} />
    </ProductsPageWrapper>
  );
};
