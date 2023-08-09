import { iChef, Dish, Restaurant } from "../../Services/link.service";
import { Dispatch } from "redux";
import { restaurantService } from "../../Services/restaurant.service";
import { dishService } from "../../Services/dish.service";
import { chefService } from "../../Services/chef.service";

import {
    SET_RESTAURANT,
    SET_DISH,
    SET_RESTAURANTS,
    SET_SIGNATURE_DISH,
    SET_CHEF,
} from "../reducers/restaurant.reducer";

export interface SetRestaurantAction {
    type: typeof SET_RESTAURANT;
    restaurant: Restaurant;
}
export interface SetDishAction {
    type: typeof SET_DISH;
    dish: Dish;
}
export interface SetChefAction {
    type: typeof SET_CHEF;
    chef: iChef;
}
export interface SetRestaurantsAction {
    type: typeof SET_RESTAURANTS;
    restaurants: Restaurant[];
}
export interface SetSignatureDishAction {
    type: typeof SET_SIGNATURE_DISH;
    signatureDish: Dish[];
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
export function loadChef(
    chefId: string
): (dispatch: Dispatch) => Promise<void> {
    return async (dispatch: Dispatch) => {
        try {
            const chef: iChef = await chefService.getById(chefId);
            const action: SetChefAction = {
                type: SET_CHEF,
                chef,
            };
            dispatch(action);
        } catch (error) {
            console.log("error:", error);
        }
    };
}

export function loadSignatureDish(): (dispatch: Dispatch) => Promise<void> {
    return async (dispatch: Dispatch) => {
        try {
            const signatureDish: Dish[] = await dishService.query();
            const action: SetSignatureDishAction = {
                type: SET_SIGNATURE_DISH,
                signatureDish,
            };
            dispatch(action);
        } catch (error) {
            console.log("error:", error);
        }
    };
}
