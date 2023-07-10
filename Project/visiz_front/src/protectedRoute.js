import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const auth = localStorage.getItem("auth");
  return auth === "true" ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
