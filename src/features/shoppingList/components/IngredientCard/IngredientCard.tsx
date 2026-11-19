import { MdOutlineDelete } from "react-icons/md";
import type { PlannedIngredient } from "../../../planning/types/planningTypes";
import { LuSquarePen } from "react-icons/lu";
import { useRecipeStore } from "../../../../store/useRecipeStore";
import {
  selectRemovePlannedIngredient,
  selectUpdatePlannedIngredient,
} from "../../../../store/createPlannedIngredientsSlice";
import { useToggle } from "../../../../shared/hooks/useToggle";
import { Modal } from "../../../../shared/components/Modale/Modale";
import { UpdateIngredientForm } from "../UpdateIngredientForm/UpdateIngredientForm";

export const IngredientCard = ({
  plannedIngredient,
}: {
  plannedIngredient: PlannedIngredient;
}) => {
  const updateModal = useToggle();

  const removePlannedIngredient = useRecipeStore(selectRemovePlannedIngredient);
  const updatePlannedIngredient = useRecipeStore(selectUpdatePlannedIngredient);

  return (
    <>
      <article className="border rounded-lg w-full h-full p-2 flex flex-col items-center">
        <h3>{plannedIngredient.ingredient}</h3>
        <div className="flex flex-col items-center justify-around h-full">
          <p className="italic">{plannedIngredient.fromRecipe}</p>
          <p>{plannedIngredient.quantity}</p>
          <p>{plannedIngredient.date}</p>
        </div>
        <div className="flex justify-center items-center">
          <button onClick={updateModal.toggle}>
            <LuSquarePen size={24} color="orange" />
          </button>
          <button onClick={() => removePlannedIngredient(plannedIngredient.id)}>
            <MdOutlineDelete size={24} color="red" />
          </button>
        </div>
      </article>

      <Modal
        open={updateModal.isOn}
        onClose={updateModal.toggle}
        title="Modifier l'ingrédient"
      >
        <UpdateIngredientForm
          ingredient={plannedIngredient}
          onSubmit={updatePlannedIngredient}
          closeModal={() => updateModal.setIsOn(false)}
        />
      </Modal>
    </>
  );
};
