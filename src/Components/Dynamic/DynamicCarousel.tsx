// Components/DynamicCarousel.tsx
import React from "react";
import doubleArrowSvg from "../../Assets/Images/HomePage/icons/double-arrow.svg";
import { Restaurant, Dish } from "../../Assets/data.ts";
import "swiper/css";
import { MobileCarousel } from "./MobileCarousel.tsx";
import { DekstopCarousel } from "./DekstopCarousel.tsx";
import { useDeviceDetect } from "../../customHooks/useDeviceDetect.ts";
import { Link } from "react-router-dom";

interface DynamicCarouselProps {
    title: string;
    data: (Dish | Restaurant)[];
}

export const DynamicCarousel: React.FC<DynamicCarouselProps> = ({
    title,
    data,
}) => {
    const { isDesktop } = useDeviceDetect();

    return (
        <div className="dynamic-carousel">
            <h1 className="title">{title}</h1>
            {isDesktop ? (
                <DekstopCarousel data={data} />
            ) : (
                <MobileCarousel data={data} />
            )}
            <Link to="/restaurants">
                <h3 className="all-restaurants flex items-center">
                    All Restaurants
                    <img src={doubleArrowSvg} alt="" className="arrow-icon" />
                </h3>
            </Link>
        </div>
    );
};
