import imageMap from "../../Services/link.service.ts";
import { Restaurant, Dish } from "../../Assets/data.ts";

interface DynamicCardProps {
    data: Dish | Restaurant;
}

export const DynamicCard = ({ data }: DynamicCardProps) => {
    const getContent = () => {
        if (data.type === "dish") {
            return (
                <div className="card-content flex flex-column">
                    <p className="ingredients"> {data.ingredients}</p>
                    <p>{data.special}</p>
                    <p>{data.price}</p>
                </div>
            );
        } else if (data.type === "restaurant") {
            return (
                <div className="card-content flex flex-column">
                    <p> {data.chef}</p>
                    {/* <p>Stars: {data.stars}</p> */}
                </div>
            );
        }
    };

    return (
        <section className="dynamic-card">
            <img src={imageMap[data.name]} alt={data.name} className="claro" />
            <div className="card-info flex flex-column">
                <h1 className="card-title">{data.name}</h1>
                {getContent()}
            </div>
        </section>
    );
};
