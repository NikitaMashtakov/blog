import { Icon } from 'components';
import styled from 'styled-components';

const CommentContainer = ({ id, authorId, content, publishedAt, className }) => {
  const onDeleteComment = () => {};
  return (
    <div className={className}>
      <div className="comment-body">
        <div className="comment-header">
          <div className="author">
            <Icon id="fa-user-circle-o" size="18px" />
            {authorId}
          </div>
          <div className="publish-date">
            <Icon id="fa-calendar-o" size="18px" />
            {publishedAt}
          </div>
        </div>
        <div className="comment-content">{content}</div>
      </div>
      <Icon id="fa-trash-o" onClick={() => onDeleteComment(id)} margin="0 0 0 5px" />
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
