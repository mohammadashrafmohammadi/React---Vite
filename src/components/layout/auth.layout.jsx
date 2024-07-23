import { Fragment } from "react";
import PropTypes from "prop-types";

export function AuthLayout({ children }) {
  return (
    <Fragment>
      <h1>Auth Layout</h1>
      {children}
      <h1>End Auth Layout</h1>
    </Fragment>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.any,
};
