import { useSelector } from 'react-redux';
import { server } from 'bff';
import { selectUserHash } from 'selectors';
import { useCallback } from 'react';

export const useServerRequest = () => {
  const hash = useSelector(selectUserHash);

  return useCallback(
    (operation, ...params) => {
      const request = [
        'register',
        'authorize',
        'fetchPost',
        'fetchComments',
        'fetchPosts',
      ].includes(operation)
        ? params
        : [hash, ...params];

      return server[operation](...request);
    },
    [hash],
  );
};
