import {
    CustomTabs,
    CustomTabPanels,
} from "../Components/Dynamic/TabsComponent";
import { restaurantService } from "../Services/restaurant.service";
import { RestaurantFilter } from "../Components/Restaurants/RestaurantFilter";
import { linkService } from "../Services/link.service";
import { useTabs } from "../customHooks/useTabs";
import { useMemo } from "react";

import React from "react";
import Box from "@mui/material/Box";
import { allrestaurants } from "../Assets/data";

const RestaurantIndex: React.FC = () => {
    const { value, handleChange } = useTabs(0);
    const { restaurantFilter } = linkService;
    const filters = Object.values(restaurantFilter);

    const filteredRestaurants = useMemo(
        () => restaurantService.filterRestaurants(value, allrestaurants),
        [value]
    );

    return (
        <Box sx={{ width: "100%" }} className="restaurant-index">
            <Box className="flex justify-center">
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
                data={filteredRestaurants}
            />
        </Box>
    );
};

export default RestaurantIndex;
