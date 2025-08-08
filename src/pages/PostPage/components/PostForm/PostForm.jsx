import { Button, Input } from 'components';
import { useRef } from 'react';
import styled from 'styled-components';
import { sanitizeContent } from './utils/sanitizeContent';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { editPostAsync } from 'actions/editPostAsync';
import { useServerRequest } from 'hooks';
import { ToolsPanel } from '../ToolsPanel/ToolsPanel';
import { initialPostState } from 'reducers';
import { addPostAsync } from 'actions/addPostAsync';
import { PROP_TYPE } from 'constants';
import PropTypes from 'prop-types';

const PostFormContainer = ({ post = initialPostState, isCreating, className }) => {
  const { id, title, imageUrl, content, publishedAt } = post;
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const requestServer = useServerRequest();

  const onSave = () => {
    const newImageUrl = imageRef.current.value;
    const newTitle = titleRef.current.value;
    const newContent = sanitizeContent(contentRef.current.innerHTML);
    dispatch(
      editPostAsync(requestServer, id, { newTitle, newImageUrl, newContent }),
    ).then(({ res }) => res && navigate(`/post/${id}`));
  };

  const onCreate = () => {
    const newImageUrl = imageRef.current.value;
    const newTitle = titleRef.current.value;
    const newContent = sanitizeContent(contentRef.current.innerHTML);
    dispatch(addPostAsync(requestServer, { newTitle, newImageUrl, newContent })).then(
      (res) => res && navigate(`/post/${res.id}`),
    );
  };

  return (
    <div className={className}>
      <label htmlFor="image-url">Ссылка на изображение:</label>
      <Input ref={imageRef} id="image-url" defaultValue={imageUrl} />
      <label htmlFor="post-title">Заголовок поста:</label>
      <Input ref={titleRef} id="post-title" defaultValue={title} />

      {!isCreating ? (
        <ToolsPanel
          postId={id}
          publishedAt={publishedAt}
          functionButtonId={'fa-floppy-o'}
          functionButtonOnClick={onSave}
        />
      ) : null}

      <div
        ref={contentRef}
        suppressContentEditableWarning={true}
        className="post-content"
        contentEditable={true}
      >
        {content}
      </div>

      {isCreating ? (
        <div className="buttons">
          <Button onClick={onCreate}>Опубликовать</Button>
          <Button onClick={() => navigate('/')}>Отменить</Button>
        </div>
      ) : null}
    </div>
  );
};

export const PostForm = styled(PostFormContainer)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  & .post-content {
    text-align: justify;
    padding: 10px;
    background-color: #ededed;
    border: 1px solid #000;
    font-size: 18px;
    min-height: 80px;
  }
  & > label {
    font-size: 18px;
  }

  & .buttons {
    display: flex;
    gap: 20px;
    padding: 20px;
  }
`;

PostFormContainer.propTypes = {
  post: PROP_TYPE.POST,
  isCreating: PropTypes.bool.isRequired,
  className: PropTypes.string,
};
