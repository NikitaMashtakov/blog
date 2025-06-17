import React from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon/Icon';
import { Link, useNavigate } from 'react-router';

const PanelRow = styled.div`
  display: flex;
  align-items: center;
  align-self: self-end;
  gap: 24px;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  width: 100px;
  height: 32px;
  border: 1px solid black;
  border-radius: 3px;
  background-color: #eee;
`;

const BackwardButton = styled.div`
  cursor: pointer;
`;

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();
  return (
    <div className={className}>
      <PanelRow>
        <StyledLink to={'login'}>Войти</StyledLink>
        {/* <Icon id="fa-sign-out" /> */}
      </PanelRow>
      <PanelRow>
        <BackwardButton onClick={() => navigate(-1)}>
          <Icon id="fa-backward" />
        </BackwardButton>
        <Link to={'post'}>
          <Icon id="fa-file-text-o" />
        </Link>
        <Link to={'users'}>
          <Icon id="fa-users" />
        </Link>
      </PanelRow>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelContainer)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
