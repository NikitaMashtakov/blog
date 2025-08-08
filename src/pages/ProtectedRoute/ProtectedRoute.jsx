import { PROP_TYPE } from 'constants';
import { ROLE } from 'constants';
import { ErrorPage } from 'pages/ErrorPage/ErrorPage';
import PropTypes, { arrayOf } from 'prop-types';
import { useSelector } from 'react-redux';
import { selectUserRole } from 'selectors';

const ProtectedRoute = ({ children, roles }) => {
  const role = useSelector(selectUserRole);

  if (role === ROLE.GUEST) {
    return <ErrorPage message="Доступ запрещен" />;
  }

  if (!roles.includes(role)) {
    return <ErrorPage message="Доступ запрещен" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.object.isRequired,
  roles: arrayOf(PROP_TYPE.ROLE).isRequired,
};
