import PropTypes from "prop-types";

export function Button({ disabled, onClick, label, size, ...rest }) {
  //   console.log(props);

  const buttons = {
    sm: (
      <button
        className="border border-black"
        disabled={disabled}
        onClick={onClick}
        {...rest}
      >
        {label} sm
      </button>
    ),
    md: (
      <button
        className="border border-black"
        disabled={disabled}
        onClick={onClick}
        {...rest}
      >
        {label} md
      </button>
    ),
    lg: (
      <button
        className="border border-black"
        disabled={disabled}
        onClick={onClick}
        {...rest}
      >
        {label} lg
      </button>
    ),
  };

  return <>{buttons[size] || ""}</>;
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

// ! video 4 - 23:30
// TODO new lecture
