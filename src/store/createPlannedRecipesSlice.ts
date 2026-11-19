import type { StoreApi } from "zustand";
import type { RecipeStore } from "./types/storeTypes";
import type { PlannedRecipe } from "../features/planning/types/planningTypes";

export const createPlannedRecipesSlice = (
  set: StoreApi<RecipeStore>["setState"],
) => ({
  plannedRecipes: [] as PlannedRecipe[],
  addPlannedRecipe: (plannedRecipe: PlannedRecipe) =>
    set((state) => ({
      plannedRecipes: [...state.plannedRecipes, plannedRecipe],
    })),
  removePlannedRecipe: (id: number) =>
    set((state) => ({
      plannedRecipes: state.plannedRecipes.filter(
        (plannedRecipe) => plannedRecipe.id !== id,
      ),
    })),
  updatePlannedRecipe: (
    id: number,
    updates: Partial<Pick<PlannedRecipe, "date">>,
  ) => {
    set((state) => ({
      plannedRecipes: state.plannedRecipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updates } : recipe,
      ),
    }));
  },
});

export const selectPlannedRecipes = (state: RecipeStore) => state.plannedRecipes;
export const selectAddPlannedRecipe = (state: RecipeStore) => state.addPlannedRecipe;
export const selectRemovePlannedRecipe = (state: RecipeStore) => state.removePlannedRecipe;
export const selectUpdatePlannedRecipe = (state: RecipeStore) => state.updatePlannedRecipe;
