import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage/HomePage";
import { ShoppingListPage } from "./pages/ShoppingListPage/ShoppingListPage";
import { RecipePage } from "./pages/RecipePage/RecipePage";
import { PlanningPage } from "./pages/PlanningPage/PlanningPage";
import { Header } from "./shared/components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main className="h-dvh w-dvw p-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shoppingList" element={<ShoppingListPage />} />
          <Route path="recipes/:idRecipe" element={<RecipePage />} />
          <Route path="planning" element={<PlanningPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
