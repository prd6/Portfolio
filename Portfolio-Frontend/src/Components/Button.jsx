import { FaArrowRight } from "react-icons/fa";

const Button = ({ type = "submit", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="submit-button
      flex items-center gap-3 border-2 border-black px-6 py-3 rounded-lg"
    >
      Send <FaArrowRight/>
    </button>
  );
};

export default Button;