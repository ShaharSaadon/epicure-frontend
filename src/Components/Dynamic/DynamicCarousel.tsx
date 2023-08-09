import { Restaurant, Dish } from "../../Services/link.service";
import { DekstopCarousel } from "./DekstopCarousel";
import { useDeviceDetect } from "../../customHooks/useDeviceDetect";
import { MobileCarousel } from "./MobileCarousel";
import { Link } from "react-router-dom";
import doubleArrowSvg from "../../Assets/Images/HomePage/icons/double-arrow.svg";
import "swiper/css";

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
                    <img
                        src={doubleArrowSvg}
                        alt="Double arrow icon"
                        className="arrow-icon"
                    />
                </h3>
            </Link>
        </div>
    );
};
