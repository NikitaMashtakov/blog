import {
  authorize,
  fetchRoles,
  fetchUsers,
  logout,
  register,
  updateUserRole,
} from './operations';

export const server = {
  authorize,
  logout,
  register,
  fetchRoles,
  fetchUsers,
  updateUserRole,
};
