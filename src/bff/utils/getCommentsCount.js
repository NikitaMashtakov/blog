export const getCommentsCount = (comments, postId) =>
  comments.filter(({ postId: id }) => id === postId).length;
