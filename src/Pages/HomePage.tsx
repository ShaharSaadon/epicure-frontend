import { popularRestaurants, bestDishes } from "../Assets/data";
import { DynamicCarousel } from "../Components/Dynamic/DynamicCarousel";
import { ChefOfTheWeek } from "../Components/HomePage/ChefOfTheWeek";
import { HeroSection } from "../Components/HomePage/HeroSection";
import { OurIcons } from "../Components/HomePage/OurIcons";

export const HomePage = () => {
    return (
        <div className="home-page">
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
