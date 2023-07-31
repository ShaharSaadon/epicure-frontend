import {
    REMOVE_FROM_CART,
    UPDATE_CART_ITEM,
    ADD_TO_CART,
} from "../reducers/cart.reducer";

import { Dish } from "../../Assets/data";

interface AddToCartAction {
    type: typeof ADD_TO_CART;
    dish: Dish;
}

export function addToCart(dish: Dish): AddToCartAction {
    return {
        type: ADD_TO_CART,
        dish,
    };
}

interface RemoveFromCartAction {
    type: typeof REMOVE_FROM_CART;
    dish: Dish;
}

export function removeFromCart(dish: Dish): RemoveFromCartAction {
    return {
        type: REMOVE_FROM_CART,
        dish,
    };
}

interface UpdateCartItemAction {
    type: typeof UPDATE_CART_ITEM;
    dish: Dish;
}

export function updateCartItem(dish: Dish): UpdateCartItemAction {
    return {
        type: UPDATE_CART_ITEM,
        dish,
    };
}