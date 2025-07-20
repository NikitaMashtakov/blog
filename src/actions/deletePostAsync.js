import { resetPostData } from './resetPostData';

export const deletePostAsync = (requestServer, postId) => (dispatch) =>
  requestServer('removePost', postId).then(({ res }) => {
    dispatch(resetPostData());
    return res;
  });
