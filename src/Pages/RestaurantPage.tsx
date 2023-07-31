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
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

export const RestaurantPage = () => {
    let { restaurantId } = useParams();
    const { value, handleChange } = useTabs(0);
    const { lunchfilter, imageMap } = linkService;
    const filters = Object.values(lunchfilter);

    const [open, setOpen] = useState<boolean>(false);
    const [selectedDish, setSelectedDish] = useState<DishType | null>(null);

    const handleOpen = (dishId: string) => {
        const selectedDish = dishes.find((dish) => dish._Id === dishId);
        setSelectedDish(selectedDish);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [currRestaurant, setCurrRestaurant] = useState(
        allrestaurants.find((rest) => rest._Id === restaurantId)
    );

    if (!currRestaurant) return;
    const [dishes, setDishes] = useState(currRestaurant?.dishes || []);

    useEffect(() => {
        setDishes(currRestaurant?.dishes || []);
    }, [restaurantId]);

    if (!restaurantId) return;

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
