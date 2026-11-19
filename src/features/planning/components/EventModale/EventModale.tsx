import { MdOutlineDelete } from "react-icons/md";
import { useRecipeStore } from "../../../../store/useRecipeStore.ts";
import { selectRemoveRecipeAndIngredients } from "../../../../store/createPlannedRecipeAndIngredientsSlice.ts";
import type { EventModaleProps } from "../../types/planningTypes.ts";

export const EventModale = ({
  event,
  closeModal,
}: EventModaleProps) => {
const removeRecipeAndIngredients = useRecipeStore(selectRemoveRecipeAndIngredients);

  return event ? (
    <div className="flex flex-col items-center">
      <p>{event.event.title}</p>
      <button
        onClick={() => {
          removeRecipeAndIngredients(parseInt(event.event.id));
          closeModal();
        }}
      >
        <MdOutlineDelete size={24} color="red" />
      </button>
    </div>
  ) : (
    <p>Aucun événement sélectionné.</p>
  );
};
