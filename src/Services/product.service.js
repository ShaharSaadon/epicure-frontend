import { httpService } from "./http.service.js";

const STORAGE_KEY = "product";

export const productService = {
    query,
    getById,
    save,
    remove,
    getEmptyProduct,
    addProductMsg,
};
window.cs = productService;

async function query(filterBy = { category: "" }) {
    return httpService.get(STORAGE_KEY, filterBy);
}

function getById(productId) {
    return httpService.get(`product/${productId}`);
}

async function remove(productId) {
    return httpService.delete(`product/${productId}`);
}
async function save(product) {
    var savedProduct;
    if (product._id) {
        savedProduct = await httpService.put(`product/${product._id}`, product);
    } else {
        savedProduct = await httpService.post("product", product);
    }
    return savedProduct;
}

async function addProductMsg(productId, txt) {
    const savedMsg = await httpService.post(`product/${productId}/msg`, {
        txt,
    });
    return savedMsg;
}

function getEmptyProduct() {
    return {
        name: "",
        description: "",
        category: "",
        sizes: [],
        colors: [],
        shortDescription: "",
        price: 0,
    };
}
