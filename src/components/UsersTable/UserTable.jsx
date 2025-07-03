import { useEffect } from 'react';
import { TableHeader } from './TableHeader/TableHeader';
import { getRoles } from '../../bff/api/getRoles';
import { getUsers } from '../../bff/api/getUsers';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { UserRow } from './UserRow/UserRow';

const UserTableContainer = ({ users, roles, onDeleteUser, className }) => {
  return (
    <table className={className}>
      <TableHeader />
      <tbody>
        {users &&
          users.map(({ id, login, registeredAt, roleId }) => (
            <UserRow
              key={id}
              id={id}
              login={login}
              registeredAt={registeredAt}
              roleId={roleId}
              roles={roles}
              onDeleteUser={onDeleteUser}
            />
          ))}
      </tbody>
    </table>
  );
};

export const UsersTable = styled(UserTableContainer)`
  margin: auto;
  margin-top: 20px;
  width: 80%;
  max-width: 760px;
  border-collapse: collapse;
  background: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;

  & > thead th {
    padding: 12px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }

  & > tbody tr:nth-child(odd) {
    background-color: #eeeeee;
  }

  & > tbody td {
    padding: 12px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
`;
