import React from "react";
import Box from "@mui/material/Box";
import { linkService } from "../Services/link.service";
import {
    CustomTabs,
    CustomTabPanels,
} from "../Components/Dynamic/TabsComponent";
import { useTabs } from "../customHooks/useTabs";
import { allrestaurants } from "../Assets/data";
import { RestaurantFilter } from "../Components/Restaurants/RestaurantFilter";

export const RestaurantIndex: React.FC = () => {
    const { value, handleChange } = useTabs(0);
    const { restaurantFilter } = linkService;
    const filters = Object.values(restaurantFilter);

    const requestedRestaurants = () => {
        switch (value) {
            case 0: //All
                return allrestaurants;
            case 1: //New
                const currentYear = new Date().getFullYear();
                return allrestaurants.filter(
                    (restaurant) =>
                        restaurant.faundationDate.getFullYear() === currentYear
                );

            case 2: //Most Popular
                return allrestaurants.filter(
                    (restaurant) => restaurant.stars >= 4
                );

            case 3: //Open Now
                const currentDay = new Date().getDay(); // 0 is Sunday, 1 is Monday, etc.
                const currentTime = new Date().toLocaleTimeString("en-US", {
                    hour12: false,
                });

                return allrestaurants.filter((restaurant) => {
                    if (
                        restaurant.openHoures &&
                        restaurant.openHoures[currentDay]
                    ) {
                        const [openTime, closeTime] =
                            restaurant.openHoures[currentDay].split("-");
                        return (
                            currentTime >= openTime && currentTime <= closeTime
                        );
                    }
                    return false;
                });

            default:
                return [];
        }
    };

    return (
        <Box sx={{ width: "100%" }} className="restaurant-index">
            <Box sx={{}} className="flex justify-center">
                <CustomTabs
                    value={value}
                    handleChange={handleChange}
                    filters={filters}
                />
            </Box>
            <RestaurantFilter />

            <CustomTabPanels
                value={value}
                filters={filters}
                data={requestedRestaurants()}
            />
        </Box>
    );
};
