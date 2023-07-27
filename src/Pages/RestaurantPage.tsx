import {
    CustomTabPanels,
    CustomTabs,
} from "../Components/Dynamic/TabsComponent";
import { useEffect, useState } from "react";
import { allrestaurants } from "../Assets/data";
import { linkService } from "../Services/link.service";
import { useParams } from "react-router-dom";
import { useTabs } from "../customHooks/useTabs";
import { Box } from "@mui/material";
import clockSvg from "../Assets/Images/Restaurants/clock.svg";

export const RestaurantPage = () => {
    let { restaurant } = useParams();
    const { value, handleChange } = useTabs(0);
    const { lunchfilter, imageMap } = linkService;
    const filters = Object.values(lunchfilter);

    const [currRestaurant, setCurrRestaurant] = useState(
        allrestaurants.find((rest) => rest.name === restaurant)
    );

    if (!currRestaurant) return;
    const [dishes, setDishes] = useState(currRestaurant?.dishes || []);

    useEffect(() => {
        setDishes(currRestaurant?.dishes || []);
    }, [restaurant]);

    if (!restaurant) return;
    return (
        <Box sx={{ width: "100%" }} className="restaurant-page">
            <img
                src={imageMap[currRestaurant.name]}
                alt={currRestaurant.name}
                className="hero-image"
            />
            <div className="hero-container flex flex-column">
                <h1 className="name">{currRestaurant.name}</h1>
                <h2 className="chef">{currRestaurant.chef}</h2>
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
