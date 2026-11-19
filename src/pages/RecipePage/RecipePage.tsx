import { useParams } from "react-router";
import { Modal } from "../../shared/components/Modale/Modale";
import { PlanningModale } from "../../features/planning/components/PlanningModale/PlanningModale";
import { useToggle } from "../../shared/hooks/useToggle";
import { FaPlus } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { recipeQueries } from "../../queries/recipeQueries.ts";
import { LoadSpinner } from "../../shared/components/LoadSpinner/LoadSpinner.tsx";

export const RecipePage = () => {
  const { idRecipe } = useParams<{ idRecipe: string }>();

  const modal = useToggle();

  const {
    data: recipe,
    isLoading,
    isError,
  } = useQuery(recipeQueries.getRecipeById(idRecipe ? idRecipe : "-1"));

  if (isLoading) {
    return <LoadSpinner />;
  }
  if (isError) {
    return (
      <p className="text-red-600">Erreur dans le chargement de la recette</p>
    );
  }
  return recipe ? (
    <>
      <section className="flex flex-col items-center gap-4 h-fit">
        <h2 className="text-2xl font-bold">{recipe.strMeal}</h2>
        <button
          className="border rounded-lg py-2 px-2 text-sm"
          onClick={modal.toggle}
        >
          <FaPlus />
        </button>
        <div className="w-4/5 flex flex-col justify-center items-center gap-6">
          <div className="w-full sm:w-1/2">
            <img
              className="w-full h-full object-contain"
              loading="lazy"
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
            />
          </div>
          <div className="self-start w-full h-full">
            <h3 className="text-center font-bold">Liste des ingrédients</h3>
            <ul>
              {Object.entries(recipe)
                .filter(
                  ([key, value]) => key.startsWith("strIngredient") && value,
                )
                .map(([key, value]) => (
                  <li className="list-disc ml-4" key={key}>
                    {value}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
      <Modal
        open={modal.isOn}
        onClose={modal.toggle}
        title="Ajouter au planning"
      >
        <PlanningModale
          recipe={recipe}
          closeModal={() => modal.setIsOn(false)}
        />
      </Modal>
      ;
    </>
  ) : (
    <p>Pas de recette sélectionnée</p>
  );
};
