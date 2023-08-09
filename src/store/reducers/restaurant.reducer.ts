import { Dish, Restaurant } from "../../Assets/data";
export const SET_RESTAURANTS = "SET_RESTAURANTS";
export const SET_RESTAURANT = "SET_RESTAURANT";
export const SET_DISH = "SET_DISH";
export const SET_SIGNATURE_DISH = "SET_SIGNATURE_DISH";
import {
    SetRestaurantAction,
    SetDishAction,
    SetRestaurantsAction,
    SetSignatureDishAction,
} from "../actions/restaurant.actions";
interface RestaurantState {
    restaurant: Restaurant | null;
    dish: Dish | null;
    restaurants: Restaurant[];
    signatureDish: Dish[];
}

const INITIAL_STATE: RestaurantState = {
    restaurant: null,
    dish: null,
    restaurants: [],
    signatureDish: [],
};

type RestaurantActions =
    | SetRestaurantAction
    | SetDishAction
    | SetRestaurantsAction
    | SetSignatureDishAction;

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

        default:
            return state;
    }
}
