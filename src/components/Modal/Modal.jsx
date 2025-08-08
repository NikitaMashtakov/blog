import { Button } from 'components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  selectModalIsOpen,
  selectModalOnClose,
  selectModalOnConfirm,
  selectModalText,
} from 'selectors';
import styled from 'styled-components';

const ModalContainer = ({ className }) => {
  const isOpen = useSelector(selectModalIsOpen);
  const text = useSelector(selectModalText);
  const onConfirm = useSelector(selectModalOnConfirm);
  const onClose = useSelector(selectModalOnClose);
  if (!isOpen) {
    return null;
  }
  return (
    <div className={className}>
      <div className="overlay"></div>
      <div className="box">
        <h3>{text}</h3>
        <div className="buttons">
          <Button onClick={onConfirm}>Да</Button>
          <Button onClick={onClose}>Отмена</Button>
        </div>
      </div>
    </div>
  );
};

export const Modal = styled(ModalContainer)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;

  & .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  & .box {
    transform: translate(0, -50%);
    width: 400px;
    margin: 0;
    padding: 0 20px 20px;
    text-align: center;
    background-color: #fff;
    border: 3px solid #000;
    z-index: 30;
  }
  & .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

ModalContainer.propTypes = {
  className: PropTypes.string,
};
