import { ROLE } from './../constants';
import { sessions } from '../sessions';
import { setUserRole } from '../api/setUserRole';

export const updateUserRole = async (userSession, userId, newRoleId) => {
  const accessRoles = [ROLE.ADMIN];

  if (!sessions.access(userSession, accessRoles)) {
    return {
      error: 'Access denied',
      res: null,
    };
  }

  await setUserRole(userId, newRoleId);

  return {
    error: null,
    res: newRoleId,
  };
};
