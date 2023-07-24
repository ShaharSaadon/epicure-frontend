export interface Restaurant {
    type: "restaurant";
    name: string;
    chef?: string;
    stars?: number;
}

export interface Dish {
    type: "dish";
    name: string;
    special?: string;
    ingredients: string;
    price?: number;
    restaurant: string;
}

export const chefOfTheWeekRestaurants: Restaurant[] = [
    {
        type: "restaurant",
        name: "Onza",
    },
    {
        type: "restaurant",
        name: "Kitchen Market",
    },
    {
        type: "restaurant",
        name: "Mashya",
    },
];
export const popularRestaurants: Restaurant[] = [
    {
        type: "restaurant",
        name: "Claro",
        chef: "Ran Shmueli",
        stars: 4,
    },
    {
        type: "restaurant",
        name: "Lumina",
        chef: "Meir Adoni",
        stars: 3,
    },
    {
        type: "restaurant",
        name: "Tiger Lilly",
        chef: "Yanir Green",
        stars: 4,
    },
];

export const bestDishes: Dish[] = [
    {
        type: "dish",
        name: "Pad Ki Mao",
        ingredients:
            "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
        special: "spicy",
        restaurant: "claro",
    },
    {
        type: "dish",
        name: "Garbanzo Frito",
        ingredients:
            "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
        price: 98,
        restaurant: "Lumina",
    },
    {
        type: "dish",
        name: "Smoked Pizza",
        ingredients: 'Basil dough, cashew "butter", demi-glace, bison & radish',
        special: "vegan",
        restaurant: "Tiger Lilly",
    },
];
