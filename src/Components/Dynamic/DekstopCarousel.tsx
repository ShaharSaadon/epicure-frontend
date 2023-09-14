import { DynamicCard } from "./DynamicCard";
import { Restaurant, Dish } from "../../Services/link.service";

interface DekstopCarouselProps {
    data: (Dish | Restaurant)[];
}

export const DekstopCarousel = ({ data = [] }: DekstopCarouselProps) => {
    // Ensure data is always an array
    const dataArray = Array.isArray(data) ? data : [];

    return (
        <div className="dekstop-carousel ">
            {dataArray.map((item, index) => (
                <div key={index} className="carousel-item">
                    <DynamicCard data={item} />
                </div>
            ))}
        </div>
    );
};
