import { useState } from "react";
import { FilterSection } from "../../features/recipes/components/FilterSection/FilterSection";
import { RecipeCard } from "../../features/recipes/components/RecipeCard/RecipeCard";
import { SearchBar } from "../../features/recipes/components/SearchBar/SearchBar";
import { useQuery } from "@tanstack/react-query";
import { recipeQueries } from "../../queries/recipeQueries.ts";
import { LoadSpinner } from "../../shared/components/LoadSpinner/LoadSpinner.tsx";

export const HomePage = () => {
  const [category, setCategory] = useState<string>("Beef");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const {
    data: searchData,
    isLoading: isSearchLoading,
    isError: isSearchError,
  } = useQuery(recipeQueries.searchRecipes(searchTerm));
  const {
    data: categoryData,
    isLoading: isCategoryLoading,
    isError: isCategoryError,
  } = useQuery(recipeQueries.getRecipesByCategory(category));

  const isSearching = searchTerm.trim().length > 0;

  const isRecipesLoading = isSearching ? isSearchLoading : isCategoryLoading;
  const isRecipesError = isSearching ? isSearchError : isCategoryError;
  const recipesList = isSearching ? (searchData ?? []) : (categoryData ?? []);

  return (
    <section className="flex flex-col justify-center items-center gap-3">
      <h2 className="text-center text-2xl">Liste des recettes</h2>
      <SearchBar searchTerm={searchTerm} changeSearchTerm={setSearchTerm} />
      <FilterSection
        searchTerm={searchTerm}
        category={category}
        changeCategory={setCategory}
      />
      {isRecipesLoading ? (
        <LoadSpinner />
      ) : isRecipesError ? (
        <p className="text-red-600">Erreur dans le chargement des recettes</p>
      ) : recipesList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recipesList.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p>Aucune recette trouvée</p>
      )}
    </section>
  );
};
