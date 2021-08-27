import { call, put, takeLatest, all, select } from "redux-saga/effects";
import { api_get } from "../../services/api";

// data
export const LOAD_DATA_POKEMONS = "LOAD_DATA_POKEMONS";
const SET_DATA_POKEMONS = "SET_DATA_POKEMONS";
const ERROR_DATA_POKEMONS = "ERROR_DATA_POKEMONS";
export const TOGGLE_SIDEBAR_POKEMONS = "TOGGLE_SIDEBAR_POKEMONS";
export const CHANGE_SEARCH = "CHANGE_SEARCH";

const INITIAL_STATE = {
  pokemons: [],
  nextPage: "https://pokeapi.co/api/v2/pokemon/",
  search: "",
  isLoading: false,
  showSidebar: false,
  error: false,
  errorMessage: "",
};

const pokemonsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    // data
    case LOAD_DATA_POKEMONS:
      return {
        ...state,
        isLoading: true,
        error: false,
        errorMessage: "",
      };
    case SET_DATA_POKEMONS: {
      const pokemons = [...state.pokemons, ...payload.pokemons];
      return {
        ...state,
        nextPage: payload.nextPage,
        pokemons: pokemons,
        isLoading: false,
      };
    }
    case CHANGE_SEARCH:
      const { search } = payload;

      return {
        ...state,
        search,
      };
    case TOGGLE_SIDEBAR_POKEMONS:
      return {
        ...state,
        showSidebar: !state.showSidebar,
      };
    case ERROR_DATA_POKEMONS:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: payload.message,
      };

    default:
      return state;
  }
};

// Actions
// data
function getData() {
  return {
    type: LOAD_DATA_POKEMONS,
  };
}
export const changeSearch = (search) => {
  return {
    type: CHANGE_SEARCH,
    payload: {
      search,
    },
  };
};
export const toggleSidebar = () => {
  return {
    type: TOGGLE_SIDEBAR_POKEMONS,
  };
};

// sagas
function* fetchData(action) {
  const page = yield select((state) => state.pokemons.nextPage);

  try {
    const pokemons = yield call(api_get, page);
    const pokemonsInfo = yield all(
      pokemons.results.map((pokemon) => call(api_get, pokemon.url))
    );
    yield put({
      type: SET_DATA_POKEMONS,
      payload: {
        nextPage: pokemons.next,
        pokemons: pokemonsInfo,
      },
    });
  } catch (e) {
    const { data } = e.response;

    let error = "";
    if (e.response.status === 404) {
      error = "Error al enviar la petición.";
    } else {
      error = data ? data.message.error : "Error de datos";
    }

    yield put({
      type: ERROR_DATA_POKEMONS,
      payload: {
        message: error,
      },
    });
  }
}

function* pokemonsSaga() {
  yield takeLatest(LOAD_DATA_POKEMONS, fetchData);
}

export {
  // reducer
  pokemonsReducer,
  // actions
  getData,
  // saga
  pokemonsSaga,
};
