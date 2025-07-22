import { transformComment } from 'bff/transformers/transformComment';

const BASE_COMMENTS_URL = 'http://localhost:3000/comments';
const POST_COMMENTS_URL = 'http://localhost:3000/comments?post_id=';

export const getComments = async (postId = null) => {
  const url = postId ? POST_COMMENTS_URL + postId : BASE_COMMENTS_URL;
  // console.log('url', url);
  return fetch(url)
    .then((loadedComments) => loadedComments.json())
    .then((comments) => {
      console.log(comments.map((comment) => transformComment(comment)));
      return comments && comments.map((comment) => transformComment(comment));
    });
};
