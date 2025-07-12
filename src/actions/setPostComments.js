import { ACTION_TYPE } from './actionType';

export const setPostComments = (comments) => ({
  type: ACTION_TYPE.SET_POST_COMMENTS,
  payload: comments,
});
