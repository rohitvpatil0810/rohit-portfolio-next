import React from "react";
import LightGreenGlassMorph from "./light-green-glass-morph";

type Props = {
  children: React.ReactNode;
};

function Chip({ children }: Props) {
  return (
    <LightGreenGlassMorph className="mr-3 my-1 text-xs font-normal px-2 py-1 rounded-full">
      {children}
    </LightGreenGlassMorph>
  );
}

export default Chip;
