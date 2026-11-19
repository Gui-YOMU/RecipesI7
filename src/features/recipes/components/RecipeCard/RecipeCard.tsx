import type { Recipe } from "../../types/recipeTypes";
import { Link } from "react-router";

export const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <Link to={`/recipes/${recipe.idMeal}`}>
      <article className="border rounded-lg p-2">
        <div className="w-full h-4/5">
          <img
            className="w-full h-full object-contain"
            loading="lazy"
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
          />
        </div>
        <div className="flex justify-between items-center gap-1 py-2 h-1/5">
          <h3 className="text-center w-full text-sm">{recipe.strMeal}</h3>
        </div>
      </article>
    </Link>
  );
};
