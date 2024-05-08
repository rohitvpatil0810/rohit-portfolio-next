import { cn } from "@/lib/utils";

interface LightGreenGlassMorphProps {
  children: React.ReactNode;
  className?: string;
}

const LightGreenGlassMorph: React.FC<LightGreenGlassMorphProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-light-green bg-opacity-20 backdrop-blur-lg border border-green-400",
        className
      )}
    >
      {children}
    </div>
  );
};

export default LightGreenGlassMorph;
