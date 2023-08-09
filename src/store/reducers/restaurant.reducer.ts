import { Dish, Restaurant, iChef } from "../../Services/link.service";
export const SET_RESTAURANTS = "SET_RESTAURANTS";
export const SET_RESTAURANT = "SET_RESTAURANT";
export const SET_DISH = "SET_DISH";
export const SET_SIGNATURE_DISH = "SET_SIGNATURE_DISH";
export const SET_CHEF = "SET_CHEF";
import {
    SetRestaurantAction,
    SetDishAction,
    SetRestaurantsAction,
    SetSignatureDishAction,
    SetChefAction,
} from "../actions/restaurant.actions";
interface RestaurantState {
    restaurant: Restaurant | null;
    dish: Dish | null;
    restaurants: Restaurant[];
    signatureDish: Dish[];
    chef: iChef;
}

const INITIAL_STATE: RestaurantState = {
    restaurants: [],
    signatureDish: [],
    restaurant: null,
    dish: null,
    chef: null,
};

type RestaurantActions =
    | SetRestaurantAction
    | SetDishAction
    | SetRestaurantsAction
    | SetSignatureDishAction
    | SetChefAction;

export function restaurantReducer(
    state = INITIAL_STATE,
    action: RestaurantActions
): RestaurantState {
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
        case SET_SIGNATURE_DISH:
            return {
                ...state,
                signatureDish: action.signatureDish,
            };
        case SET_DISH:
            return {
                ...state,
                dish: action.dish,
            };
        case SET_CHEF:
            return {
                ...state,
                chef: action.chef,
            };

        default:
            return state;
    }
}
