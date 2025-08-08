import { closeModal, deleteCommentAsync, openModal } from 'actions';
import { Icon } from 'components';
import { ROLE } from 'constants';
import { PROP_TYPE } from 'constants';
import { useServerRequest } from 'hooks';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const CommentContainer = ({
  id,
  postId,
  content,
  publishedAt,
  authorLogin,
  userRole,
  className,
}) => {
  const requestServer = useServerRequest();
  const dispatch = useDispatch();

  const onDeleteComment = (commentId) => {
    dispatch(
      openModal({
        text: 'Delete comment?',
        onConfirm: () => {
          dispatch(deleteCommentAsync(requestServer, commentId, postId));

          dispatch(closeModal);
        },
        onClose: () => dispatch(closeModal),
      }),
    );
  };

  return (
    <div className={className}>
      <div className="comment-body">
        <div className="comment-header">
          <div className="author">
            <Icon id="fa-user-circle-o" size="18px" isClickable={false} />
            {authorLogin}
          </div>
          <div className="publish-date">
            <Icon id="fa-calendar-o" size="18px" isClickable={false} />
            {publishedAt}
          </div>
        </div>
        <div className="comment-content">{content}</div>
      </div>
      {userRole === ROLE.ADMIN || userRole === ROLE.MODERATOR ? (
        <Icon id="fa-trash-o" onClick={() => onDeleteComment(id)} margin="0 0 0 5px" />
      ) : null}
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
    width: 94%;
    padding: 10px;
  }
`;

CommentContainer.propTypes = {
  id: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  authorLogin: PropTypes.string.isRequired,
  userRole: PROP_TYPE.ROLE.isRequired,
  className: PropTypes.string,
};
