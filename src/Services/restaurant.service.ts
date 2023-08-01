import { allrestaurants } from "../Assets/data";
import { Restaurant, Dish } from "../Assets/data";

const filterRestaurants = (
    value: number,
    restaurants: Restaurant[]
): Restaurant[] => {
    switch (value) {
        case 0: //All
            return restaurants;
        case 1: //New
            const currentYear = new Date().getFullYear();
            return restaurants.filter(
                (restaurant) =>
                    restaurant.faundationDate.getFullYear() === currentYear
            );

        case 2: //Most Popular
            return restaurants.filter((restaurant) => restaurant.stars >= 4);

        case 3: //Open Now
            return restaurants.filter((restaurant) =>
                isOpenNow(restaurant.openHoures)
            );

        default:
            return restaurants;
    }
};

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

const isOpenNow = (openHours: string[]) => {
    const currentDay = new Date().getDay();
    const currentTime = new Date().toLocaleTimeString("en-US", {
        hour12: false,
    });

    if (openHours && openHours[currentDay]) {
        const [openTime, closeTime] = openHours[currentDay].split("-");
        return currentTime >= openTime && currentTime <= closeTime;
    }
    return false;
};
export const restaurantService = {
    filterRestaurants,
    filterDishes,
    isOpenNow,
};
