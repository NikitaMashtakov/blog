import { closeModal, openModal } from 'actions';
import { deletePostAsync } from 'actions/deletePostAsync';
import { Icon } from 'components';
import { useServerRequest } from 'hooks';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const ToolsPanelContainer = ({
  className,
  postId,
  publishedAt,
  functionButtonId,
  functionButtonOnClick,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const requestServer = useServerRequest();

  const onDeletePost = (id) => {
    dispatch(
      openModal({
        text: 'Удалить статью?',
        onConfirm: () => {
          dispatch(deletePostAsync(requestServer, id)).then(
            (res) => res && navigate('/'),
          );
          dispatch(closeModal);
        },
        onClose: () => dispatch(closeModal),
      }),
    );
  };

  return (
    <div className={className}>
      <div className="publish-date">
        <Icon id="fa-calendar-o" size="18px" isClickable={false} />
        {publishedAt}
      </div>

      <div className="tools">
        <Icon id={functionButtonId} onClick={functionButtonOnClick} />
        <Icon id="fa-trash-o" onClick={() => onDeletePost(postId)} />
      </div>
    </div>
  );
};

export const ToolsPanel = styled(ToolsPanelContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 10px 0;

  & .publish-date,
  .tools {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
  }
`;
