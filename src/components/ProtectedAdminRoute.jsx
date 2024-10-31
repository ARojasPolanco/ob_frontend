import PropTypes from "prop-types";

import { Navigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

const ProtectedAdminRoute = ({ children }) => {
  const { isAdmin } = useAuthStore();

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

ProtectedAdminRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedAdminRoute;
