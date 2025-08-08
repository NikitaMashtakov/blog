import { setPostsData } from './setPostsData';

export const loadPostsAsync = (requestServer, page, limit, search) => (dispatch) => {
  requestServer('fetchPosts', page, limit, search).then(({ res }) => {
    dispatch(setPostsData(res));
  });
};
