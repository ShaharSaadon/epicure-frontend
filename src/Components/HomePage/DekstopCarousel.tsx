import { DynamicCard } from "./DynamicCard.tsx";
import { Restaurant, Dish } from "../../Assets/data.ts";
import doubleArrowSvg from "../../Assets/Images/HomePage/icons/double-arrow.svg";

interface DekstopCarouselProps {
    data: (Dish | Restaurant)[];
}

export const DekstopCarousel = ({ data }: DekstopCarouselProps) => {
    return (
        <div className="dekstop-carousel ">
            {data.map((item, index) => (
                <div key={index} className="carousel-item">
                    <DynamicCard data={item} />
                </div>
            ))}
        </div>
    );
};
