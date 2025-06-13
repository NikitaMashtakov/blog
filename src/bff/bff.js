import { addUser } from './addUser';
import { createSession } from './createSession';
import { getUser } from './getUser';

export const server = {
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
      res: createSession(user.role_id),
    };
  },
  async register(regLogin, regPassword) {
    const user = await getUser(regLogin);

    if (user) {
      return {
        error: 'User already exists',
        res: null,
      };
    }

    await addUser(regLogin, regPassword);

    return {
      error: null,
      res: createSession(user.role_id),
    };
  },
};
