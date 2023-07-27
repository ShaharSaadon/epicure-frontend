import React from "react";
import { Restaurant } from "../../Assets/data.ts";
import { DynamicCard } from "../Dynamic/DynamicCard.tsx";

interface DynamicRestaurantslProps {
    filter: String;
}

export const DynamicRestaurants = ({ filter }: DynamicRestaurantslProps) => {
    return <div className="dynamic-restaurants ">{filter}</div>;
};
