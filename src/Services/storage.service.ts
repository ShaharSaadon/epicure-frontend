const CART_KEY = 'cart';

interface CartItem {
  name: string;
  quantity: number;
  _id?: string;
}

function saveCart(cart: CartItem[]): void {
  store(CART_KEY, cart);
}

function loadCart(): CartItem[] {
  return load(CART_KEY, []);
}

function store(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value));
}

function load<T>(key: string, defaultValue: T = null): T {
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