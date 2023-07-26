import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allrestaurants } from "../Assets/data";
import { useTabs } from "../customHooks/useTabs";
import { linkService } from "../Services/link.service";
import { Box } from "@mui/material";
import {
    CustomTabPanels,
    CustomTabs,
} from "../Components/Restaurants/TabsComponent";

export const RestaurantPage = () => {
    let { restaurantName } = useParams();
    const { value, handleChange } = useTabs(0);
    const filters = Object.values(linkService.lunchfilter);

    const [restaurant, setRestaurant] = useState(
        allrestaurants.find((restaurant) => restaurant.name === restaurantName)
    );

    const [dishes, setDishes] = useState(restaurant?.dishes || []);

    useEffect(() => {
        setDishes(restaurant?.dishes || []);
    }, [restaurant]);

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <CustomTabs
                    value={value}
                    handleChange={handleChange}
                    filters={filters}
                />
            </Box>
            <CustomTabPanels value={value} filters={filters} data={dishes} />
        </Box>
    );
};
