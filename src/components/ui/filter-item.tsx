"use client";
import { Dispatch, SetStateAction } from "react";
import LightGreenGlassMorph from "./light-green-glass-morph";
import { IconCheck } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

type Props = {
  filterName: string;
  isSelected: boolean;
  setActiveFilters: Dispatch<SetStateAction<string[]>>;
};

const FilterItem = ({ filterName, isSelected, setActiveFilters }: Props) => {
  const toggleSelection = () => {
    setActiveFilters((prevFilters) => {
      if (prevFilters.includes(filterName)) {
        // If the filter is already selected, remove it from the array
        return prevFilters.filter((filter) => filter !== filterName);
      } else {
        // If the filter is not selected, add it to the array
        return [...prevFilters, filterName];
      }
    });
  };

  return (
    <button onClick={toggleSelection} className="mt-2 mr-4">
      <LightGreenGlassMorph
        className={cn(
          "rounded-full px-2 py-0.5 flex justify-center items-center",
          { "bg-orange-web border-orange-400": isSelected }
        )}
      >
        {isSelected && <IconCheck size={18} className="mr-2" />}
        {filterName}
      </LightGreenGlassMorph>
    </button>
  );
};

export default FilterItem;
