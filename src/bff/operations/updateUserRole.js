import { ROLE } from './../constants';
import { sessions } from '../sessions';
import { setUserRole } from '../api';

export const updateUserRole = async (hash, userId, newRoleId) => {
  const accessRoles = [ROLE.ADMIN];

  const access = await sessions.access(hash, accessRoles);
  if (!access) {
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
