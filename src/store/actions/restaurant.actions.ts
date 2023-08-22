import { iChef, Dish, Restaurant } from "../../Services/link.service";
import { restaurantService } from "../../Services/restaurant.service";
import { dishService } from "../../Services/dish.service";
import { chefService } from "../../Services/chef.service";
import { AppThunk } from "../../Services/link.service";

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
export const loadRestaurant =
    (restaurantId: string): AppThunk =>
    async (dispatch) => {
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

export const loadRestaurants =
    (category?: string): AppThunk =>
    async (dispatch) => {
        const filterBy = {
            category,
        };
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

export const loadDish =
    (dishId: string): AppThunk =>
    async (dispatch) => {
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

export const loadChef =
    (chefId: string): AppThunk =>
    async (dispatch) => {
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

export const loadSignatureDish = (): AppThunk => async (dispatch) => {
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
