import { HeroSection } from "../Components/HomePage/HeroSection";
import { CarouselDishes } from "../Components/HomePage/CarouselDishes";
import { SignatureDishOf } from "../Components/HomePage/SignatureDishOf";
export const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <CarouselDishes title="POPULAR RESTAURANT IN EPICURE:" />
            <CarouselDishes title="SIGNATURE DISH OF:" />
            <SignatureDishOf />
        </div>
    );
};
