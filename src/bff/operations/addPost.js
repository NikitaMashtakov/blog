import { ROLE } from '../constants';
import { sessions } from '../sessions';
import { createPost } from 'bff/api/createPost';

export const addPost = async (hash, newPostData) => {
  const accessRoles = [ROLE.ADMIN];

  const access = await sessions.access(hash, accessRoles);

  if (!access) {
    return {
      error: 'Access denied',
      res: null,
    };
  }

  const post = await createPost(newPostData);
  return {
    error: null,
    res: post,
  };
};
