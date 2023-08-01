import {
    CustomTabPanels,
    CustomTabs,
} from "../Components/Dynamic/TabsComponent";
import { useParams } from "react-router-dom";
import { allrestaurants } from "../Assets/data";
import { linkService } from "../Services/link.service";
import { useTabs } from "../customHooks/useTabs";
import { Box } from "@mui/material";
import clockSvg from "../Assets/Images/Restaurants/clock.svg";

export const RestaurantPage = () => {
    const { lunchfilter, imageMap } = linkService;
    const { value, handleChange } = useTabs(0);
    const { restaurantId } = useParams();

    const filters = Object.values(lunchfilter);

    const currRestaurant = allrestaurants.find(
        (rest) => rest._Id === restaurantId
    );
    const dishes = currRestaurant?.dishes;

    const requestedDishes = () => {
        switch (value) {
            case 0: //Breakfast
                console.log("filters[0]", filters);
                return dishes.filter((dish) => dish.dishType === filters[0]);
            case 1: //Lanch
                return dishes.filter((dish) => dish.dishType === filters[1]);
            case 2: //Dinner
                return dishes.filter((dish) => dish.dishType === filters[2]);

            default:
                return [];
        }
    };

    if (!currRestaurant) return;
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
            <CustomTabPanels
                value={value}
                filters={filters}
                data={requestedDishes()}
            />
        </Box>
    );
};
