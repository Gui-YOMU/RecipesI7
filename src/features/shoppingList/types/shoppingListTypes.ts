import type { PlannedIngredient } from "../../planning/types/planningTypes.ts";

export interface UpdateIngredientFormProps {
    ingredient: PlannedIngredient;
    onSubmit: (id: string, updatedIngredient: PlannedIngredient) => void;
    closeModal: () => void;
}