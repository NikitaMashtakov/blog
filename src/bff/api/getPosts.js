import { transformPost } from '../transformers';

export const getPosts = async (page, limit, search) =>
  fetch(`http://localhost:3000/posts?_page=${page}&_limit=${limit}&title_like=${search}`)
    .then(async (loadedPosts) => {
      const totalCount = Number(loadedPosts.headers.get('X-Total-Count'));
      console.log(typeof totalCount);
      const loaded = await loadedPosts.json();
      return { totalCount, loaded };
    })
    .then(({ totalCount, loaded }) => {
      console.log(totalCount, loaded);
      return (
        loaded && {
          totalCount,
          posts: loaded.map((post) => transformPost(post)),
        }
      );
    });
