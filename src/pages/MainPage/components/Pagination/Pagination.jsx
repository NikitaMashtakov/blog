import { Button } from 'components';
import React from 'react';
import styled from 'styled-components';

const PaginationContainer = ({ className, changePage, page, lastPage }) => {
  return (
    <div className={className}>
      <Button onClick={() => changePage(1)}>В начало</Button>
      <Button onClick={() => changePage(page - 1)}>Назад</Button>
      <div className="page">{page}</div>
      <Button onClick={() => changePage(page + 1)}>Вперёд</Button>
      <Button onClick={() => changePage(lastPage)}>В конец</Button>
    </div>
  );
};

export const Pagination = styled(PaginationContainer)``;
