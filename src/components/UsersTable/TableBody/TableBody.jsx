import React from 'react';
import { UserRow } from '../UserRow/UserRow';
import { getUsers } from '../../../bff/api/getUsers';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../../selectors/selectUsers';
import { selectRoles } from '../../../selectors/selectRoles';

export const TableBody = () => {
  const users = useSelector(selectUsers);
  return <></>;
};
