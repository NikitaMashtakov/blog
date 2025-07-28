import { getComments } from 'bff/api/getComments';
import { getPosts } from '../api';
import { getCommentsCount } from 'bff/utils/getCommentsCount';

export const fetchPosts = async (page, limit, search) => {
  const [{ totalCount, posts }, comments] = await Promise.all([
    getPosts(page, limit, search),
    getComments(),
  ]);

  const postsWithCountedComments = posts.map((post) => ({
    ...post,
    commentsCount: getCommentsCount(comments, post.id),
  }));

  return {
    error: null,
    res: { posts: postsWithCountedComments, totalCount },
  };
};
