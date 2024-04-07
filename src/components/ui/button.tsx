interface ButtonProps {
  onClick?: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button
      className="bg-light-green px-4 py-2 rounded-lg text-eerie-black font-semibold border-2 border-light-green hover:border-green-500"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
