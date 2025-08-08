export const deleteUser = async (userId) =>
  fetch(`http://localhost:3000/users/${userId}`, {
    method: 'DELETE',
  });
