import React from 'react';
import { UserRow } from '../UserRow/UserRow';
import { getUsers } from '../../../bff/api/getUsers';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../../selectors/selectUsers';
import { selectRoles } from '../../../selectors/selectRoles';

export const TableBody = () => {
  const users = useSelector(selectUsers);
  return (
    <tbody>
      {users &&
        users.map(({ id, login, registeredAt, roleId }) => (
          <UserRow key={id} login={login} registeredAt={registeredAt} roleId={roleId} />
        ))}
    </tbody>
  );
};
