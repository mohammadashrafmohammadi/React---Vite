import PropTypes from "prop-types";

export function Button({ disabled, label, size, ...rest }) {
  const buttons = {
    sm: (
      <button disabled={disabled} className="border border-black" {...rest}>
        {label}
      </button>
    ),
  };

  return <>{buttons[size] || ""}</>;
}

Button.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
