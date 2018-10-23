import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import clientMiddleware from "./middleware/clientMiddleware";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const configureStore = (client, preloadedState) => {
  const enhancer = composeEnhancers(
    applyMiddleware(clientMiddleware(client)), // Api Request Middleware
    applyMiddleware(thunk)
  );
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
