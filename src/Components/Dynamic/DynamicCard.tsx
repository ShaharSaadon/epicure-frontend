import { linkService } from "../../Services/link.service.ts";
import { Restaurant, Dish } from "../../Assets/data.ts";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

interface DynamicCardProps {
    data: Dish | Restaurant;
}

export const DynamicCard = ({ data }: DynamicCardProps) => {
    const { imageMap } = linkService;
    const isRestaurant = data.type !== "dish";

    return (
        <Link to={data.name}>
            <section className="dynamic-card flex flex-column">
                <img
                    src={imageMap[data.name]}
                    alt={data.name}
                    className="card-image"
                />
                <div className="card-info flex flex-column">
                    <h1 className="card-title">{data.name}</h1>
                    {isRestaurant ? (
                        <div className="card-content flex flex-column restaurant">
                            <p> {data.chef}</p>
                            {data.stars && (
                                <Rating
                                    name="read-only"
                                    value={data.stars}
                                    readOnly
                                    className="rating"
                                />
                            )}
                        </div>
                    ) : (
                        <div className="card-content flex flex-column dish">
                            <p className="ingredients"> {data.ingredients}</p>
                            <p>{data.special}</p>
                            <p className="price">₪ {data.price}</p>
                        </div>
                    )}
                </div>
            </section>
        </Link>
    );
};
