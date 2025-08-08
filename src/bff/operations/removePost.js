import { ROLE } from './../constants';
import { sessions } from '../sessions';
import { deletePost } from 'bff/api/deletePost';
import { getComments } from 'bff/api/getComments';
import { deleteComment } from 'bff/api';

export const removePost = async (hash, postId) => {
  const accessRoles = [ROLE.ADMIN];

  const access = await sessions.access(hash, accessRoles);
  if (!access) {
    return {
      error: 'Access denied',
      res: null,
    };
  }

  await deletePost(postId);
  const comments = await getComments(postId);

  await Promise.all(comments.map(({ id }) => deleteComment(id)));

  return {
    error: null,
    res: true,
  };
};
