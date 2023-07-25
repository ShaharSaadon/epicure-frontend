import ChefOfTheWeekImg from "../../Assets/Images/HomePage/chef-of-the-week.jpg";
import { DynamicCarousel } from "./DynamicCarousel";
import { chefOfTheWeekRestaurants } from "../../Assets/data";

export const ChefOfTheWeek = () => {
    return (
        <div className="chef-container">
            <div className="chef-of-the-week">
                <h1 className="chef-title">CHEF OF THE WEEK:</h1>
                <div className="chef-box">
                    <img src={ChefOfTheWeekImg} alt="" />
                    <h1 className="chef-name flex justify-center">
                        Yossi Shitrit
                    </h1>
                </div>
                <p className="chef-description">
                    Chef Yossi Shitrit has been living and breathing his
                    culinary dreams for more than two decades, including running
                    the kitchen in his first restaurant, the fondly-remembered
                    Violet, located in Moshav Udim. Shitrit's creativity and
                    culinary acumen born of long experience are expressed in the
                    every detail of each and every dish.
                </p>
            </div>
            <DynamicCarousel
                title="Yossi's Restaurants"
                data={chefOfTheWeekRestaurants}
            />
        </div>
    );
};
