import Filter from "@/components/ui/filter";
import { IconArrowLeft } from "@tabler/icons-react";
import { Dispatch, SetStateAction } from "react";

type Props = {
  activeFilters: string[];
  filters: string[];
  setActiveFilters: Dispatch<SetStateAction<string[]>>;
};

const Navbar = ({ activeFilters, filters, setActiveFilters }: Props) => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50">
      <div className="my-4 py-2 sm:py-4 flex justify-between items-center mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-20 2xl:mx-40">
        <a href="/" className="flex justify-center items-center">
          <IconArrowLeft className="mr-2" />
          <h1 className="text-xl sm:text-2xl">Projects</h1>
        </a>
        <Filter
          activeFilters={activeFilters}
          filters={filters}
          setActiveFilters={setActiveFilters}
        />
      </div>
    </nav>
  );
};

export default Navbar;
