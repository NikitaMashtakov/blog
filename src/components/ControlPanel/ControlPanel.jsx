import styled from 'styled-components';
import { Icon } from '../Icon/Icon';
import { Link, useNavigate } from 'react-router';
import { Button } from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { ROLE } from '../../constants/role';
import { selectUserLogin, selectUserRole, selectUserHash } from 'selectors';
import { logout } from 'actions';
import PropTypes from 'prop-types';

const PanelRow = styled.div`
  display: flex;
  align-items: center;
  align-self: self-end;
  gap: 24px;
  justify-content: end;
  width: 100%;
  height: 32px;
`;

const StyledLink = styled(Link)`
  width: 100%;
`;

const UserName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-right: -16px;
`;

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();
  const roleId = useSelector(selectUserRole);
  const login = useSelector(selectUserLogin);
  const hash = useSelector(selectUserHash);
  const dispatch = useDispatch();

  return (
    <div className={className}>
      <PanelRow>
        {roleId === ROLE.GUEST ? (
          <StyledLink to={'login'}>
            <Button width="100px">Войти</Button>
          </StyledLink>
        ) : (
          <>
            <UserName>{login}</UserName>

            <Icon
              id="fa-sign-out"
              onClick={() => {
                dispatch(logout(hash));
              }}
            />
          </>
        )}
      </PanelRow>

      <PanelRow>
        <Icon
          id="fa-backward"
          onClick={() => {
            navigate(-1);
          }}
        />
        {roleId === ROLE.ADMIN ? (
          <>
            <Link to={'post'}>
              <Icon id="fa-file-text-o" />
            </Link>

            <Link to={'users'}>
              <Icon id="fa-users" />
            </Link>
          </>
        ) : null}
      </PanelRow>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelContainer)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

ControlPanelContainer.propTypes = {
  className: PropTypes.string,
};
