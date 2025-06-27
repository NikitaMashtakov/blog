import styled from 'styled-components';
import { UsersTable } from '../../components/UsersTable/UserTable';
import { H2 } from '../../components/H2/H2';

const UsersPageContainer = () => {
  return (
    <>
      <H2>Пользователи</H2>
      <UsersTable />
    </>
  );
};

export const UsersPage = styled(UsersPageContainer)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
