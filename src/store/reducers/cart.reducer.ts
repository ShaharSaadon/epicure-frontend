import { storageService } from "../../Services/storage.service";
import {
    addToCart,
    removeFromCart,
    updateCartItem,
    DishToOrder,
} from "../actions/cart.actions";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";

interface CartState {
    cart: DishToOrder[];
}

const INITIAL_STATE: CartState = {
    cart: Array.isArray(storageService.loadCart())
        ? storageService.loadCart()
        : [],
};

type CartActions =
    | ReturnType<typeof addToCart>
    | ReturnType<typeof removeFromCart>
    | ReturnType<typeof updateCartItem>;

export function cartReducer(
    state = INITIAL_STATE,
    action: CartActions
): CartState {
    let updatedCart;

    switch (action.type) {
        case ADD_TO_CART:
            const itemInCart = state?.cart?.find(
                (item) => item._id === action.dish._id
            );

            if (itemInCart) {
                updatedCart = state?.cart?.map((item) =>
                    item._id === action.dish._id
                        ? {
                              ...item,
                              quantity: item.quantity + action.dish.quantity,
                          }
                        : item
                );
            } else {
                updatedCart = [action.dish, ...state.cart];
            }

            storageService.saveCart(updatedCart);

            return {
                ...state,
                cart: updatedCart,
            };
        case REMOVE_FROM_CART:
            updatedCart = state?.cart?.filter(
                (item) => item._id !== action.dish._id
            );
            storageService.saveCart(updatedCart);
            return {
                ...state,
                cart: updatedCart,
            };
        case UPDATE_CART_ITEM:
            updatedCart = state.cart.map((item) =>
                item._id === action.dish._id
                    ? { ...item, quantity: action.dish.quantity }
                    : item
            );
            storageService.saveCart(updatedCart);

            return {
                ...state,
                cart: updatedCart,
            };
        default:
            return state;
    }
}
