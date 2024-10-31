import PropTypes from "prop-types";

const Button = ({
  children,
  onClick = () => {},
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
}) => {
  const baseStyles =
    "font-normal px-8 focus:outline-none focus:ring-2 focus:ring-offset-2 w-full";

  const variantStyles = {
    primary:
      "bg-white border-2 border-menu-color hover:bg-blue-gradient hover:text-primary-200 text-menu-color rounded-full",
    secondary: "bg-blue-gradient text-white hover:bg-menu-color rounded-full",
  };

  const sizeStyles = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
};

// Validación de PropTypes
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["login", "register"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disabled: PropTypes.bool,
};

export default Button;
