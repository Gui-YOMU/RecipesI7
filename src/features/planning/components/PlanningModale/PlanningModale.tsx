import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { matchIngredientsAndQuantities } from "../../../recipes/utils/recipeUtils";
import { useRecipeStore } from "../../../../store/useRecipeStore.ts";
import { selectAddRecipeAndIngredients } from "../../../../store/createPlannedRecipeAndIngredientsSlice.ts";
import type { PlanningModaleProps } from "../../types/planningTypes.ts";

export const PlanningModale = ({ recipe, closeModal }: PlanningModaleProps) => {
  const [planningDate, setPlanningDate] = useState<string>("");
  const addRecipeAndIngredients = useRecipeStore(selectAddRecipeAndIngredients);

  return (
    <form
      className="flex justify-center items-center gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        const ingredients = matchIngredientsAndQuantities(recipe);
        addRecipeAndIngredients({ id: Date.now(), recipe, date: planningDate }, ingredients)
        closeModal();
      }}
    >
      <input
        type="date"
        className="border rounded-lg p-1"
        value={planningDate}
        onChange={(e) => setPlanningDate(e.target.value)}
      />
      <button type="submit" className="border rounded-full p-2 bg-green-300">
        <FaPlus />
      </button>
    </form>
  );
};
