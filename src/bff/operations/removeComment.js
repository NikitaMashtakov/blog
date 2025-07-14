import { ROLE } from './../constants';
import { sessions } from '../sessions';
import { deleteComment } from 'bff/api/deleteComment';
import { fetchComments } from './fetchComments';

export const removeComment = async (_, commentId, postId) => {
  // const accessRoles = [ROLE.ADMIN,];

  // if (!sessions.access(hash, accessRoles)) {
  //   return {
  //     error: 'Access denied',
  //     res: null,
  //   };
  // }

  await deleteComment(commentId);
  const comments = await fetchComments(postId);

  return {
    error: null,
    res: comments.res,
  };
};
