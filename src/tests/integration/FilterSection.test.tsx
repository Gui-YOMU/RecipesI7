import { it, expect, vi, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { FilterSection } from "../../features/recipes/components/FilterSection/FilterSection.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {server} from "../mocks/node.ts";
import { otherHandlers } from "../mocks/otherHandlers.ts";

vi.mock(
  "../../shared/components/LoadSpinner/LoadSpinner.tsx",
  () => ({
    LoadSpinner: () => <div role="status" />,
  }),
);

const createQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("Renders du composant", () => {
  it("should render a category list from the API", async () => {
    const queryClient = createQueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <FilterSection searchTerm="" category="" changeCategory={vi.fn()} />,
      </QueryClientProvider>,
    );
    expect(await screen.findByRole("button", {
        name: "Beef",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", {
        name: "Chicken",
      }),
    ).toBeInTheDocument();
  });

it("should display a spinner while fetching categories", async () => {
    const queryClient = createQueryClient();
    server.use(otherHandlers.delayed)
    render(
      <QueryClientProvider client={queryClient}>
        <FilterSection searchTerm="" category="" changeCategory={vi.fn()} />,
      </QueryClientProvider>,
    );
    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(await screen.findByRole("button", {
        name: "Beef",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", {
        name: "Chicken",
      }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });
});

