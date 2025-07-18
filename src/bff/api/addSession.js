export const addSession = (hash, userId, userLogin) => {
  return fetch('http://localhost:3000/sessions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      hash,
      user_id: userId,
      user_login: userLogin,
    }),
  });
};
