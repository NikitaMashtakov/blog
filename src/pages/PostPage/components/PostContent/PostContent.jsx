import { Icon } from 'components';
import React from 'react';
import styled from 'styled-components';

const PostContentContainer = ({ post, className }) => {
  const { id, title, imageUrl, content, publishedAt } = post;

  return (
    <div className={className}>
      {imageUrl && <img src={imageUrl} alt={title} />}
      <h2 className="post-title">{title}</h2>
      <div className="panel">
        <div className="publish-date">
          <Icon id="fa-calendar-o" size="18px" />
          {publishedAt}
        </div>
        <div className="tools">
          <Icon id="fa-pencil-square-o" onClick={() => {}} />
          <Icon id="fa-trash-o" onClick={() => {}} />
        </div>
      </div>
      <div className="post-content">{content}</div>
    </div>
  );
};

export const PostContent = styled(PostContentContainer)`
  & .panel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0 10px 0;
  }
  & .publish-date,
  .tools {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
  }

  & img {
    float: left;
    margin: 0px 20px 10px 0px;
  }
  & .post-content {
    text-align: justify;
    /* text-indent: 12px; */
  }
`;
