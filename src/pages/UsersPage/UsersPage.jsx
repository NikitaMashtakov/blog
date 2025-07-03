import styled from 'styled-components';
import { UsersTable } from '../../components/UsersTable/UserTable';
import { H2 } from '../../components/H2/H2';
import { server } from './../../bff';
import { useServerRequest } from '../../hooks';
import { useEffect, useState } from 'react';
import { ROLE } from '../../constants';

const UsersPageContainer = () => {
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [shouldComponentUpdate, setShouldComponentUpdate] = useState(false);
  const requestServer = useServerRequest();

  useEffect(() => {
    Promise.all([requestServer('fetchUsers'), requestServer('fetchRoles')]).then(
      ([usersRes, rolesRes]) => {
        if (usersRes || rolesRes) {
          setErrorMessage(usersRes.error || rolesRes.error);
        }
        setUsers(usersRes.res);
        setRoles(rolesRes.res.filter((role) => role.id !== ROLE.GUEST));
      },
    );
    console.log('effect');
  }, [requestServer, shouldComponentUpdate]);

  const onDeleteUser = async (userId) => {
    await requestServer('removeUser', userId);
    setShouldComponentUpdate((prev) => !prev);
  };

  return (
    <>
      {errorMessage ? (
        <div>{errorMessage}</div>
      ) : (
        <>
          <H2>Пользователи</H2>
          <UsersTable users={users} roles={roles} onDeleteUser={onDeleteUser} />
        </>
      )}
    </>
  );
};

export const UsersPage = styled(UsersPageContainer)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
