import { test, it, expect, vi, afterEach, describe } from "vitest";
import { render, fireEvent, screen, within } from "@testing-library/react";
import { FilterSection } from "./FilterSection.tsx";
import { useQuery } from "@tanstack/react-query";

vi.mock("@tanstack/react-query", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@tanstack/react-query")>();

  return {
    ...actual,
    useQuery: vi.fn(),
  };
});

vi.mock("../../../../shared/components/LoadSpinner/LoadSpinner.tsx", () => ({
  LoadSpinner: () => <div role="status" />,
}));

afterEach(() => {
  vi.resetAllMocks();
});

describe("Renders du composant", () => {
  it("should render a spinner if pending", () => {
    vi.mocked(useQuery).mockReturnValue({
      data: undefined,
      isPending: true,
      isError: false,
    } as ReturnType<typeof useQuery>);

    render(
      <FilterSection searchTerm="" category="" changeCategory={vi.fn()} />,
    );
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("should render an error paragraph if error", () => {
    vi.mocked(useQuery).mockReturnValue({
      data: undefined,
      isPending: false,
      isError: true,
    } as ReturnType<typeof useQuery>);

    render(
      <FilterSection searchTerm="" category="" changeCategory={vi.fn()} />,
    );
    expect(screen.getByRole("paragraph")).toHaveTextContent(
      "Erreur dans le chargement des catégories",
    );
  });

  it("should render an empty paragraph if empty result", () => {
    vi.mocked(useQuery).mockReturnValue({
      data: [],
      isPending: false,
      isError: false,
    } as ReturnType<typeof useQuery>);

    render(
      <FilterSection searchTerm="" category="" changeCategory={vi.fn()} />,
    );
    expect(screen.getByRole("paragraph")).toHaveTextContent(
      "Pas de catégorie disponible",
    );
  });

  it("should render a category list if not empty result", () => {
    vi.mocked(useQuery).mockReturnValue({
      data: [{ idCategory: "1", strCategory: "Beef" }],
      isPending: false,
      isError: false,
    } as ReturnType<typeof useQuery>);

    render(
      <FilterSection searchTerm="" category="" changeCategory={vi.fn()} />,
    );
    expect(screen.getByRole("heading")).toHaveTextContent(
      "Filtrer par catégorie",
    );
    expect(screen.getByRole("listitem")).toBeInTheDocument();
    expect(
      within(screen.getByRole("listitem")).getByRole("button", {
        name: "Beef",
      }),
    ).toBeInTheDocument();
  });
});

test("category selection on click", () => {
  vi.mocked(useQuery).mockReturnValue({
    data: [{ idCategory: "1", strCategory: "Beef" }],
    isPending: false,
    isError: false,
  } as ReturnType<typeof useQuery>);

  const setCategory = vi.fn();

  render(
    <FilterSection searchTerm="" category="" changeCategory={setCategory} />,
  );
  fireEvent.click(screen.getByRole("button", { name: "Beef" }));
  expect(setCategory).toHaveBeenCalledWith("Beef");
});
