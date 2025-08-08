import { setPostComments } from './setPostComments';
import { setPostData } from './setPostData';

export const loadPostAsync = (requestServer, postId) => (dispatch) =>
  Promise.all([
    requestServer('fetchPost', postId),
    requestServer('fetchComments', postId),
  ]).then(([postRes, commentsRes]) => {
    if (postRes.res) {
      dispatch(setPostData(postRes.res));
      dispatch(setPostComments(commentsRes.res));
    }
    return postRes;
  });
