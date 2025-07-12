import { ROLE } from '../constants';
import { sessions } from '../sessions';
import { createComment } from 'bff/api/createComment';
import { fetchComments } from './fetchComments';

export const addPostComment = async (hash, authorId, postId, content) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

  if (!sessions.access(hash, accessRoles)) {
    return {
      error: 'Access denied',
      res: null,
    };
  }

  await createComment(authorId, postId, content);
  const allComments = await fetchComments(postId);

  return {
    error: null,
    res: allComments.res,
  };
};
