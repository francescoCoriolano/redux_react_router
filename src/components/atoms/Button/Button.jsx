import PropTypes from "prop-types";

const Theme = {
  Primary: "bg-green-700",
  Outline:
    "border-solid border-2 border-green-700 text-green-700 hover:text-green-100 duration-300",
  OutlineDanger:
    "border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-red-100 duration-300",
  Secondary: "bg-blue-600",
};
const Button = ({ text, onClick, variant = "Primary" }) => {
  return (
    <button
      type="button"
      className={`rounded-lg px-4 py-2 ${Theme[variant]} 
       text-green-100 hover:bg-green-800 duration-300`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string,
};

export default Button;
