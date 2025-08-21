import { request } from 'utils/request';
import { setPostsData } from './setPostsData';

export const loadPostsAsync = (search, limit, page) => (dispatch) => {
  request('/api/posts', { page, limit, search }).then(({ posts }) => {
    console.log(posts);
    dispatch(setPostsData(posts));
  });
};
