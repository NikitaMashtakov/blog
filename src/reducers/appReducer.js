import { ACTION_TYPE } from '../actions';

const initialAppState = {
  modal: {
    isOpen: false,
    text: '',
    onConfirm: () => {},
    onClose: () => {},
  },
};

export const appReducer = (state = initialAppState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.OPEN_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          ...payload,
          isOpen: true,
        },
      };
    case ACTION_TYPE.CLOSE_MODAL:
      return initialAppState;
    default:
      return state;
  }
};
