import { ACTION_TYPE } from './actionType';

export const addComment = (comment) => ({
  type: ACTION_TYPE.ADD_NEW_COMMENT,
  payload: comment,
});
