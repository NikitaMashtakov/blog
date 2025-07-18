import { addSession, deleteSession, getSession, getUser } from './api';

export const sessions = {
  create(user) {
    const hash = Math.random().toFixed(50);
    addSession(hash, user.id, user.login);
    return hash;
  },
  async remove(hash) {
    const session = await getSession(hash);
    if (!session) {
      return;
    }
    deleteSession(session.id);
  },
  async access(hash, accessRoles) {
    const session = await getSession(hash);
    console.log('session in access', session);
    const user = await getUser(session.userLogin);

    return !!user && accessRoles.includes(user.roleId);
  },
};
