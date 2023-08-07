import { CustomTabPanels } from "../Components/Dynamic/tab/CustomTabPanels";
import { RestaurantFilter } from "../Components/RestaurantFilter";
import { linkService } from "../Services/link.service";
import { CustomTabs } from "../Components/Dynamic/tab/CustomTabs";
import { useTabs } from "../customHooks/useTabs";
import { useEffect, useMemo } from "react";
import { loadRestaurants } from "../store/actions/restaurant.actions";

import React from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";

const RestaurantIndex: React.FC = () => {
    const { value, handleChange } = useTabs(0);
    const { restaurantFilter } = linkService;
    const filters = Object.values(restaurantFilter);
    const dispatch = useDispatch();
    const { restaurants } = useSelector(
        ({ restaurantModule }) => restaurantModule
    );

    // const filteredRestaurants = useMemo(
    //     () => restaurantService.filterRestaurants(value, restaurants),
    //     [value]
    // );

    useEffect(() => {
        console.log(restaurants);
        document.title = `Epicure | Restaurant List`;
        dispatch(loadRestaurants());
    }, []);

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
            {/* {JSON.stringify(restaurants, null, 2)} */}
            {JSON.stringify(restaurants, null, 2)}
            <CustomTabPanels
                value={value}
                filters={filters}
                data={restaurants}
            />
        </Box>
    );
};

export default RestaurantIndex;
