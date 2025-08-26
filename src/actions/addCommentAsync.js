import { request } from 'utils/request';
import { addComment } from './addComment';

export const addCommentAsync = (postId, text) => (dispatch) => {
  request(`/api/posts/${postId}/comments`, { text }).then(({ res }) => {
    dispatch(addComment(res));
  });
};
