import { setPostComments } from './setPostComments';

export const deleteCommentAsync = (requestServer, commentId, postId) => (dispatch) => {
  requestServer('removeComment', commentId, postId).then(({ res }) => {
    console.log(res);
    dispatch(setPostComments(res));
  });
};
