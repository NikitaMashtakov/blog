export const editPostAsync = (requestServer, postId, newPostData) => () =>
  requestServer('editPost', postId, newPostData);
