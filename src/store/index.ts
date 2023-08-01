import thunk from "redux-thunk";
import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore as createStore,
} from "redux";

import { cartReducer } from "./reducers/cart.reducer";
import { modalReducer } from "./reducers/modal.reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    cartModule: cartReducer,
    modalModule: modalReducer,
});

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

window.gStore = store;
