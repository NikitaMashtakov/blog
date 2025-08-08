import { ACTION_TYPE } from './actionType';
import { server } from './../bff';

export const logout = (session) => {
  server.logout(session);
  sessionStorage.removeItem('user');
  return { type: ACTION_TYPE.LOGOUT };
};
