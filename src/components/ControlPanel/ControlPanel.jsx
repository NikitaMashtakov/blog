import styled from 'styled-components';
import { Icon } from '../Icon/Icon';
import { Link, useNavigate } from 'react-router';
import { Button } from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { ROLE } from '../../constants/role';
import { selectUserLogin, selectUserRole } from '../../selectors';
import { logout } from '../../actions';
import { selectUserSession } from '../../selectors/selectUserSession';

const PanelRow = styled.div`
  display: flex;
  align-items: center;
  align-self: self-end;
  gap: 24px;
  justify-content: end;
  width: 100%;
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
  const session = useSelector(selectUserSession);
  const dispatch = useDispatch();

  return (
    <div className={className}>
      <PanelRow>
        {roleId === ROLE.GUEST ? (
          <StyledLink to={'login'}>
            <Button>Войти</Button>
          </StyledLink>
        ) : (
          <>
            <UserName>{login}</UserName>

            <Icon
              id="fa-sign-out"
              onClick={() => {
                dispatch(logout(session));
              }}
            />
          </>
        )}
        {/*  */}
      </PanelRow>
      <PanelRow>
        <Icon
          id="fa-backward"
          onClick={() => {
            navigate(-1);
          }}
        />
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
