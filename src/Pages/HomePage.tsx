import { HeroSection } from "../Components/HomePage/HeroSection";
import { DynamicCarousel } from "../Components/HomePage/DynamicCarousel.tsx";
import { OurIcons } from "../Components/HomePage/OurIcons";
import { ChefOfTheWeek } from "../Components/HomePage/ChefOfTheWeek";
import { popularRestaurants, bestDishes } from "../Assets/data.ts";
export const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <DynamicCarousel
                title="POPULAR RESTAURANT IN EPICURE:"
                data={popularRestaurants}
            />
            <DynamicCarousel title="SIGNATURE DISH OF:" data={bestDishes} />
            <OurIcons />
            <ChefOfTheWeek />
        </div>
    );
};
