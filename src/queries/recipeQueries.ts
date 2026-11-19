import { queryOptions } from "@tanstack/react-query";
import {
  getCategoryRequest,
  getRecipeById,
  getRecipesByCategoryRequest,
  searchRecipeRequest,
} from "../features/recipes/utils/recipeApiRequests.ts";

export const recipeQueries = {
  getCategories: () =>
    queryOptions({
      queryKey: ["categories"],
      queryFn: getCategoryRequest,
    }),
  searchRecipes: (searchTerm: string) =>
    queryOptions({
      queryKey: ["recipes", "search", searchTerm],
      queryFn: () => searchRecipeRequest(searchTerm),
    }),
  getRecipesByCategory: (category: string) =>
    queryOptions({
      queryKey: ["recipes", "category", category],
      queryFn: () => getRecipesByCategoryRequest(category),
    }),
  getRecipeById: (id: string) =>
    queryOptions({
      queryKey: ["recipe", "id", id],
      queryFn: () => getRecipeById(id),
    }),
};
