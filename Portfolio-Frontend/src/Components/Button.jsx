import { FaArrowRight } from "react-icons/fa";

const Button = ({ type = "submit", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="submit-button
      flex items-center gap-3 md:p-2"
    >
      Send <FaArrowRight/>
    </button>
  );
};

export default Button;