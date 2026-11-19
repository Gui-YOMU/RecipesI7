import { http, HttpResponse } from "msw";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${apiUrl}/categories.php`, () => {
    return HttpResponse.json([
      {
        idCategory: "1",
        strCategory: "Beef",
      },
      {
        idCategory: "2",
        strCategory: "Chicken",
      },
    ]);
  }),

  http.get(`${apiUrl}/search.php?s=pasta`, () => {
    return HttpResponse.json([
      {
        strMeal: "Pâtes à la carbonara",
        strMealThumb: `${apiUrl}/images/media/meals/pates-carbonara.jpg`,
        idMeal: "1",
      },
      {
        strMeal: "Pâtes à la bolognaise",
        strMealThumb: `${apiUrl}/images/media/meals/pates-bolognaise.jpg`,
        idMeal: "2",
      },
    ]);
  }),

  http.get(`${apiUrl}/filter.php?c=beef`, () => {
    return HttpResponse.json([
      {
        strMeal: "Pâtes à la bolognaise",
        strMealThumb: `${apiUrl}/images/media/meals/pates-bolognaise.jpg`,
        idMeal: "2",
      },
      {
        strMeal: "Côte de boeuf",
        strMealThumb: `${apiUrl}/images/media/meals/cote-boeuf.jpg`,
        idMeal: "3",
      },
    ]);
  }),

  http.get(`${apiUrl}/lookup.php?i=2`, () => {
    return HttpResponse.json([
      {
        strMeal: "Pâtes à la bolognaise",
        strMealThumb: `${apiUrl}/images/media/meals/pates-bolognaise.jpg`,
        idMeal: "2",
      },
    ]);
  }),
];
