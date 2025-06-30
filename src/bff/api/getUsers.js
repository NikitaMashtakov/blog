import { transformUsers } from '../transformers';

export const getUsers = () =>
  fetch(`http://localhost:3000/users`)
    .then((response) => response.json())
    .then((loadedUsers) => transformUsers(loadedUsers));
