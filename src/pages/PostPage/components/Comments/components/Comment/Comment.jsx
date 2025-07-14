import { deleteCommentAsync } from 'actions/deleteCommentAsync';
import { Icon } from 'components';
import { ROLE } from 'constants';
import { useServerRequest } from 'hooks';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const CommentContainer = ({
  id,
  authorId,
  postId,
  content,
  publishedAt,
  authorLogin,
  readerRole,
  readerId,
  className,
}) => {
  const requestServer = useServerRequest();
  const dispatch = useDispatch();
  const onDeleteComment = (commentId) => {
    dispatch(deleteCommentAsync(requestServer, commentId, postId));
  };
  return (
    <div className={className}>
      <div className="comment-body">
        <div className="comment-header">
          <div className="author">
            <Icon id="fa-user-circle-o" size="18px" />
            {authorLogin}
          </div>
          <div className="publish-date">
            <Icon id="fa-calendar-o" size="18px" />
            {publishedAt}
          </div>
        </div>
        <div className="comment-content">{content}</div>
      </div>
      <Icon
        id="fa-trash-o"
        visible={
          readerRole === ROLE.ADMIN ||
          readerRole === ROLE.MODERATOR ||
          readerId === authorId
        }
        onClick={() => onDeleteComment(id)}
        margin="0 0 0 5px"
      />
    </div>
  );
};

export const Comment = styled(CommentContainer)`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  width: 560px;
  & .comment-header {
    display: flex;
    justify-content: space-between;
  }

  & .author {
    display: flex;
    gap: 10px;
  }

  & .publish-date {
    display: flex;
    gap: 10px;
  }
  & .comment-content {
    margin-top: 10px;
  }
  & .comment-body {
    border: solid 1px black;
    width: 100%;
    padding: 10px;
  }
`;
