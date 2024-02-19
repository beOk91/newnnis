import React from "react";
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  console.log(element);
  const { token } = useAuth();

  return token ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
