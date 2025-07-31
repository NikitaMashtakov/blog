import { ROLE } from 'constants';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectUserRole } from 'selectors';

const ProtectedRoute = ({ children, roles }) => {
  const location = useLocation();
  const role = useSelector(selectUserRole);

  if (role === ROLE.GUEST) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!roles.includes(user.role)) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <div>{children}</div>;
};

export default ProtectedRoute;
