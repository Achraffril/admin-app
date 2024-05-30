import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const PrivateRoute = () => {
  const user = useAuth();
  if (!user.token && user.user) return <Navigate to="/panel/login" />;
  return (
    <>
    <Outlet />
    </>
  );
};

export default PrivateRoute;