import { ROLE } from './../constants';
import { sessions } from '../sessions';
import { updatePost } from 'bff/api';

export const editPost = async (hash, postId, newPostData) => {
  const accessRoles = [ROLE.ADMIN];

  const access = await sessions.access(hash, accessRoles);
  if (!access) {
    return {
      error: 'Access denied',
      res: null,
    };
  }

  await updatePost(postId, newPostData);

  return {
    error: null,
    res: true,
  };
};
