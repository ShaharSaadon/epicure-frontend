import { storageService } from "./async-storage.service.js";

export const productService = {
    query,
    save,
    remove,
    getById,
    getEmptyProduct,
};
const STORAGE_KEY = "products";

async function query(category) {
    let updatedProducts = await storageService.query(STORAGE_KEY);
    if (!updatedProducts || updatedProducts.length === 0) {
        await _postProducts();
        updatedProducts = await storageService.query(STORAGE_KEY);
    }
    console.log("category:", category);
    if (category) {
        const regex = new RegExp(category, "i");
        updatedProducts = updatedProducts.filter((product) =>
            regex.test(product.category)
        );
    }

    return updatedProducts;
}

async function getById(productId) {
    // console.log('id type:', typeof id, 'id value:', id);
    // const product = gProducts.find((product) => {
    //   console.log(
    //     'product id type:',
    //     typeof product._id,
    //     'product id value:',
    //     product._id
    //   );
    //   return product._id === id;
    // });
    // console.log('product found:', product);
    // return Promise.resolve({ ...product });
    console.log("productId:", productId);
    return await storageService.get(STORAGE_KEY, productId);
}

async function remove(productId) {
    // const idx = gProducts.findIndex((product) => product._id === id);
    // gProducts.splice(idx, 1);
    // if (!gProducts.length) gProducts = gDefaultProducts.slice();
    // storageService.store(STORAGE_KEY, gProducts);
    // return Promise.resolve();
    console.log("productId:", productId);
    return await storageService.remove(STORAGE_KEY, productId);
}

async function save(product) {
    // if (productToSave._id) {
    //   const idx = gProducts.findIndex(
    //     (product) => product._id === productToSave._id
    //   );
    //   gProducts.splice(idx, 1, productToSave);
    // } else {
    //   productToSave._id = makeId();
    //   productToSave.batteryStatus = 100;
    //   gProducts.push(productToSave);
    // }
    // storageService.store(STORAGE_KEY, gProducts);
    // return Promise.resolve(productToSave);
    var savedProduct;
    if (product._id) {
        savedProduct = await storageService.put(STORAGE_KEY, product);
    } else {
        savedProduct = await storageService.post(STORAGE_KEY, product);
    }

    return savedProduct;
}

async function _postProducts() {
    for (let i = 0; i < gProducts.length; i++) {
        await storageService.post(STORAGE_KEY, gProducts[i]);
    }
}

function getEmptyProduct() {
    return {
        _id: "",
        name: "",
        description: "",
        category: "",
        price: 0,
    };
}
