import type { StoreApi } from "zustand";
import type { RecipeStore } from "./types/storeTypes.ts";
import type { PlannedRecipe } from "../features/planning/types/planningTypes.ts";
import type { Ingredient } from "../features/recipes/types/recipeTypes.ts";

export const createPlannedRecipeAndIngredientsSlice = (
  get: StoreApi<RecipeStore>["getState"],
) => ({
  addRecipeAndIngredients: (
    plannedRecipe: PlannedRecipe,
    ingredients: Ingredient[],
  ) => {
    get().addPlannedRecipe(plannedRecipe);
    ingredients.forEach((ingredient, index) => {
      get().addPlannedIngredient({
        id: `${index}-${Date.now()}`,
        ingredient: ingredient.name,
        quantity: ingredient.quantity,
        fromRecipe: plannedRecipe.recipe.strMeal,
        fromRecipeId: plannedRecipe.recipe.idMeal,
        date: plannedRecipe.date,
      });
    });
  },
  updateRecipeAndIngredientsDate: (id: number, date: string) => {
    get().updatePlannedRecipe(id, { date });
    const recipe = get().plannedRecipes.find((recipe) => recipe.id === id);
    if (!recipe) return;
    get().updateAllIngredientsFromRecipe(recipe.recipe.idMeal, { date });
  },
  removeRecipeAndIngredients: (id: number) => {
    const recipe = get().plannedRecipes.find((recipe) => recipe.id === id);
    get().removePlannedRecipe(id);
    if (!recipe) {
      console.log("pas de recette")
      return
    };
    console.log(recipe)
    get().removeAllIngredientsFromRecipe(recipe.recipe.idMeal);
  },
});

export const selectAddRecipeAndIngredients = (state: RecipeStore) => state.addRecipeAndIngredients;
export const selectUpdateRecipeAndIngredientsDate = (state: RecipeStore) => state.updateRecipeAndIngredientsDate;
export const selectRemoveRecipeAndIngredients = (state: RecipeStore) => state.removeRecipeAndIngredients;
