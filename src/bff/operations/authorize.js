import { getUser } from '../api/getUser';
import { sessions } from '../sessions';

export const authorize = async (authLogin, authPassword) => {
  const user = await getUser(authLogin);

  if (!user) {
    return {
      error: 'User not found',
      res: null,
    };
  }

  if (authPassword !== user.password) {
    return {
      error: 'Incorrect password',
      res: null,
    };
  }

  return {
    error: null,
    res: {
      id: user.id,
      login: user.login,
      roleId: user.role_id,
      session: sessions.create(user),
    },
  };
};
