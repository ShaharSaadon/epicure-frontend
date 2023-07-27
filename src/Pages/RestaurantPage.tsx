import {
    CustomTabPanels,
    CustomTabs,
} from "../Components/Restaurants/TabsComponent";
import { useEffect, useState } from "react";
import { allrestaurants } from "../Assets/data";
import { linkService } from "../Services/link.service";
import { useParams } from "react-router-dom";
import { useTabs } from "../customHooks/useTabs";
import { Box } from "@mui/material";
import clockSvg from "../Assets/Images/Restaurants/clock.svg";

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
        <Box sx={{ width: "100%" }} className="restaurant-page">
            <img
                src={imageMap[restaurant.name]}
                alt={restaurant.name}
                className="hero-image"
            />
            <div className="hero-container flex flex-column">
                <h1 className="name">{restaurant.name}</h1>
                <h2 className="chef">{restaurant.chef}</h2>
                <div className="mode flex">
                    <img src={clockSvg} alt="clock" className="clock-icon" />
                    <h2 className="mode-text">Open now</h2>
                </div>
            </div>
            <Box sx={{}} className="lunch-type flex justify-center">
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
