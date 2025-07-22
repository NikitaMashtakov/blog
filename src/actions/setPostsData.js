import { ACTION_TYPE } from './actionType';

export const setPostsData = (postsData) => ({
  type: ACTION_TYPE.SET_POSTS_DATA,
  payload: postsData,
});
