import React from "react";
import { render, screen } from "@testing-library/react";

import PokemonCard from "../../components/PokemonCard/PokemonCard";
import User from "../../assets/images/avatar.png";

const testItem = {
  id: 1,
  name: "bulbasour",
  sprites: {
    other: {
      "official-artwork": { User },
    },
  },
  types: [{ slot: 0, type: { name: "grass" } }],
};

beforeEach(() => {
  render(<PokemonCard pokemon={testItem} />);
});

describe("Pokemon Card", () => {
  it("renders title and image", () => {
    const titleElement = screen.getByText(testItem.name);
    const imageElement = screen.getByRole("img");

    expect(titleElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });
});
