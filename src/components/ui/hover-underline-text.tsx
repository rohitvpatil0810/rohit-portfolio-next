import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  underlineColor?: string;
  className?: string;
};

function HoverUnderlineText({ children, className, underlineColor }: Props) {
  return (
    <div
      className={cn(
        "text-xl font-semibold pt-2 pb-1 w-fit group text-white",
        className
      )}
    >
      {children}
      <div
        className={cn(
          "bg-white h-0.5 w-0 group-hover:w-full transition-all duration-500",
          underlineColor
        )}
      ></div>
    </div>
  );
}

export default HoverUnderlineText;
