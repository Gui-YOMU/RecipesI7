import { apiRequest } from "../../../shared/utils/axios.ts";
import type { Category, Recipe } from "../types/recipeTypes.ts";

export const getCategoryRequest = () =>
  apiRequest
    .get<{ categories: Category[] }>("/categories.php")
    .then((res) => res.data.categories);

export const searchRecipeRequest = (searchTerm: string) =>
  apiRequest.get<{ meals: Recipe[] }>(`/search.php?s=${searchTerm}`).then((res) => res.data.meals);

export const getRecipesByCategoryRequest = (category: string) =>
  apiRequest.get<{ meals: Recipe[] }>(`/filter.php?c=${category}`).then((res) => res.data.meals);

export const getRecipeById = (id: string) =>
  apiRequest.get<{ meals: Recipe[] }>(`/lookup.php?i=${id}`).then((res) => res.data.meals[0]);
