import type { Ingredient, Recipe } from "../types/recipeTypes";

export const matchIngredientsAndQuantities = (recipe: Recipe): Ingredient[] => {
  const ingredientsList = [];
  for (let index = 1; index < 20; index++) {
    if (recipe[`strIngredient${index}` as keyof Recipe] !== "") {
      const newIngredient: Ingredient = {
        name: recipe[`strIngredient${index}` as keyof Recipe],
        quantity: recipe[`strMeasure${index}` as keyof Recipe],
      };
      ingredientsList.push(newIngredient);
    } else {
      break;
    }
  }
  return ingredientsList;
};
