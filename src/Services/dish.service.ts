import { Dish } from "./link.service.js";
import { httpService } from "./http.service.js";

const STORAGE_KEY = "dish";

const filterDishes = (value: number, dishes: Dish[], filters: string[]) => {
    switch (value) {
        case 0: //Breakfast
            return dishes.filter((dish) => dish.dishType === filters[0]);
        case 1: //Lanch
            return dishes.filter((dish) => dish.dishType === filters[1]);
        case 2: //Dinner
            return dishes.filter((dish) => dish.dishType === filters[2]);

        default:
            return [];
    }
};

interface FilterBy {
    category?: string;
}

async function query(filterBy: FilterBy = { category: "" }) {
    return httpService.get(STORAGE_KEY, filterBy);
}

async function getById(dishId: string) {
    return httpService.get(`dish/${dishId}`);
}

export const dishService = {
    query,
    getById,
    filterDishes,
};
