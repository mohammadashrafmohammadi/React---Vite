import { Fragment } from "react";
import propTypes from "prop-types";

export function Input({ label, ...rest }) {
  return (
    <Fragment>
      {label} <input {...rest} />
    </Fragment>
  );
}

Input.propTypes = {
  label: propTypes.string.isRequired,
};
