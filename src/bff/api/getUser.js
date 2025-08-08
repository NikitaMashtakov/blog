import { transformUser } from '../transformers';

export const getUser = async (loginToFind) =>
  fetch(`http://localhost:3000/users?login=${loginToFind}`)
    .then((loadedUser) => {
      return loadedUser.json();
    })
    .then(([user]) => user && transformUser(user));
