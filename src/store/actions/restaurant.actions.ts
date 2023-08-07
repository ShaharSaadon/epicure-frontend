import { Dispatch } from "redux";
import { Dish, Restaurant } from "../../Assets/data";
import { restaurantService } from "../../Services/restaurant.service";

import {
    SET_CURRENT_RESTAURANT,
    SET_CURRENT_DISH,
    SET_RESTAURANTS,
} from "../reducers/restaurant.reducer";

export interface SetCurrentRestaurantAction {
    type: typeof SET_CURRENT_RESTAURANT;
    restaurant: Restaurant;
}

export interface SetCurrentDishAction {
    type: typeof SET_CURRENT_DISH;
    dish: Dish;
}

export interface SetRestaurantsAction {
    type: typeof SET_RESTAURANTS;
    restaurants: Restaurant[];
}

export function setCurrentRestaurant(
    restaurant: Restaurant
): SetCurrentRestaurantAction {
    return {
        type: SET_CURRENT_RESTAURANT,
        restaurant,
    };
}

export function setCurrentDish(dish: Dish): SetCurrentDishAction {
    return {
        type: SET_CURRENT_DISH,
        dish,
    };
}

export function loadRestaurants(
    category?: string
): (dispatch: Dispatch) => Promise<void> {
    const filterBy = {
        category,
    };
    return async (dispatch: Dispatch) => {
        try {
            const restaurants: Restaurant[] = await restaurantService.query(
                filterBy
            );
            const action: SetRestaurantsAction = {
                type: SET_RESTAURANTS,
                restaurants,
            };
            dispatch(action);
        } catch (error) {
            console.log("error:", error);
        }
    };
}
