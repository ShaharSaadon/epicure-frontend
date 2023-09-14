import {
    REMOVE_FROM_CART,
    UPDATE_CART_ITEM,
    ADD_TO_CART,
} from "../reducers/cart.reducer";

import { Dish } from "../../Services/link.service";
export interface DishToOrder extends Dish {
    quantity: number;
    changes: string[];
    side: string;
}
interface AddToCartAction {
    type: typeof ADD_TO_CART;
    dish: DishToOrder;
}

interface RemoveFromCartAction {
    type: typeof REMOVE_FROM_CART;
    dish: DishToOrder;
}

interface UpdateCartItemAction {
    type: typeof UPDATE_CART_ITEM;
    dish: DishToOrder;
}

export function addToCart(dish: DishToOrder): AddToCartAction {
    return {
        type: ADD_TO_CART,
        dish,
    };
}

export function removeFromCart(dish: DishToOrder): RemoveFromCartAction {
    return {
        type: REMOVE_FROM_CART,
        dish,
    };
}

export function updateCartItem(dish: DishToOrder): UpdateCartItemAction {
    return {
        type: UPDATE_CART_ITEM,
        dish,
    };
}
