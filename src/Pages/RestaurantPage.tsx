import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { restaurantService } from "../Services/restaurant.service";
import { CustomTabPanels } from "../Components/Dynamic/tab/CustomTabPanels";
import { loadRestaurant } from "../store/actions/restaurant.actions";
import { linkService } from "../Services/link.service";
import { AppDispatch } from "../store";
import { CustomTabs } from "../Components/Dynamic/tab/CustomTabs";
import { useParams } from "react-router-dom";
import { useTabs } from "../customHooks/useTabs";
import { Box } from "@mui/material";

import clockSvg from "../Assets/Images/Restaurants/clock.svg";
import NotFoundPage from "./NotFoundPage";

const RestaurantPage = () => {
    const { restaurantId = "" } = useParams<{ restaurantId: string }>();
    const { value, handleChange } = useTabs(0);
    const { lunchfilter, imageMap } = linkService;
    const filters = Object.values(lunchfilter);
    const dispatch: AppDispatch = useDispatch();

    const OPEN_NOW = "Open now";
    const CLOSED = "Closed";

    const { restaurant } = useSelector(
        ({ restaurantModule }) => restaurantModule
    );

    const dishes = restaurant?.dishes || [];

    const filteredDishes = useMemo(
        () => restaurantService.filterDishes(value, dishes, filters),
        [value, dishes, filters]
    );

    useEffect(() => {
        document.title = `Epicure | ${restaurant?.name}`;
        dispatch(loadRestaurant(restaurantId) as any);
    }, [restaurantId]);

    if (!restaurant) return <NotFoundPage />;
    return (
        <Box sx={{ width: "100%" }} className="restaurant-page">
            <img
                src={imageMap[restaurant.name]}
                alt={restaurant.name}
                className="hero-image"
            />
            <div className="hero-container flex flex-column">
                <h1 className="name">{restaurant?.name}</h1>
                <h2 className="chef">{restaurant.chef?.name}</h2>
                <div className="mode flex">
                    <img src={clockSvg} alt="clock" className="clock-icon" />
                    <h2 className="mode-text">
                        {restaurantService.isOpenNow(restaurant.openHoures)
                            ? OPEN_NOW
                            : CLOSED}
                    </h2>
                </div>
            </div>
            <Box sx={{}} className="lunch-type flex justify-center">
                <CustomTabs
                    value={value}
                    handleChange={handleChange}
                    filters={filters}
                />
            </Box>
            <CustomTabPanels
                value={value}
                filters={filters}
                data={filteredDishes}
            />
        </Box>
    );
};

export default RestaurantPage;
