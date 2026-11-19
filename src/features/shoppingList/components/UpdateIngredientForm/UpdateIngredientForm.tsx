import { useState } from "react";
import type { UpdateIngredientFormProps } from "../../types/shoppingListTypes.ts";

export const UpdateIngredientForm = ({ingredient, onSubmit, closeModal}: UpdateIngredientFormProps) => {
  const [quantity, setQuantity] = useState<string>(ingredient.quantity);
  const [date, setDate] = useState<string>(ingredient.date);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedIngredient = {...ingredient, quantity, date}
    onSubmit(ingredient.id, updatedIngredient);
    closeModal()
  };

  return (
    <form className="flex flex-col gap-4 p-2" onSubmit={handleSubmit}>
      <div className="flex justify-between">
        <label htmlFor="quantity">Modifier la quantité</label>
        <input
        className="w-1/2 border rounded-lg pl-2"
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div className="flex justify-between">
        <label htmlFor="date">Modifier la date</label>
        <input
        className="w-1/2 border rounded-lg pl-2"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button className="border rounded-lg w-fit px-2 bg-orange-300 self-center">Modifier</button>
    </form>
  );
};
