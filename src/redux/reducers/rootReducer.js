import { combineReducers } from "redux";

import { pokemonsReducer } from "../ducks/pokemons";

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
});

export default rootReducer;
