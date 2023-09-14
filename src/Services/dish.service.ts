import { httpService } from "./http.service.js";

const STORAGE_KEY = "dish";
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
};
