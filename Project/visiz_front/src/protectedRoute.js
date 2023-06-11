import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  console.log("ProtectedRoute");
  const auth = localStorage.getItem("auth");
  return auth === "true" ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
