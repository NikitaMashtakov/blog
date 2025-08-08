export const updatePost = async (postId, newPostData) =>
  fetch(`http://localhost:3000/posts/${postId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      title: newPostData.newTitle,
      image_url: newPostData.newImageUrl,
      content: newPostData.newContent,
    }),
  });
// .then((updatedUser) => updatedUser.json());
