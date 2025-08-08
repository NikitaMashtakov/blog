const initialUsersState = {};

export const usersReducer = (state = initialUsersState, action) => {
  const { type, payload } = action;
  switch (type) {
    // case 'SET_USERS': {
    //   const usersToSet = payload.users.map(({ id, login, registered_at, role_id }) => ({
    //     id,
    //     login,
    //     registeredAt: registered_at,
    //     roleId: role_id,
    //   }));
    //   return { ...state, users: usersToSet };
    // }
    // case 'SET_ROLES':
    //   return { ...state, roles: payload.roles };
    default:
      return state;
  }
};
