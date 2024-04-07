interface GlassMorphProps {
  children: React.ReactNode;
  className?: string;
}

const GlassMorph: React.FC<GlassMorphProps> = ({ children, className }) => {
  const glassMorphClasses = `bg-white/20 bg-opacity-25 backdrop-blur-lg ${
    className || ""
  }`;

  return <div className={glassMorphClasses}>{children}</div>;
};

export default GlassMorph;
