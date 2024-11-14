"use client";
import { IconFilter, IconX } from "@tabler/icons-react";
import { Dispatch, SetStateAction, useState } from "react";
import LightGreenGlassMorph from "./light-green-glass-morph";
import { cn } from "@/lib/utils";
import FilterItem from "./filter-item";
import GlassMorph from "./glass-morph";

type Props = {
  filters: string[];
  activeFilters: string[];
  setActiveFilters: Dispatch<SetStateAction<string[]>>;
};

const Filter = ({ filters, activeFilters, setActiveFilters }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        <LightGreenGlassMorph
          className={cn(
            "flex justify-center items-center px-2 py-1 rounded-lg",
            {
              "bg-orange-web border-orange-400": isOpen,
            }
          )}
        >
          <IconFilter size={16} className="mr-2" />
          <span>Filter</span>
          {activeFilters.length > 0 && (
            <span className="ml-2 bg-white text-charcoal-black text-sm font-semibold p-0.5 rounded-full w-6 h-fit">
              {activeFilters.length}
            </span>
          )}
          {isOpen && <IconX size={18} className="ml-2" />}
        </LightGreenGlassMorph>
      </button>
      <GlassMorph
        className={cn(
          "bg-charcoal-black/50 px-2 pt-1 pb-2 rounded-lg border border-gray-600 fixed top-20 z-[60] w-11/12 sm:w-2/3 lg:w-1/3 flex flex-wrap right-4 sm:right-6 md:right-8 lg:right-10 xl:right-20 2xl:right-40",
          {
            "hidden ": !isOpen,
          }
        )}
      >
        {filters.map((filter) => (
          <FilterItem
            key={filter}
            filterName={filter}
            isSelected={activeFilters.includes(filter)}
            setActiveFilters={setActiveFilters}
          />
        ))}
      </GlassMorph>
    </>
  );
};

export default Filter;
