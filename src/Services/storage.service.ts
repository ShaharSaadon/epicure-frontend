const CART_KEY = "cart";

import { DishToOrder } from "../store/actions/cart.actions";

function saveCart(cart: DishToOrder[]): void {
    store(CART_KEY, cart);
}

function loadCart(): DishToOrder[] {
    const cart = load(CART_KEY, []);
    return Array.isArray(cart) ? cart : [];
}

function store(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
}

function load<T = any>(key: string, defaultValue: T | null = null): T | null {
    const value = localStorage.getItem(key);
    if (!value) {
        return defaultValue;
    }
    try {
        return JSON.parse(value) as T;
    } catch (error) {
        console.error(`Error parsing JSON data for key "${key}":`, error);
        return defaultValue;
    }
}

export const storageService = {
    store,
    load,
    saveCart,
    loadCart,
};
