export const transformComments = (dbComments) =>
  dbComments.map((comment) => ({
    id: comment.id,
    authorId: comment.author_id,
    postId: comment.post_id,
    content: comment.content,
    publishedAt: comment.published_at,
  }));
