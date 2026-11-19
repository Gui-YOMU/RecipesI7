import { useQuery } from "@tanstack/react-query";
import { recipeQueries } from "../../../../queries/recipeQueries.ts";
import { LoadSpinner } from "../../../../shared/components/LoadSpinner/LoadSpinner.tsx";
import type { FilterSectionProps } from "../../types/recipeTypes.ts";

export const FilterSection = ({
  searchTerm,
  category,
  changeCategory,
}: FilterSectionProps) => {
  const { data: categories, isPending, isError } = useQuery(recipeQueries.getCategories());
  if (isPending) {return <LoadSpinner />}
  if (isError) {
    return <p className="text-red-600">Erreur dans le chargement des catégories</p>
  }
  if (categories) {
    return categories.length === 0 ? (<p>Pas de catégorie disponible</p>) : (
      <div className="border rounded-lg flex flex-col justify-center items-center gap-2 p-2">
        <h3>Filtrer par catégorie</h3>
        <ul className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <li key={cat.idCategory}>
              <button
                className={`border rounded-xl px-2 ${!searchTerm && category === cat.strCategory ? "border-blue-500 text-blue-500" : "border-gray-300 text-gray-700"}`}
                onClick={() => changeCategory(cat.strCategory)}
              >
                {cat.strCategory}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
