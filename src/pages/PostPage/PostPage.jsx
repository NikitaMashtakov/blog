import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PostContent } from './components/PostContent/PostCOntent';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useParams } from 'react-router';
import { useServerRequest } from 'hooks';
import { loadPostAsync } from 'actions/loadPostAsync';
import { selectPost } from 'selectors';
import { loadCommentsAsync } from 'actions/loadCommentsAsync';
import { Comments } from './components/Comments/Comments';
import { PostForm } from './components/PostForm/PostForm';

const PostPageContainer = ({ className }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const isEditing = useMatch('/post/:id/edit');
  const isCreating = useMatch('/post');
  const requestServer = useServerRequest();
  const post = useSelector(selectPost);

  useEffect(() => {
    params.id && dispatch(loadPostAsync(requestServer, params.id));
  }, [dispatch, params.id, requestServer, isEditing]);

  console.log('isEditing', isEditing);
  console.log('isCreating', isCreating);
  return (
    <div className={className}>
      {isEditing ? (
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
