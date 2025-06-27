import { useEffect } from 'react';
import { TableHeader } from './TableHeader/TableHeader';
import { TableBody } from './TableBody/TableBody';
import { getRoles } from '../../bff/api/getRoles';
import { getUsers } from '../../bff/api/getUsers';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const UserTableContainer = ({ className }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getRoles().then((data) => dispatch({ type: 'SET_ROLES', payload: { roles: data } }));
    getUsers().then((data) => dispatch({ type: 'SET_USERS', payload: { users: data } }));
  }, [dispatch]);
  return (
    <table className={className}>
      <TableHeader />
      <TableBody />
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
