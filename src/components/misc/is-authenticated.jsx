import { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth.store";
import PropTypes from "prop-types";

export function IsAuthenticated({ children }) {
  const { isLoggedIn, token } = useAuthStore();

  if (!token && !isLoggedIn) {
    return <Navigate to={"/login"} replace />;
  }

  return <Fragment>{children}</Fragment>;
}

IsAuthenticated.propTypes = {
  children: PropTypes.any,
};
