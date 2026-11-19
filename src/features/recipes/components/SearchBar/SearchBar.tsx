import { IoSearchSharp } from "react-icons/io5";
import type { SearchBarProps } from "../../types/recipeTypes.ts";

export const SearchBar = ({ searchTerm, changeSearchTerm }: SearchBarProps) => {
  return (
    <div className="p-1 flex border rounded-lg items-center gap-2 w-3/5">
      <IoSearchSharp size={20} />
      <input
        className="w-full outline-none"
        type="text"
        placeholder="Rechercher..."
        value={searchTerm}
        onChange={(e) => changeSearchTerm(e.target.value)}
      />
    </div>
  );
};
