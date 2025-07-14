import { Button } from 'components';
import React from 'react';
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
          <Button onClick={() => onConfirm}>Да</Button>
          <Button>Отмена</Button>
        </div>
      </div>
    </div>
  );
};

export const Modal = styled(ModalContainer)``;
