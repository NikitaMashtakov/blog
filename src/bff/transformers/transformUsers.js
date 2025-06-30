export const transformUsers = (dbUsersArray) =>
  dbUsersArray.map((user) => ({
    id: user.id,
    login: user.login,
    registeredAt: user.registered_at,
    roleId: user.role_id,
  }));
