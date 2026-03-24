import { useMemo } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { ProductType } from '@/api/products/types';
import {
  ActionsCell,
  CellCategory,
  CellContent,
  CellImage,
  CellName,
  CustomTitleCell,
  NameHeader,
  RatingCell,
  RatingText,
  StyledButton,
  VendorCell
} from '@/pages/ProductsPage/styled';
import { ReactComponent as PlusIcon } from '../../assets/icons/Add.svg';
import { ReactComponent as DotsIcon } from '../../assets/icons/Dots.svg';
import { Checkbox } from '@/components/Checkbox/Checkbox';

export const useColumns = () => {
  const columns: ColumnDef<ProductType>[] = useMemo(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            indeterminate={table.getIsSomePageRowsSelected()}
            onChange={table.getToggleAllPageRowsSelectedHandler()}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            indeterminate={row.getIsSomeSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        )
      },
      {
        accessorKey: 'title',
        header: () => <NameHeader style={{ textAlign: 'left' }}>Наименование</NameHeader>,
        cell: ({ row }) => (
          <CustomTitleCell>
            <CellImage src={row.original.images[0]} alt={row.original.title} />
            <CellContent>
              <CellName>{row.original.title}</CellName>
              <CellCategory>{row.original.category}</CellCategory>
            </CellContent>
          </CustomTitleCell>
        )
      },
      {
        accessorKey: 'brand',
        header: 'Вендор',
        cell: ({ row }) => <VendorCell>{row.original.brand}</VendorCell>
      },
      {
        accessorKey: 'sku',
        header: 'Артикль'
      },
      {
        accessorKey: 'rating',
        header: 'Оценка',
        cell: ({ row }) => (
          <RatingCell>
            <RatingText $isNegative={row.original.rating < 3.5}>{row.original.rating}</RatingText>/5
          </RatingCell>
        )
      },
      {
        accessorKey: 'price',
        header: 'Цена, ₽'
      },
      {
        id: 'actions',
        accessorKey: '',
        cell: () => (
          <ActionsCell>
            <StyledButton leftIcon={<PlusIcon />} />
            <DotsIcon />
          </ActionsCell>
        )
      }
    ],
    []
  );

  return columns;
};
