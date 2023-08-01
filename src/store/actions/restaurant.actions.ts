import { Dish, Restaurant } from "../../Assets/data";

export const SET_CURRENT_RESTAURANT = "SET_CURRENT_RESTAURANT";
export const SET_CURRENT_DISH = "SET_CURRENT_DISH";
export const SET_DISH_TO_ORDER = "SET_DISH_TO_ORDER";

export interface SetCurrentRestaurantAction {
    type: typeof SET_CURRENT_RESTAURANT;
    restaurant: Restaurant;
}

export interface SetCurrentDishAction {
    type: typeof SET_CURRENT_DISH;
    dish: Dish;
}

// interface SetDishToOrderAction {
//     type: typeof SET_DISH_TO_ORDER;
//     payload: DishOrder; // You need to define DishOrder type
// }

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

// export function setDishToOrder(dishOrder: DishOrder): SetDishToOrderAction {
//     return {
//         type: SET_DISH_TO_ORDER,
//         payload: dishOrder,
//     };
// }
