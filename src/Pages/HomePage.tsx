import { useEffect } from "react";
import { DynamicCarousel } from "../Components/Dynamic/DynamicCarousel";
import { ChefOfTheWeek } from "../Components/HomePage/ChefOfTheWeek";
import { HeroSection } from "../Components/HomePage/HeroSection";
import { OurIcons } from "../Components/HomePage/OurIcons";
import {
    loadChef,
    loadRestaurants,
    loadSignatureDish,
} from "../store/actions/restaurant.actions";
import { useDispatch, useSelector } from "react-redux";
import { Dish } from "../Services/link.service";
import { AppDispatch } from "../store";

export const HomePage = () => {
    let { signatureDish, chef, restaurants } = useSelector(
        ({ restaurantModule }) => restaurantModule
    );
    const dispatch: AppDispatch = useDispatch();
    const MOST_POPULAR = "MOST_POPULAR";
    const chefId = "64d35568a7e85c2bc2989dc7";
    useEffect(() => {
        document.title = `Epicure | Home Page`;

        dispatch(loadRestaurants(MOST_POPULAR) as any);
        dispatch(loadSignatureDish() as any);
        dispatch(loadChef(chefId) as any);
    }, []);

    const sortedRestaurants = [...(restaurants || [])].sort(
        (a, b) => b.stars - a.stars
    );
    if (Array.isArray(signatureDish)) {
        signatureDish = signatureDish.filter(
            (dish: Dish) => dish.signature === true
        );
    }

    const popularRestaurants = sortedRestaurants?.slice(0, 3);

    return (
        <div className="home-page">
            <HeroSection />
            <DynamicCarousel
                title="POPULAR RESTAURANT IN EPICURE:"
                data={popularRestaurants}
            />
            <DynamicCarousel title="SIGNATURE DISH OF:" data={signatureDish} />
            <OurIcons />
            <ChefOfTheWeek chef={chef} />
        </div>
    );
};
