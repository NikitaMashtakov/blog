import { transformSession } from '../transformers';

export const getSession = async (hash) =>
  fetch(`http://localhost:3000/sessions?hash=${hash}`)
    .then((loadedSession) => {
      return loadedSession.json();
    })
    .then(([session]) => session && transformSession(session));
