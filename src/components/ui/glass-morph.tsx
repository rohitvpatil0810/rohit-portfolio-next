import { cn } from "@/lib/utils";

interface GlassMorphProps {
  children: React.ReactNode;
  className?: string;
}

const GlassMorph: React.FC<GlassMorphProps> = ({ children, className }) => {
  return (
    <div
      className={cn("bg-white/20 bg-opacity-25 backdrop-blur-lg", className)}
    >
      {children}
    </div>
  );
};

export default GlassMorph;
