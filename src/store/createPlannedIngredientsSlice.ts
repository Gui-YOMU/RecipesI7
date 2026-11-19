import type { StoreApi } from "zustand";
import type { RecipeStore } from "./types/storeTypes";
import type { PlannedIngredient } from "../features/planning/types/planningTypes";

export const createPlannedIngredientsSlice = (
  set: StoreApi<RecipeStore>["setState"],
) => ({
  plannedIngredients: [] as PlannedIngredient[],
  addPlannedIngredient: (plannedIngredient: PlannedIngredient) =>
    set((state) => ({
      plannedIngredients: [...state.plannedIngredients, plannedIngredient],
    })),
  removePlannedIngredient: (id: string) =>
    set((state) => ({
      plannedIngredients: state.plannedIngredients.filter(
        (plannedIngredient) => plannedIngredient.id !== id,
      ),
    })),
  updatePlannedIngredient: (
    id: string,
    updates: Partial<Pick<PlannedIngredient, "date" | "quantity">>,
  ) => {
    set((state) => ({
      plannedIngredients: state.plannedIngredients.map((ingredient) =>
        ingredient.id === id ? { ...ingredient, ...updates } : ingredient,
      ),
    }));
  },
  updateAllIngredientsFromRecipe: (
    id: string,
    updates: Partial<Pick<PlannedIngredient, "date">>,
  ) => {
    set((state) => ({
      plannedIngredients: state.plannedIngredients.map((ingredient) =>
        ingredient.fromRecipeId === id
          ? { ...ingredient, ...updates }
          : ingredient,
      ),
    }));
  },
  removeAllIngredientsFromRecipe: (id: string) => {
    console.log("Recette supprimée")
    set((state) => ({
      plannedIngredients: state.plannedIngredients.filter(
        (plannedIngredient) => plannedIngredient.fromRecipeId !== id,
      ),
    }));
  },
});

export const selectPlannedIngredients = (state: RecipeStore) => state.plannedIngredients;
export const selectAddPlannedIngredient = (state: RecipeStore) => state.addPlannedIngredient;
export const selectRemovePlannedIngredient = (state: RecipeStore) => state.removePlannedIngredient;
export const selectUpdatePlannedIngredient = (state: RecipeStore) => state.updatePlannedIngredient;
export const selectUpdateAllIngredientsFromRecipe = (state: RecipeStore) => state.updateAllIngredientsFromRecipe;
export const selectRemoveAllIngredientsFromRecipe = (state: RecipeStore) => state.removeAllIngredientsFromRecipe;
