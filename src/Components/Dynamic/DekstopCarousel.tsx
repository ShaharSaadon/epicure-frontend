import { DynamicCard } from "./DynamicCard";
import { Restaurant, Dish } from "../../Assets/data";

interface DekstopCarouselProps {
    data: (Dish | Restaurant)[];
}

export const DekstopCarousel = ({ data = [] }: DekstopCarouselProps) => {
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
