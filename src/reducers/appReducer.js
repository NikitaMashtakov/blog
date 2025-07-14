import { ACTION_TYPE } from '../actions';

const initialAppState = {
  modal: {
    isOpen: false,
    text: '',
    onConfirm: () => {},
    onCancel: () => {},
  },
};

export const appReducer = (state = initialAppState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};
