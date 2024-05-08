import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

function SectionHeader({ className = "", children }: Props) {
  return (
    <div
      className={cn(
        "text-sm px-4 py-2 border-2 border-light-green rounded-md w-fit font-semibold text-light-green",
        className
      )}
    >
      {children}
    </div>
  );
}

export default SectionHeader;
