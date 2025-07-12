import { setPostComments } from './setPostComments';

export const loadCommentsAsync = (requestServer, postId) => (dispatch) => {
  requestServer('fetchComments', postId).then(({ res }) =>
    dispatch(setPostComments(res)),
  );
};
