import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allrestaurants } from "../Assets/data";
import { useTabs } from "../customHooks/useTabs";
import { linkService } from "../Services/link.service";
import { Box } from "@mui/material";
import clockSvg from "../Assets/Images/Restaurants/clock.svg";
import {
    CustomTabPanels,
    CustomTabs,
} from "../Components/Restaurants/TabsComponent";
import { DynamicCard } from "../Components/HomePage/DynamicCard";

export const RestaurantPage = () => {
    let { restaurantName } = useParams();
    const { value, handleChange } = useTabs(0);
    const { lunchfilter, imageMap } = linkService;
    const filters = Object.values(lunchfilter);

    const [restaurant, setRestaurant] = useState(
        allrestaurants.find((restaurant) => restaurant.name === restaurantName)
    );

    const [dishes, setDishes] = useState(restaurant?.dishes || []);

    useEffect(() => {
        setDishes(restaurant?.dishes || []);
    }, [restaurant]);

    if (!restaurant) return;
    return (
        <Box sx={{ width: "100%" }}>
            <img
                src={imageMap[restaurant.name]}
                alt={restaurant.name}
                className="claro"
            />

            <h1>{restaurant.name}</h1>
            <h2>{restaurant.chef}</h2>
            <div className="mode">
                <img src={clockSvg} alt="clock" />
                <h2>Open now</h2>
            </div>
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
