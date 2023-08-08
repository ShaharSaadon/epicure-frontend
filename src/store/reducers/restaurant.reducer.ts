import { Dish, Restaurant } from "../../Assets/data";
export const SET_RESTAURANTS = "SET_RESTAURANTS";
export const SET_RESTAURANT = "SET_RESTAURANT";
export const SET_CURRENT_DISH = "SET_CURRENT_DISH";
export const SET_DISH_TO_ORDER = "SET_DISH_TO_ORDER";

import {
    SetRestaurantAction,
    SetCurrentDishAction,
    SetRestaurantsAction,
} from "../actions/restaurant.actions";
interface RestaurantState {
    restaurant: Restaurant | null;
    currentDish: Dish | null;
    restaurants: Restaurant[];
}

const INITIAL_STATE: RestaurantState = {
    restaurant: null,
    currentDish: null,
    restaurants: [],
};

type RestaurantActions =
    | SetRestaurantAction
    | SetCurrentDishAction
    | SetRestaurantsAction;

export function restaurantReducer(
    state = INITIAL_STATE,
    action: RestaurantActions
): RestaurantState {
    console.log(action);
    switch (action.type) {
        case SET_RESTAURANTS:
            return {
                ...state,
                restaurants: action.restaurants,
            };
        case SET_RESTAURANT:
            return {
                ...state,
                restaurant: action.restaurant,
            };
        case SET_CURRENT_DISH:
            return {
                ...state,
                currentDish: action.dish,
            };

        default:
            return state;
    }
}
