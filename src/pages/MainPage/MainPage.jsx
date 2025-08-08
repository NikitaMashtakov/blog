import { loadPostsAsync } from 'actions';
import { useServerRequest } from 'hooks';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts, selectTotalCount } from 'selectors';
import styled from 'styled-components';
import { PostCard } from './components/PostCard/PostCard';
import { Pagination } from './components/Pagination/Pagination';
import { Input } from 'components';
import useDebouncedValue from 'hooks/useDebouncedValue';
import PropTypes from 'prop-types';

const SearchInput = styled(Input)`
  width: 320px;
`;

const MainPageContainer = ({ className }) => {
  const dispatch = useDispatch();
  const requestServer = useServerRequest();
  const posts = useSelector(selectPosts);
  const [page, setPage] = useState(1);
  const limit = '6';
  const [search, setSearch] = useState('');
  const lastPage = Math.ceil(useSelector(selectTotalCount) / limit);
  const changePage = (pageNum) => {
    setPage(pageNum);
  };
  const debouncedSearch = useDebouncedValue(search, 1000);
  const handleSearch = (value) => {
    setSearch(value);
  };
  useEffect(() => {
    dispatch(loadPostsAsync(requestServer, String(page), limit, debouncedSearch));
  }, [dispatch, page, requestServer, debouncedSearch]);

  return (
    <div className={className}>
      <div className="main">
        <SearchInput
          type="text"
          name="search"
          value={search}
          placeholder="Поиск..."
          onChange={({ target }) => handleSearch(target.value)}
        />
        <div className="post-list">
          {posts.map(({ id, imageUrl, title, publishedAt, commentsCount }) => (
            <PostCard
              key={id}
              id={id}
              imageUrl={imageUrl}
              title={title}
              publishedAt={publishedAt}
              commentsCount={commentsCount}
            />
          ))}
        </div>
      </div>
      <Pagination changePage={changePage} page={page} lastPage={lastPage} />
    </div>
  );
};

export const MainPage = styled(MainPageContainer)`
  height: 100%;
  display: flex;
  flex-direction: column;
  & .main {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  & .post-list {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    justify-items: center;
    padding: 30px;
  }
  & .input-container {
    width: 320px;
    display: flex;
    align-items: center;
    padding: 20px 0;
  }
`;

MainPageContainer.propTypes = {
  className: PropTypes.string,
};
