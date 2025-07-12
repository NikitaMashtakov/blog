import { ROLE } from './../constants';
import { sessions } from '../sessions';
import { setUserRole } from '../api';

export const updateUserRole = async (hash, userId, newRoleId) => {
  const accessRoles = [ROLE.ADMIN];

  if (!sessions.access(hash, accessRoles)) {
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
