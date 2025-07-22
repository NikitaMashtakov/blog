import { getComments } from 'bff/api/getComments';
import { getPosts } from '../api';
import { getCommentsCount } from 'bff/utils/getCommentsCount';

export const fetchPosts = async () => {
  const [posts, comments] = await Promise.all([getPosts(), getComments()]);

  const postsWithCountedComments = posts.map((post) => ({
    ...post,
    commentsCount: getCommentsCount(comments, post.id),
  }));

  return {
    error: null,
    res: postsWithCountedComments,
  };
};
