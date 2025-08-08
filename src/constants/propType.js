import PropTypes from 'prop-types';
import { ROLE } from './role';

export const PROP_TYPE = {
  ROLE: PropTypes.oneOf(Object.values(ROLE)),
  ROLES: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.oneOf(Object.values(ROLE)), name: PropTypes.string }),
  ),
  ERROR: PropTypes.oneOfType([PropTypes.string, PropTypes.exact(null)]),
  COMMENT: PropTypes.shape({
    id: PropTypes.string,
    authorId: PropTypes.string,
    postId: PropTypes.string,
    content: PropTypes.string,
    publishedAt: PropTypes.string,
  }),
  POST: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    content: PropTypes.string,
    publishedAt: PropTypes.string,
  }),
  USER: PropTypes.shape({
    id: PropTypes.string,
    login: PropTypes.string,
    password: PropTypes.string,
    registeredAt: PropTypes.string,
    roleId: PropTypes.oneOf(Object.values(ROLE)),
  }),
};
