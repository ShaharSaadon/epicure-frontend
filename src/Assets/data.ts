export interface Restaurant {
    type: "restaurant";
    name: string;
    chef?: string;
    stars?: number;
    openHoures?: String[];
    dishes?: Dish[];
}

export interface Dish {
    type: "dish";
    name: string;
    special?: string;
    ingredients: string;
    price?: number;
    restaurant?: string;
    DishType?: string;
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
        price: 88,
    },
    {
        type: "dish",
        name: "Garbanzo Frito",
        ingredients:
            "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
        price: 78,
    },
    {
        type: "dish",
        name: "Smoked Pizza",
        ingredients: 'Basil dough, cashew "butter", demi-glace, bison & radish',
        special: "vegan",
        price: 98,
    },
];

export const allrestaurants: Restaurant[] = [
    {
        type: "restaurant",
        name: "Claro",
        chef: "Ran Shmueli",
        stars: 4,
        openHoures: [
            "09:00-21:00",
            "09:00-21:00",
            "09:00-21:00",
            "09:00-21:00",
            "09:00-21:00",
            "09:00-21:00",
            "09:00-21:00",
        ],
        dishes: [
            {
                type: "dish",
                name: "Pad Ki Mao",
                ingredients:
                    "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
                price: 88,
                DishType: "breakfast",
            },
            {
                type: "dish",
                name: "Ta Ma La Ko",
                ingredients:
                    "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
                price: 65,
                DishType: "breakfast",
            },
            {
                type: "dish",
                name: "Red Farm",
                ingredients:
                    "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
                price: 65,
                DishType: "breakfast",
            },
            {
                type: "dish",
                name: "Pad Ki Mao",
                ingredients:
                    "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
                price: 88,
                DishType: "lunch",
            },
            {
                type: "dish",
                name: "Ta Ma La Ko",
                ingredients:
                    "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
                price: 65,
                DishType: "lunch",
            },
            {
                type: "dish",
                name: "Red Farm",
                ingredients:
                    "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
                price: 65,
                DishType: "lunch",
            },
            {
                type: "dish",
                name: "Pad Ki Mao",
                ingredients:
                    "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
                price: 88,
                DishType: "dinner",
            },
            {
                type: "dish",
                name: "Ta Ma La Ko",
                ingredients:
                    "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
                price: 65,
                DishType: "dinner",
            },
            {
                type: "dish",
                name: "Red Farm",
                ingredients:
                    "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
                price: 65,
                DishType: "dinner",
            },
        ],
    },
    {
        type: "restaurant",
        name: "Kab Kem",
        chef: "Meir Adoni",
        stars: 3,
    },
    {
        type: "restaurant",
        name: "Messa",
        chef: "Aviv Moshe",
        stars: 1,
    },
    {
        type: "restaurant",
        name: "Nitan Thi",
        chef: "Shahaf Shabtay",
        stars: 1,
    },
    {
        type: "restaurant",
        name: "Tiger Lilly",
        chef: "Yanir Green",
        stars: 4,
    },
    {
        type: "restaurant",
        name: "Ya Pan",
        chef: "Yuval Ben Moshe",
        stars: 5,
    },
    {
        type: "restaurant",
        name: "MI MA",
        chef: "Shahar Saadon",
        stars: 4,
    },
    {
        type: "restaurant",
        name: "MI ME",
        chef: "René Descartes ",
        stars: 5,
    },
    {
        type: "restaurant",
        name: "MI MU",
        chef: "Dekel",
        stars: 3,
    },
];
