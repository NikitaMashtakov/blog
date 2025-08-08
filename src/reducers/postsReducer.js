import { ACTION_TYPE } from 'actions';

const initialPostsState = { posts: [], totalCount: null };

export const postsReducer = (state = initialPostsState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.SET_POSTS_DATA:
      return { ...payload };
    default:
      return state;
  }
};
