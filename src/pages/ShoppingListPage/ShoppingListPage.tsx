import { useEffect } from "react";
import { IngredientCard } from "../../features/shoppingList/components/IngredientCard/IngredientCard";
import { compareDates } from "../../shared/utils/dateUtils";
import { selectPlannedIngredients } from "../../store/createPlannedIngredientsSlice";
import { useRecipeStore } from "../../store/useRecipeStore";

export const ShoppingListPage = () => {
  const plannedIngredients = useRecipeStore(selectPlannedIngredients);

  useEffect(() => {

  }, [plannedIngredients])
  
  return (
    <>
      <h2 className="text-center text-2xl">Ma liste de courses</h2>
      {plannedIngredients.length === 0 ? (
        <p className="text-center mt-4">Aucun ingrédient planifié.</p>
      ) : (
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
          {plannedIngredients
            .toSorted((a, b) => compareDates(a.date, b.date))
            .map((plannedIngredient) => (
              <IngredientCard
                key={plannedIngredient.id}
                plannedIngredient={plannedIngredient}
              />
            ))}
        </section>
      )}
    </>
  );
};
