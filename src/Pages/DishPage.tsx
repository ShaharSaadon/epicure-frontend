import { useState } from "react";
import { allrestaurants } from "../Assets/data";
import { useParams } from "react-router-dom";
import { linkService } from "../Services/link.service";
import { Checkbox } from "@mui/material";

export const DishPage = () => {
    let { restaurant, dish } = useParams();
    const currRestaurant = allrestaurants.find(
        (rest) => rest.name === restaurant
    );
    const { imageMap } = linkService;

    // if (!currRestaurant) return;
    const [dishes, setDishes] = useState(currRestaurant?.dishes || []);

    const currDish = dishes.find((dishObj) => dishObj.name === dish);
    if (!currDish) return null;

    const label = { inputProps: { "aria-label": "Checkbox demo" } };

    return (
        <div className="dish-page">
            <img src={imageMap[currDish.name]} alt="" className="dish-image" />
            <div className="dish-info">
                <h1 className="dish-title">{currDish.name}</h1>
                <p className="ingredients">{currDish.ingredients}</p>
                <div className="side">
                    <h1 className="question-title">Choose a Side</h1>
                    <input type="radio" value="white-bread" name="side" /> White
                    Bread
                    <input type="radio" value="sticky-rise" name="side" />{" "}
                    Sticky rice
                </div>
                <div className="changes">
                    <h1 className="question-title">Changes</h1>
                    <Checkbox {...label} /> without peanuts
                    <Checkbox {...label} /> Stickey less spicy
                </div>
                <div className="quantity">
                    <h1 className="question-title">Quantity</h1>
                    <input type="text" />
                </div>
            </div>
        </div>
    );
};
