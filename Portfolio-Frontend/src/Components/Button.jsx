const Button = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-3 border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-300"
    >
      Send
    </button>
  );
};

export default Button;