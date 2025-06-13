export const getUser = async (authLogin) => {
  const users = await fetch('http://localhost:3005/users').then((loadedUsers) =>
    loadedUsers.json(),
  );
  return users.find(({ login }) => login === authLogin);
};
