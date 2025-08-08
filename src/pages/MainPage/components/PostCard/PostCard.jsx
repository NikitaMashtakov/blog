import { Icon } from 'components';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import styled from 'styled-components';

const PostCardContainer = ({
  className,
  id,
  imageUrl,
  title,
  publishedAt,
  commentsCount,
}) => {
  return (
    <Link to={`/post/${id}`}>
      <div className={className}>
        <div className="post-header">
          <img src={imageUrl} />
          <h3 className="post-title">{title}</h3>
        </div>
        <div className="post-info">
          <div className="info-field">
            <Icon id="fa-calendar-o" size="18px" isClickable={false} />
            {publishedAt}
          </div>
          <div className="info-field">
            <Icon id="fa-comment-o" size="18px" isClickable={false} />
            {commentsCount}
          </div>
        </div>
      </div>
    </Link>
  );
};

export const PostCard = styled(PostCardContainer)`
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  border: 1px solid black;
  height: 100%;
  & .post-header {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  & .post-title {
    text-align: left;
    padding: 0 10px;
  }

  & .post-info {
    display: flex;
    padding: 5px 10px 10px 10px;
    justify-content: space-between;
    align-items: center;
  }

  & .info-field {
    display: flex;
    gap: 5px;
  }
`;

PostCardContainer.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  commentsCount: PropTypes.number.isRequired,
};
