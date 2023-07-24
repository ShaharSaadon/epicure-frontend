import { DynamicCard } from "./DynamicCard.tsx";
import doubleArrowSvg from "../../Assets/Images/HomePage/icons/double-arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Restaurant, Dish } from "../../Assets/data.ts";
import "swiper/css";

interface DynamicCarouselProps {
    title: string;
    data: (Dish | Restaurant)[];
}

export const DynamicCarousel = ({ title, data }: DynamicCarouselProps) => {
    return (
        <div>
            <h1 className="title">{title}</h1>

            <Swiper
                spaceBetween={24}
                slidesPerView={1.5}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <DynamicCard data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <h3 className="all-restaurants flex items-center">
                All Restaurants
                <img src={doubleArrowSvg} alt="" className="arrow-icon" />
            </h3>
        </div>
    );
};
