import type { EventClickInfo } from "@fullcalendar/react";
import type { Recipe } from "../../recipes/types/recipeTypes";

export interface PlannedRecipe {
    id: number;
    recipe: Recipe;
    date: string;
}

export interface PlannedIngredient {
    id: string;
    ingredient: string;
    quantity: string;
    fromRecipeId: string;
    fromRecipe: string;
    date: string;
}

export interface EventModaleProps {
  event: EventClickInfo | null;
  closeModal: () => void;
}

export interface PlanningProps {
  events: PlannedRecipe[];
  openEventModal: () => void;
  selectEvent: React.Dispatch<React.SetStateAction<EventClickInfo | null>>;
}

export interface PlanningModaleProps {
  recipe: Recipe;
  closeModal: () => void;
}