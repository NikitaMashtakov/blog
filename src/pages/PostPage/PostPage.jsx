import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PostContent } from './components/PostContent/PostCOntent';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useServerRequest } from 'hooks';
import { loadPostAsync } from 'actions/loadPostAsync';
import { selectPost } from 'selectors';
import { loadCommentsAsync } from 'actions/loadCommentsAsync';
import { Comments } from './components/Comments/Comments';

const PostPageContainer = ({ className }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const requestServer = useServerRequest();
  const post = useSelector(selectPost);

  useEffect(() => {
    dispatch(loadPostAsync(requestServer, params.id));
  }, [dispatch, params.id, requestServer]);

  return (
    <div className={className}>
      <PostContent post={post} />
      <Comments comments={post.comments} postId={post.id} />
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
