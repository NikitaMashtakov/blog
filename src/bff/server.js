import { addUser } from './addUser';
import { createSession } from './createSession';
import { getUser } from './getUser';
import { sessions } from './sessions';

export const server = {
  async logout(session) {
    sessions.remove(session);
  },
  async authorize(authLogin, authPassword) {
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
  },
  async register(regLogin, regPassword) {
    const existedUser = await getUser(regLogin);

    if (existedUser) {
      return {
        error: 'User already exists',
        res: null,
      };
    }

    const user = await addUser(regLogin, regPassword);

    return {
      error: null,
      res: {
        id: user.id,
        login: user.login,
        roleId: user.role_id,
        session: sessions.create(user),
      },
    };
  },
};
