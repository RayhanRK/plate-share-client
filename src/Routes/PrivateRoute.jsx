import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <span>Loading...</span>;

  if (!user) {
    return <Navigate to="/auth/login" state={location?.pathname} replace />;
  }
  return children;
};

export default PrivateRoute;
