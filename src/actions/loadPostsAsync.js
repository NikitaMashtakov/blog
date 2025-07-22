import { setPostsData } from './setPostsData';

export const loadPostsAsync = (requestServer) => (dispatch) => {
  requestServer('fetchPosts').then(({ res }) => {
    dispatch(setPostsData(res));
  });
};
