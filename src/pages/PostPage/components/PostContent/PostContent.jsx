import { Icon } from 'components';
import { ROLE } from 'constants';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router';
import { selectUserRole } from 'selectors';
import styled from 'styled-components';
import { ToolsPanel } from '../ToolsPanel/ToolsPanel';

const PostContentContainer = ({ post, className }) => {
  const { id, title, imageUrl, content, publishedAt } = post;
  const userRole = useSelector(selectUserRole);
  const location = useLocation();
  const navigate = useNavigate();

  const onEdit = () => {
    navigate(`${location.pathname}/edit`);
  };

  return (
    <div className={className}>
      {imageUrl && <img src={imageUrl} alt={title} />}
      <h2 className="post-title">{title}</h2>

      <ToolsPanel
        postId={id}
        publishedAt={publishedAt}
        functionButtonId={'fa-pencil-square-o'}
        functionButtonOnClick={onEdit}
        userRole={userRole}
      />

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
    white-space: pre-line;
  }
`;
