import { DishCard } from "./DishCard.tsx";
import doubleArrowSvg from "../../Assets/Images/HomePage/double-arrow.svg";

interface CarouselDishesProps {
    title: string;
}
export const CarouselDishes = ({ title }: CarouselDishesProps) => {
    return (
        <div>
            <h1 className="title">{title}</h1>

            <DishCard restaurantName="Claro" chefName="Ran Shmueli" />

            <DishCard restaurantName="Claro" chefName="Ran Shmueli" />

            <h3 className="all-restaurants flex items-center">
                All Restaurants
                <img src={doubleArrowSvg} alt="" className="arrow-icon" />
            </h3>
        </div>
    );
};
