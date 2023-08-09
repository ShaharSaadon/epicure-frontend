import { iChef } from "./link.service.js";
import { httpService } from "./http.service.js";

const STORAGE_KEY = "chef";

interface FilterBy {
    category?: string;
}

async function query(filterBy: FilterBy = { category: "" }) {
    return httpService.get(STORAGE_KEY, filterBy);
}

async function getById(chefId: string) {
    return httpService.get(`chef/${chefId}`);
}

export const chefService = {
    query,
    getById,
};
