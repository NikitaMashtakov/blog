import { ACTION_TYPE } from '../actions/actionType';
import { ROLE } from '../constants/role';

const initialUserState = {
  id: null,
  login: null,
  roleId: ROLE.GUEST,
  hash: null,
};

export const userReducer = (state = initialUserState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.SET_USER: {
      const userState = { ...state, ...payload };
      return userState;
    }
    case ACTION_TYPE.LOGOUT: {
      return initialUserState;
    }
    default: {
      const userState = JSON.parse(sessionStorage.getItem('user'));
      return userState ?? state;
    }
  }
};
