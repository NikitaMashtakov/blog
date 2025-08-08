import { Button } from 'components';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PaginationContainer = ({ className, changePage, page, lastPage }) => {
  return lastPage === 1 ? null : (
    <div className={className}>
      <Button disabled={page === 1} onClick={() => changePage(1)}>
        В начало
      </Button>
      <Button disabled={page === 1} onClick={() => changePage(page - 1)}>
        Назад
      </Button>
      <div className="page">{`Страница ${page}`}</div>
      <Button disabled={page === lastPage} onClick={() => changePage(page + 1)}>
        Вперёд
      </Button>
      <Button disabled={page === lastPage} onClick={() => changePage(lastPage)}>
        В конец
      </Button>
    </div>
  );
};

export const Pagination = styled(PaginationContainer)`
  display: flex;
  gap: 10px;
  padding: 20px 50px;
  width: 100%;
  position: absolute;
  bottom: 140px;
  & .page {
    display: flex;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
    white-space: nowrap;
  }
`;

PaginationContainer.propTypes = {
  className: PropTypes.string,
  changePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
};
