import { cleanup } from "@testing-library/react";

import {
  getData,
  changeSearch,
  toggleSidebar,
  LOAD_DATA_POKEMONS,
  CHANGE_SEARCH,
  TOGGLE_SIDEBAR_POKEMONS,
} from "../../redux/ducks/pokemons";

afterEach(cleanup);

describe("Global duck", () => {
  it("getData", () => {
    const action = LOAD_DATA_POKEMONS;

    const result = getData();

    expect(result.type).toEqual(action);
  });
  it("toggleSidebar", () => {
    const action = TOGGLE_SIDEBAR_POKEMONS;

    const result = toggleSidebar();

    expect(result.type).toEqual(action);
  });

  it("ChangeSearch", () => {
    const action = CHANGE_SEARCH;
    const payload = "test";

    const result = changeSearch(payload);

    expect(result.type).toEqual(action);
    expect(result.payload.search).toBe(payload);
  });
});
