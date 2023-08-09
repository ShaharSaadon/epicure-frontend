import { DynamicCarousel } from "../Dynamic/DynamicCarousel";
import { iChef } from "../../Services/link.service";
import { linkService } from "../../Services/link.service";
interface ChefOfTheWeekProps {
    chef: iChef;
}

export const ChefOfTheWeek: React.FC<ChefOfTheWeekProps> = ({ chef }) => {
    const { imageMap } = linkService;
    return (
        <div className="chef-container">
            <div className="chef-of-the-week">
                <h1 className="chef-title">CHEF OF THE WEEK:</h1>
                <div className="chef-box">
                    <img
                        src={imageMap[chef?.name]}
                        alt="Chef Yossi Shitrit"
                        className="chef-image"
                    />
                    <h1 className="chef-name flex justify-center">
                        {chef?.name}
                    </h1>
                </div>
                <p className="chef-description">{chef?.description}</p>
            </div>
            <DynamicCarousel
                title={
                    chef?.name?.split(" ")[0].toLocaleUpperCase() +
                    "'S RESTAURANT"
                }
                data={chef?.associatedRestaurants}
            />
        </div>
    );
};
