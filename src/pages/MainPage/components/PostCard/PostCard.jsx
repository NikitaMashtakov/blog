import { Icon } from 'components';
import React from 'react';
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
        <img src={imageUrl} />
        <h3 className="post-title">{title}</h3>
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
  gap: 5px;
  border: 1px solid black;

  & .post-title {
    text-align: left;
    padding: 0 10px;
    /* overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; */
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
