import React from "react";
import Box from "@mui/material/Box";
import { linkService } from "../Services/link.service.ts";
import {
    CustomTabs,
    CustomTabPanels,
} from "../Components/Dynamic/TabsComponent.tsx";
import { useTabs } from "../customHooks/useTabs.ts";
import { allrestaurants } from "../Assets/data.ts";
import { RestaurantFilter } from "../Components/Restaurants/RestaurantFilter.tsx";
export const RestaurantIndex: React.FC = () => {
    const { value, handleChange } = useTabs(0);
    const { restaurantFilter } = linkService;
    const filters = Object.values(restaurantFilter);

    return (
        <Box sx={{ width: "100%" }}>
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
                data={allrestaurants}
            />
        </Box>
    );
};
