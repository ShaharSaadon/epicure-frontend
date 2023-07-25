import imageMap from "../../Services/link.service.ts";
import { Restaurant, Dish } from "../../Assets/data.ts";

interface DynamicCardProps {
    data: Dish | Restaurant;
}

export const DynamicCard = ({ data }: DynamicCardProps) => {
    return (
        <section className="dynamic-card flex flex-column">
            <img src={imageMap[data.name]} alt={data.name} className="claro" />
            <div className="card-info flex flex-column">
                <h1 className="card-title">{data.name}</h1>
                {data.type === "dish" ? (
                    <div className="card-content flex flex-column dish">
                        <p className="ingredients"> {data.ingredients}</p>
                        <p>{data.special}</p>
                        <p className="price">₪ {data.price}</p>
                    </div>
                ) : (
                    <div className="card-content flex flex-column restaurant">
                        <p> {data.chef}</p>
                        {/* <p>Stars: {data.stars}</p> */}
                    </div>
                )}
            </div>
        </section>
    );
};
