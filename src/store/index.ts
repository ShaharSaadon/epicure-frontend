import thunk from "redux-thunk";
import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore as createStore,
} from "redux";

import { cartReducer } from "./reducers/cart.reducer";
import { modalReducer } from "./reducers/modal.reducer";
import { restaurantReducer } from "./reducers/restaurant.reducer";
import { userReducer } from "./reducers/user.reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    userModule: userReducer,
    cartModule: cartReducer,
    modalModule: modalReducer,
    restaurantModule: restaurantReducer,
});

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

window.gStore = store;
