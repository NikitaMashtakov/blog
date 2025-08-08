import { transformPost } from '../transformers';

export const getPost = async (postId) =>
  fetch(`http://localhost:3000/posts/${postId}`)
    .then((res) => {
      if (res.ok) {
        return res;
      }
      const error =
        res.status === 404
          ? 'Страница не существует'
          : 'Что-то пошло не так, попробуйте позже';

      return Promise.reject(error);
    })
    .then((loadedPost) => loadedPost.json())
    .then((post) => post && transformPost(post));
