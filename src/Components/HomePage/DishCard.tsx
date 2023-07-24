import claroImg from "../../Assets/Images/HomePage/claro.jpg";

interface DishCardProps {
    restaurantName: string;
    chefName: string;
}

export const DishCard = ({ restaurantName, chefName }: DishCardProps) => {
    return (
        <section className="dish-card">
            <img src={claroImg} alt="claro" className="claro" />
            <div className="dish-info flex flex-column">
                <h1>{restaurantName}</h1>
                <h4>{chefName}</h4>
            </div>
        </section>
    );
};
