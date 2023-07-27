import React from "react";
import Box from "@mui/material/Box";
import { linkService } from "../Services/link.service";
import {
    CustomTabs,
    CustomTabPanels,
} from "../Components/Restaurants/TabsComponent";
import { useTabs } from "../customHooks/useTabs";
import { allrestaurants } from "../Assets/data.ts";

export const Restaurants: React.FC = () => {
    const { value, handleChange } = useTabs(0);
    const filters = Object.values(linkService.restaurantFilter);

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <CustomTabs
                    value={value}
                    handleChange={handleChange}
                    filters={filters}
                />
            </Box>
            <CustomTabPanels
                value={value}
                filters={filters}
                data={allrestaurants}
            />
        </Box>
    );
};
