import { Dispatch } from "redux";
import { Dish, Restaurant } from "../../Assets/data";
import { restaurantService } from "../../Services/restaurant.service";
import { dishService } from "../../Services/dish.service";

import {
    SET_RESTAURANT,
    SET_DISH,
    SET_RESTAURANTS,
} from "../reducers/restaurant.reducer";

export interface SetRestaurantAction {
    type: typeof SET_RESTAURANT;
    restaurant: Restaurant;
}

export interface SetDishAction {
    type: typeof SET_DISH;
    dish: Dish;
}

export interface SetRestaurantsAction {
    type: typeof SET_RESTAURANTS;
    restaurants: Restaurant[];
}

export function loadRestaurant(
    restaurantId: string
): (dispatch: Dispatch) => Promise<void> {
    return async (dispatch: Dispatch) => {
        try {
            const restaurant: Restaurant = await restaurantService.getById(
                restaurantId
            );
            const action: SetRestaurantAction = {
                type: SET_RESTAURANT,
                restaurant,
            };
            dispatch(action);
        } catch (error) {
            console.log("error:", error);
        }
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
            console.log(filterBy);
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

export function loadDish(
    dishId: string
): (dispatch: Dispatch) => Promise<void> {
    return async (dispatch: Dispatch) => {
        try {
            const dish: Dish = await dishService.getById(dishId);
            const action: SetDishAction = {
                type: SET_DISH,
                dish,
            };
            dispatch(action);
        } catch (error) {
            console.log("error:", error);
        }
    };
}
