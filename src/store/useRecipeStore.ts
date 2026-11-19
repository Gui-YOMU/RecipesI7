import { create } from "zustand";
import { createPlannedIngredientsSlice } from "./createPlannedIngredientsSlice";
import { createPlannedRecipesSlice } from "./createPlannedRecipesSlice";
import { devtools, persist } from "zustand/middleware";
import type { RecipeStore } from "./types/storeTypes";
import { createPlannedRecipeAndIngredientsSlice } from "./createPlannedRecipeAndIngredientsSlice.ts";

export const useRecipeStore = create<RecipeStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...createPlannedRecipesSlice(set),
        ...createPlannedIngredientsSlice(set),
        ...createPlannedRecipeAndIngredientsSlice(get)
      }),
      { name: "RecipesI7-store" },
    ),
  ),
);
