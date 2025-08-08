import { setPostData } from './setPostData';

export const addPostAsync = (requestServer, newPostData) => (dispatch) =>
  requestServer('addPost', newPostData).then(({ res }) => {
    dispatch(setPostData(res));
    return res;
  });
