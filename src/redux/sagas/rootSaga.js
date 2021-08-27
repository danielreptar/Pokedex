import { all } from "redux-saga/effects";
import { pokemonsSaga } from "../ducks/pokemons";

export default function* rootSaga() {
  yield all([pokemonsSaga()]);
}
