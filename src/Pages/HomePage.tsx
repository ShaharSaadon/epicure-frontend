import { HeroSection } from "../Components/HomePage/HeroSection";
import { DynamicCarousel } from "../Components/Dynamic/DynamicCarousel";
import { OurIcons } from "../Components/HomePage/OurIcons";
import { ChefOfTheWeek } from "../Components/HomePage/ChefOfTheWeek";
import { popularRestaurants, bestDishes } from "../Assets/data";

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
