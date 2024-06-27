import { cn } from "@/lib/utils";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  type,
}) => {
  return (
    <button
      className={cn(
        "bg-light-green px-4 py-2 rounded-lg text-eerie-black font-semibold border-2 border-light-green hover:bounce-up",
        className
      )}
      onClick={onClick}
      type={type || "button"}
    >
      {children}
    </button>
  );
};

export default Button;
