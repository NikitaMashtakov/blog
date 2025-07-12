export const createComment = async (authorId, postId, content) => {
  const publishedAt = new Date();
  return fetch('http://localhost:3000/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      author_id: authorId,
      post_id: postId,
      content,
      published_at: publishedAt.toISOString().substring(0, 16).replace('T', ' '),
    }),
  }).then((createdComment) => createdComment.json());
};
