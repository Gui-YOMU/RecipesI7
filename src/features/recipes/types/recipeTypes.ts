export interface Category {
  idCategory: string;
  strCategory: string;
}

export interface Recipe {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export interface Ingredient {
  name: string;
  quantity: string;
}

export interface FilterSectionProps {
  searchTerm: string;
  category: string;
  changeCategory: (category: string) => void;
}

export interface SearchBarProps {
  searchTerm: string;
  changeSearchTerm: (searchTerm: string) => void;
}