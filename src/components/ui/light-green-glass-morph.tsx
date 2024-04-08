interface LightGreenGlassMorphProps {
  children: React.ReactNode;
  className?: string;
}

const LightGreenGlassMorph: React.FC<LightGreenGlassMorphProps> = ({
  children,
  className,
}) => {
  const glassMorphClasses = `bg-light-green bg-opacity-20 backdrop-blur-lg border border-green-400 ${
    className || ""
  }`;

  return <div className={glassMorphClasses}>{children}</div>;
};

export default LightGreenGlassMorph;
