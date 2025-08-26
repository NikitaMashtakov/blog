import { request } from 'utils/request';
import { setPostsData } from './setPostsData';

export const loadPostsAsync = (search, limit, page) => (dispatch) => {
  request(`/api/posts?search=${search}&page=${page}&limit=${limit}`).then(({ data }) => {
    // console.log(data.posts);
    dispatch(setPostsData(data));
  });
};
