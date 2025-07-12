import { getUsers } from 'bff/api';
import { getComments } from 'bff/api/getComments';

export const fetchComments = async (postId) => {
  const comments = await getComments(postId);
  const users = await getUsers();
  console.log(users);

  const commentsWithUsers = comments.map((comment) => {
    console.log(comment);
    const user = users.find(({ id }) => id === comment.authorId);
    console.log(user);

    return { ...comment, authorId: user?.login };
  });
  return {
    error: null,
    res: commentsWithUsers,
  };
};
