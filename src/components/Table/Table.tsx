import {
  Box,
  LinearProgress,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { ReactComponent as ArrowLeft } from '../../assets/icons/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/ArrowRight.svg';

import React from 'react';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import {
  LimitInformation,
  Pagination,
  PageWrapper,
  StyledBodyCellText,
  StyledHeaderCellText,
  TableBodyCell,
  TableHeaderCell,
  TablePagination,
  PageNumbers,
  ArrowButton
} from '@/components/Table/styled';

export type TableProps<T extends Record<string, any>> = {
  data: T[];
  columns: ColumnDef<T>[];
  isLoading?: boolean;
};

export const TableComponent = <T extends Record<string, any>>({
  data,
  columns,
  isLoading
}: TableProps<T>) => {
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection
    },
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <TableContainer>
      {isLoading && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}
      <Table sx={{ minWidth: 650, borderCollapse: 'separate' }} aria-label="simple table">
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHeaderCell key={header.id}>
                  <StyledHeaderCellText>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </StyledHeaderCellText>
                </TableHeaderCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell, index) => (
                <TableBodyCell
                  key={cell.id}
                  $isSelected={row.getIsSelected()}
                  $isFirstColumn={index === 0}
                >
                  <StyledBodyCellText>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </StyledBodyCellText>
                </TableBodyCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination>
        <LimitInformation>
          Показано <span> 1-20</span> из <span> 120</span>
        </LimitInformation>
        <Pagination>
          <ArrowButton>
            <ArrowLeft />
          </ArrowButton>
          <PageNumbers>
            <PageWrapper $isActive={true}>1</PageWrapper>
            <PageWrapper>2</PageWrapper>
            <PageWrapper>3</PageWrapper>
            <PageWrapper>4</PageWrapper>
            <PageWrapper>5</PageWrapper>
          </PageNumbers>
          <ArrowButton>
            <ArrowRight />
          </ArrowButton>
        </Pagination>
      </TablePagination>
    </TableContainer>
  );
};
