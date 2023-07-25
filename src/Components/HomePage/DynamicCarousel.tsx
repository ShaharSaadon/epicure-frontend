import doubleArrowSvg from "../../Assets/Images/HomePage/icons/double-arrow.svg";
import { Restaurant, Dish } from "../../Assets/data.ts";
import "swiper/css";
import { useMediaQuery } from "react-responsive";
import { MobileCarousel } from "./MobileCarousel.tsx";
import { DekstopCarousel } from "./DekstopCarousel.tsx";
interface DynamicCarouselProps {
    title: string;
    data: (Dish | Restaurant)[];
}

export const DynamicCarousel = ({ title, data }: DynamicCarouselProps) => {
    const isDekstop = useMediaQuery({
        query: "(min-width: 480px)",
    });

    console.log("isPhone", isDekstop);
    return (
        <div className="dynamic-carousel">
            <h1 className="title">{title}</h1>
            {isDekstop ? (
                <DekstopCarousel data={data} />
            ) : (
                <MobileCarousel data={data} />
            )}
            <h3 className="all-restaurants flex items-center">
                All Restaurants
                <img src={doubleArrowSvg} alt="" className="arrow-icon" />
            </h3>
        </div>
    );
};
