import { http, HttpResponse, delay } from "msw";

const apiUrl = import.meta.env.VITE_API_URL;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
};

export const otherHandlers = {
  delayed: http.get(`${apiUrl}/categories.php`, async () => {
    await delay(200);

    return HttpResponse.json(
      {
        categories: [
          { idCategory: "1", strCategory: "Beef" },
          { idCategory: "2", strCategory: "Chicken" },
        ],
      },
      { headers: corsHeaders },
    );
  }),

  empty: http.get(`${apiUrl}/categories.php`, () => {
    return HttpResponse.json(
      { categories: [] },
      { headers: corsHeaders },
    );
  }),

  error: http.get(`${apiUrl}/categories.php`, () => {
    return HttpResponse.json(
      { message: "Internal Server Error" },
      {
        status: 500,
        headers: corsHeaders,
      },
    );
  }),
};