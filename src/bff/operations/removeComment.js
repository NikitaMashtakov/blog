import { ROLE } from './../constants';
import { sessions } from '../sessions';
import { deleteComment } from 'bff/api/deleteComment';
import { fetchComments } from './fetchComments';

export const removeComment = async (hash, commentId, postId) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];

  const access = await sessions.access(hash, accessRoles);
  if (!access) {
    return {
      error: 'Access denied',
      res: null,
    };
  }

  await deleteComment(commentId);
  const comments = await fetchComments(postId);

  return {
    error: null,
    res: comments.res,
  };
};
