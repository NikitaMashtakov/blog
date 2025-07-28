import { loadPostsAsync } from 'actions';
import { useServerRequest } from 'hooks';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts, selectTotalCount } from 'selectors';
import styled from 'styled-components';
import { PostCard } from './components/PostCard/PostCard';
import { Pagination } from './components/Pagination/Pagination';

const MainPageContainer = ({ className }) => {
  const dispatch = useDispatch();
  const requestServer = useServerRequest();
  const posts = useSelector(selectPosts);
  const page = '2';
  const limit = '5';
  const search = ' ';
  const lastPage = Math.ceil(useSelector(selectTotalCount) / limit);
  useEffect(() => {
    dispatch(loadPostsAsync(requestServer, page, limit, search));
  }, [dispatch, requestServer]);
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
        <Pagination lastPage={lastPage} />
      </div>
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
