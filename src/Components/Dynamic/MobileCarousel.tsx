import { Swiper, SwiperSlide } from "swiper/react";
import { DynamicCard } from "./DynamicCard.tsx";
import { Restaurant, Dish } from "../../Services/link.service.ts";

interface MobileCarouselProps {
    data: (Dish | Restaurant)[];
}

export const MobileCarousel = ({ data }: MobileCarouselProps) => {
    return (
        <div>
            <Swiper spaceBetween={24} slidesPerView={1.5}>
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <DynamicCard data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
