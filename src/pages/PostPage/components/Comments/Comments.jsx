import React, { useState } from 'react';
import styled from 'styled-components';
import { Comment } from './components/Comment/Comment';
import { Icon } from 'components';
import { useParams } from 'react-router';
import { useServerRequest } from 'hooks';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentAsync } from 'actions';
import { selectUserRole, selectUserId } from 'selectors';
import { ROLE } from 'constants';

const CommentsContainer = ({ className, comments, postId }) => {
  const [text, setText] = useState('');
  const requestServer = useServerRequest();
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const userRole = useSelector(selectUserRole);

  const onCreateComment = (authorId, postId, content) => {
    dispatch(addCommentAsync(requestServer, authorId, postId, content));
    setText('');
  };

  return (
    <div className={className}>
      {userRole !== ROLE.GUEST && (
        <div className="new-comment">
          <textarea
            name="new"
            id="new-comment"
            placeholder="Комментарий"
            value={text}
            onChange={({ target }) => setText(target.value)}
          />
          <Icon
            id="fa-paper-plane-o"
            onClick={() => onCreateComment(userId, postId, text)}
          />
        </div>
      )}
      <div className="comments">
        {comments.map(({ id, content, publishedAt, authorLogin, postId }) => (
          <Comment
            key={id}
            id={id}
            postId={postId}
            content={content}
            publishedAt={publishedAt}
            authorLogin={authorLogin}
            userRole={userRole}
          />
        ))}
      </div>
    </div>
  );
};

export const Comments = styled(CommentsContainer)`
  margin-top: 25px;
  margin-bottom: 25px;

  width: 560px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* display: flex; */
  & textarea {
    width: 100%;
    height: 164px;
    font-size: 18px;
    resize: none;
    padding: 10px;
  }
  & .new-comment {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  & .comments {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
