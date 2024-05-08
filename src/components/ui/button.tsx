import { cn } from "@/lib/utils";

interface ButtonProps {
  onClick?: () => void;
  text: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, className }) => {
  return (
    <button
      className={cn(
        "bg-light-green px-4 py-2 rounded-lg text-eerie-black font-semibold border-2 border-light-green hover:border-green-500",
        className
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
