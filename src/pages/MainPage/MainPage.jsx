import { loadPostsAsync } from 'actions';
import { useServerRequest } from 'hooks';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts, selectTotalCount } from 'selectors';
import styled from 'styled-components';
import { PostCard } from './components/PostCard/PostCard';
import { Pagination } from './components/Pagination/Pagination';

const MainPageContainer = ({ className }) => {
  const dispatch = useDispatch();
  const requestServer = useServerRequest();
  const posts = useSelector(selectPosts);
  const [page, setPage] = useState(1);
  const limit = '5';
  const search = ' ';
  const lastPage = Math.ceil(useSelector(selectTotalCount) / limit);
  const changePage = (pageNum) => {
    setPage(pageNum);
  };
  useEffect(() => {
    dispatch(loadPostsAsync(requestServer, String(page), limit, search));
  }, [dispatch, page, requestServer]);
  return (
    <div className={className}>
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
      <Pagination changePage={changePage} page={page} lastPage={lastPage} />
    </div>
  );
};

export const MainPage = styled(MainPageContainer)`
  & .post-list {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    padding: 30px;
  }
`;
