import { Dish, Restaurant } from "../../Assets/data";

import {
    SET_CURRENT_RESTAURANT,
    SET_CURRENT_DISH,
} from "../reducers/restaurant.reducer";
export interface DishToOrder {
    changes: string[];
    quantity: number; // not 'quantiny'
    side: string;
}
export interface SetCurrentRestaurantAction {
    type: typeof SET_CURRENT_RESTAURANT;
    restaurant: Restaurant;
}

export interface SetCurrentDishAction {
    type: typeof SET_CURRENT_DISH;
    dish: Dish;
}

export function setCurrentRestaurant(
    restaurant: Restaurant
): SetCurrentRestaurantAction {
    console.log("restaurant action:", restaurant);
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
