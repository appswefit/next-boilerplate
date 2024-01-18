'use client';

import React from 'react';
import { SearchTableProps } from './types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Button } from '../ui/button';
import { FileInput, Trash, ChevronLeft, ChevronRight } from 'lucide-react';
import ConfirmationDialog from './ConfirmationDialog';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '../ui/pagination';
import useFilterParams from '@/hooks/useFilterParams';

function SearchTable({
  columns,
  data,
  total = data.length,
  onDeleteClick,
  onDetailClick,
}: SearchTableProps) {
  const hasActions = Boolean(onDeleteClick) || Boolean(onDetailClick);
  const { changeFilter, params } = useFilterParams({
    filters: {
      skip: 0,
      take: 10,
    },
  });
  const { skip, take } = params;

  const totalPages = Math.ceil(total / take);
  const page = Math.floor(skip / take) + 1;

  const isBegining = skip <= 0;
  const isLast = page * take >= total;

  const handlePageChange = (type: 'next' | 'back') => {
    if (type === 'next') {
      changeFilter('skip', (page * take).toString());
    }

    if (type === 'back') {
      console.log('aaq  ', page - 1);
      changeFilter('skip', ((page - 2) * take).toString());
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              {columns.map(column => (
                <TableHead key={column.name}>{column.head}</TableHead>
              ))}
              {hasActions && <TableHead>Ações</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  Nenhum item encontrado
                </TableCell>
              </TableRow>
            )}
            {data.map(campaign => (
              <TableRow key={campaign.id}>
                <TableCell className="font-medium">{campaign.id}</TableCell>
                {columns.map(column => (
                  <TableCell key={`${campaign.id}-${column.name}`}>
                    {column.render
                      ? column.render(campaign[column.name])
                      : campaign[column.name]}
                  </TableCell>
                ))}
                {hasActions && (
                  <TableCell>
                    {onDetailClick && (
                      <Button
                        onClick={() => onDetailClick(campaign.id)}
                        className="h-9 w-9"
                        size="icon"
                        variant="ghost"
                      >
                        <FileInput className="h-4 w-4" />
                      </Button>
                    )}
                    {onDeleteClick && (
                      <ConfirmationDialog
                        onConfirmation={() => onDeleteClick(campaign.id)}
                      >
                        <Button className="h-9 w-9" size="icon" variant="ghost">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </ConfirmationDialog>
                    )}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Pagination className="justify-end">
        <PaginationContent className="gap-4">
          <Button
            onClick={() => handlePageChange('back')}
            disabled={isBegining}
            size="icon"
            variant="outline"
          >
            <ChevronLeft size={20} />
          </Button>
          <PaginationItem className="text-sm">
            {page} - {totalPages}
          </PaginationItem>
          <Button
            onClick={() => handlePageChange('next')}
            disabled={isLast}
            size="icon"
            variant="outline"
          >
            <ChevronRight size={20} />
          </Button>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default SearchTable;
