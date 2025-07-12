import { setPostComments } from './setPostComments';

export const addCommentAsync = (requestServer, authorId, postId, text) => (dispatch) => {
  requestServer('addPostComment', authorId, postId, text).then(({ res }) => {
    console.log(res);
    dispatch(setPostComments(res));
  });
};
