import PropTypes from "prop-types";
import "./input.css";

export default function Input({ size, label, value }) {
  return (
    <div>
      <label htmlFor="input">{label}</label>
      <input className={`input ${size}`} type="text" name="input">
        {value}
      </input>
    </div>
  );
}

Input.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
};
