import { transformComments } from 'bff/transformers/transformComments';

export const getComments = async (postId) =>
  fetch(`http://localhost:3000/comments?post_id=${postId}`)
    .then((loadedComments) => loadedComments.json())
    .then((comments) => comments && transformComments(comments));
