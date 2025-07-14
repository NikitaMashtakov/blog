import { getUsers } from 'bff/api';
import { getComments } from 'bff/api/getComments';

export const fetchComments = async (postId) => {
  const comments = await getComments(postId);
  const users = await getUsers();

  const commentsWithUsers = comments.map((comment) => {
    const user = users.find(({ id }) => id === comment.authorId);

    return { ...comment, authorLogin: user?.login };
  });
  return {
    error: null,
    res: commentsWithUsers,
  };
};
