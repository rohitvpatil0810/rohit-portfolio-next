"use client";

import { useState } from "react";
import NowTunedWidget from "./now-tuned-widget";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

type Props = {
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
};

export default function NowTunedFloating({ position = "bottom-right" }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const positionClasses = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-right": "top-20 right-4",
    "top-left": "top-20 left-4",
  };

  return (
    <div
      className={cn(
        "fixed z-40 transition-all duration-300",
        positionClasses[position]
      )}
    >
      <div className="relative">
        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute -top-8 right-0 bg-light-green bg-opacity-20 hover:bg-opacity-30 border border-light-green border-opacity-40 rounded-t-lg px-3 py-1 transition-all duration-200 flex items-center gap-1"
          aria-label={
            isExpanded ? "Collapse music widget" : "Expand music widget"
          }
        >
          <span className="text-xs text-light-green font-medium">
            Now Tuned
          </span>
          {isExpanded ? (
            <IconChevronDown className="w-4 h-4 text-light-green" />
          ) : (
            <IconChevronUp className="w-4 h-4 text-light-green" />
          )}
        </button>

        {/* Widget Content */}
        <div
          className={cn(
            "transition-all duration-300 overflow-hidden",
            isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <NowTunedWidget variant="full" />
        </div>

        {/* Compact View when collapsed */}
        {!isExpanded && (
          <div className="mt-2">
            <NowTunedWidget variant="compact" />
          </div>
        )}
      </div>
    </div>
  );
}
