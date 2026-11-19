import { http, HttpResponse } from "msw";

const apiUrl = import.meta.env.VITE_API_URL;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
};

export const successHandlers = [
  http.get(`${apiUrl}/categories.php`, () => {
    return HttpResponse.json(
      {
        categories: [
          {
            idCategory: "1",
            strCategory: "Beef",
          },
          {
            idCategory: "2",
            strCategory: "Chicken",
          },
        ],
      },
      { headers: corsHeaders },
    );
  }),
];
