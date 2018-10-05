import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./containers/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose  } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./reducers";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/lib/integration/react";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {watcherSaga} from "./sagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2
};

const reducer = persistReducer(persistConfig, rootReducer);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(compose(applyMiddleware(sagaMiddleware))));
const persistor = persistStore(store);
sagaMiddleware.run(watcherSaga);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
