import { useSelector } from 'react-redux';
import { server } from 'bff';
import { selectUserHash } from 'selectors';
import { useCallback } from 'react';

export const useServerRequest = () => {
  const hash = useSelector(selectUserHash);
  console.log('hook', hash);
  return useCallback(
    (operation, ...params) => {
      const request = ['register', 'authorize', 'fetchPost', 'fetchComments'].includes(
        operation,
      )
        ? params
        : [hash, ...params];

      return server[operation](...request);
    },
    [hash],
  );
};
