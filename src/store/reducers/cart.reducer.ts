import { storageService } from "../../services/storage.service";
import {
    addToCart,
    removeFromCart,
    updateCartItem,
    Dish,
} from "../actions/cart.actions";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";

interface CartState {
    cart: Dish[];
}

const INITIAL_STATE: CartState = {
    cart: storageService.loadCart(),
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
            const itemInCart = state.cart.find(
                (item) => item._Id === action.dish._Id
            );

            if (itemInCart) {
                updatedCart = state.cart.map((item) =>
                    item._Id === action.dish._Id
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
            updatedCart = state.cart.filter(
                (item) => item._Id !== action.dish._Id
            );
            storageService.saveCart(updatedCart);
            return {
                ...state,
                cart: updatedCart,
            };
        case UPDATE_CART_ITEM:
            updatedCart = state.cart.map((item) =>
                item._Id === action.dish._Id
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
