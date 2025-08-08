import { transformPost } from 'bff/transformers';

export const createPost = async (newPostData) => {
  const publishedAt = new Date();
  return fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      title: newPostData.newTitle,
      image_url: newPostData.newImageUrl,
      content: newPostData.newContent,
      published_at: publishedAt.toISOString().substring(0, 16).replace('T', ' '),
    }),
  })
    .then((createdPost) => createdPost.json())
    .then((post) => {
      return post && transformPost(post);
    });
};
