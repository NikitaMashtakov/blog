import { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { PostContent } from './components/PostContent/PostCOntent';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useParams } from 'react-router';
import { useServerRequest } from 'hooks';
import { loadPostAsync } from 'actions/loadPostAsync';
import { selectPost } from 'selectors';
import { Comments } from './components/Comments/Comments';
import { PostForm } from './components/PostForm/PostForm';
import { ErrorPage } from 'pages/ErrorPage/ErrorPage';
import { Loader } from 'components';
import PropTypes from 'prop-types';

const PostPageContainer = ({ className }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const isEditing = useMatch('/post/:id/edit');
  const isCreating = useMatch('/post');
  const requestServer = useServerRequest();
  const post = useSelector(selectPost);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useLayoutEffect(() => {
    params.id
      ? dispatch(loadPostAsync(requestServer, params.id)).then((res) => {
          setError(res.error);
          setIsLoading(false);
        })
      : setIsLoading(false);
  }, [dispatch, params.id, requestServer, isEditing]);

  return (
    <div className={className}>
      {isLoading ? (
        <Loader size="40px" />
      ) : error ? (
        <ErrorPage />
      ) : isEditing ? (
        <PostForm post={isEditing && post} />
      ) : isCreating ? (
        <PostForm isCreating={isCreating} />
      ) : (
        <>
          <PostContent post={post} />
          <Comments comments={post.comments} postId={post.id} />
        </>
      )}
    </div>
  );
};

export const PostPage = styled(PostPageContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 60px 0 60px;
`;

PostPageContainer.propTypes = {
  className: PropTypes.string,
};
