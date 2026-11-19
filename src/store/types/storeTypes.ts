import type {
  PlannedIngredient,
  PlannedRecipe,
} from "../../features/planning/types/planningTypes";
import type { Ingredient } from "../../features/recipes/types/recipeTypes.ts";

export interface PlannedRecipeState {
  plannedRecipes: PlannedRecipe[];
  addPlannedRecipe: (plannedRecipe: PlannedRecipe) => void;
  removePlannedRecipe: (id: number) => void;
  updatePlannedRecipe: (
    id: number,
    updates: Partial<Pick<PlannedRecipe, "date">>,
  ) => void;
}

export interface PlannedIngredientState {
  plannedIngredients: PlannedIngredient[];
  addPlannedIngredient: (plannedIngredient: PlannedIngredient) => void;
  removePlannedIngredient: (id: string) => void;
  updatePlannedIngredient: (
    id: string,
    updates: Partial<Pick<PlannedIngredient, "date" | "quantity">>,
  ) => void;
  updateAllIngredientsFromRecipe: (
    id: string,
    updates: Partial<Pick<PlannedIngredient, "date">>,
  ) => void;
  removeAllIngredientsFromRecipe: (id: string) => void;
}

export interface PlannedRecipeAndIngredientsState {
  addRecipeAndIngredients: (
    plannedRecipe: PlannedRecipe,
    ingredients: Ingredient[],
  ) => void;
  updateRecipeAndIngredientsDate: (recipeId: number, date: string) => void;
  removeRecipeAndIngredients: (id: number) => void;
}

export type RecipeStore = PlannedRecipeState & PlannedIngredientState & PlannedRecipeAndIngredientsState;
