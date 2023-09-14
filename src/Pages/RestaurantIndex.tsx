import { useDispatch, useSelector } from "react-redux";
import { RestaurantFilter } from "../Components/RestaurantFilter";
import { CustomTabPanels } from "../Components/Dynamic/tab/CustomTabPanels";
import { loadRestaurants } from "../store/actions/restaurant.actions";
import { linkService } from "../Services/link.service";
import { CustomTabs } from "../Components/Dynamic/tab/CustomTabs";
import { useEffect } from "react";
import { useTabs } from "../customHooks/useTabs";
import Box from "@mui/material/Box";
import React from "react";
import { AppDispatch } from "../store";

const RestaurantIndex: React.FC = () => {
    const { value, handleChange } = useTabs(0);
    const { restaurantFilter } = linkService;
    const filters = Object.values(restaurantFilter);
    const filtersKeys = Object.keys(restaurantFilter);
    const { restaurants } = useSelector(
        ({ restaurantModule }) => restaurantModule
    );
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        document.title = `Epicure | Restaurant List`;
        dispatch(loadRestaurants(filtersKeys[value]) as any);
    }, [value]);

    return (
        <Box sx={{ width: "100%" }} className="restaurant-index">
            <Box className="flex justify-center">
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
                data={restaurants}
            />
        </Box>
    );
};

export default RestaurantIndex;
