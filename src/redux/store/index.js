import rootReducer from "../reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import rootSaga from "../sagas/rootSaga";
import localforage from "localforage";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const persistConfig = {
  key: "root",
  storage: localforage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  {},
  compose(applyMiddleware(...middleware))
);
let persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
