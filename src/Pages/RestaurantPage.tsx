import { CustomTabPanels } from "../Components/Dynamic/tab/CustomTabPanels";
import { CustomTabs } from "../Components/Dynamic/tab/CustomTabs";
import { restaurantService } from "../Services/restaurant.service";
import { allrestaurants } from "../Assets/data";
import { linkService } from "../Services/link.service";
import { useParams } from "react-router-dom";
import { useTabs } from "../customHooks/useTabs";
import { useMemo } from "react";
import { Box } from "@mui/material";
import clockSvg from "../Assets/Images/Restaurants/clock.svg";
import NotFoundPage from "./NotFoundPage";

const RestaurantPage = () => {
    const { restaurantId } = useParams<{ restaurantId: string }>();
    const { value, handleChange } = useTabs(0);
    const { lunchfilter, imageMap } = linkService;
    const filters = Object.values(lunchfilter);
    const OPEN_NOW = "Open now";
    const CLOSED = "Closed";

    const currRestaurant = allrestaurants.find(
        (rest) => rest._Id === restaurantId
    );
    const dishes = currRestaurant?.dishes || [];

    const filteredDishes = useMemo(
        () => restaurantService.filterDishes(value, dishes, filters),
        [value, dishes, filters]
    );

    if (!currRestaurant) return <NotFoundPage />;
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
                    <h2 className="mode-text">
                        {restaurantService.isOpenNow(currRestaurant.openHoures)
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
