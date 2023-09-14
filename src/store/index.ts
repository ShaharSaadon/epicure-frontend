import thunk, { ThunkMiddleware } from "redux-thunk";
import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore as createStore,
    Action,
} from "redux";

import { cartReducer } from "./reducers/cart.reducer";
import { modalReducer } from "./reducers/modal.reducer";
import { restaurantReducer } from "./reducers/restaurant.reducer";
import { userReducer } from "./reducers/user.reducer";
const composeEnhancers = compose;

const rootReducer = combineReducers({
    userModule: userReducer,
    cartModule: cartReducer,
    modalModule: modalReducer,
    restaurantModule: restaurantReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const middleware = [thunk as ThunkMiddleware<RootState, Action<string>>];

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
);

export type AppDispatch = typeof store.dispatch;

// window.gStore = store;
