import { useEffect } from "react";
import { bestDishes } from "../Assets/data";
import { DynamicCarousel } from "../Components/Dynamic/DynamicCarousel";
import { ChefOfTheWeek } from "../Components/HomePage/ChefOfTheWeek";
import { HeroSection } from "../Components/HomePage/HeroSection";
import { OurIcons } from "../Components/HomePage/OurIcons";
import { loadRestaurants } from "../store/actions/restaurant.actions";
import { useDispatch, useSelector } from "react-redux";

export const HomePage = () => {
    const { restaurants } = useSelector(
        ({ restaurantModule }) => restaurantModule
    );
    const dispatch = useDispatch();
    const MOST_POPULAR = "MOST_POPULAR";

    useEffect(() => {
        document.title = `Epicure | Home Page`;
        dispatch(loadRestaurants(MOST_POPULAR));
    }, []);

    const sortedRestaurants = [...(restaurants || [])].sort(
        (a, b) => b.stars - a.stars
    );

    const popularRestaurants = sortedRestaurants.slice(0, 3);

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
