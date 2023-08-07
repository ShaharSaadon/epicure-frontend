import { Dish, Restaurant } from "../../Assets/data";
export const SET_RESTAURANTS = "SET_RESTAURANTS";
export const SET_CURRENT_RESTAURANT = "SET_CURRENT_RESTAURANT";
export const SET_CURRENT_DISH = "SET_CURRENT_DISH";
export const SET_DISH_TO_ORDER = "SET_DISH_TO_ORDER";

import {
    SetCurrentRestaurantAction,
    SetCurrentDishAction,
    SetRestaurantsAction,
} from "../actions/restaurant.actions";
interface RestaurantState {
    currentRestaurant: Restaurant | null;
    currentDish: Dish | null;
    restaurants: Restaurant[];
}

const INITIAL_STATE: RestaurantState = {
    currentRestaurant: null,
    currentDish: null,
    restaurants: [],
};

type RestaurantActions =
    | SetCurrentRestaurantAction
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
        case SET_CURRENT_RESTAURANT:
            return {
                ...state,
                currentRestaurant: action.restaurant,
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
