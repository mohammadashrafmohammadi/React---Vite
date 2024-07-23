import { Fragment } from "react";
import PropTypes from "prop-types";

export function DashboardLayout({ children }) {
  return (
    <Fragment>
      <h1>Dashboard Layout</h1>
      {children}
      <h1>End dashboard Layout</h1>
    </Fragment>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.any,
};
