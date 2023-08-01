import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    setCurrentRestaurant,
    setCurrentDish,
} from "../store/actions/restaurant.actions";

import { allrestaurants } from "../Assets/data";
import { linkService } from "../Services/link.service";
import { useNavigate } from "react-router-dom";
import { toggleModal, openModal } from "../store/actions/modal.actions";
import { IconButton } from "@mui/material";
import { useParams } from "react-router-dom";
import { Modal } from "@mui/material";
import { Dish } from "../Assets/data";
import { DynamicQuestion } from "../Components/Dynamic/DynamicQuestion";
import CloseIcon from "@mui/icons-material/Close";
import plus from "../Assets/Images/Restaurants/plus.svg";
import menus from "../Assets/Images/Restaurants/menus.svg";
interface DynamicQuestion {
    title: string;
    type: string;
    options: string[];
}

const DishPage = () => {
    let { restaurantId, dishId } = useParams();

    const { imageMap, dynamicQuestions } = linkService;
    const { isOpen } = useSelector(({ modalModule }) => modalModule);
    const { currentRestaurant, currentDish } = useSelector(
        ({ restaurantModule }) => restaurantModule
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(openModal());

        const foundRestaurant = allrestaurants.find(
            (rest) => rest._Id === restaurantId
        );

        if (foundRestaurant) dispatch(setCurrentRestaurant(foundRestaurant)); // Set the current restaurant

        const dishes = foundRestaurant?.dishes || [];
        const foundDish = dishes.find((dish) => dish._Id === dishId);

        if (foundDish) dispatch(setCurrentDish(foundDish)); // Set the current dish
    }, [currentDish]);

    const handleCloseModal = () => {
        dispatch(toggleModal());
        navigate(-1);
    };

    const [dishToOrder, setDishToOrder] = useState({
        side: "",
        changes: "",
        quantity: 1,
    });
    const handleQuantity = (operator: number) => {
        setDishToOrder((prevDishToOrder) => ({
            ...prevDishToOrder,
            quantity: prevDishToOrder.quantity + operator,
        }));
    };

    const handleChange = (field: string, value: string) => {
        setDishToOrder((prev) => ({
            ...prev,
            [field]: value,
        }));
    };
    console.log(dishToOrder);

    if (!currentDish) return null;

    return (
        <Modal
            open={isOpen}
            onClose={handleCloseModal}
            // BackdropComponent={Backdrop}
            BackdropProps={{ open: false }}
            className="modal"
        >
            <div className="dish-page">
                <IconButton
                    className="close-container"
                    onClick={handleCloseModal}
                >
                    <CloseIcon className="close-button" />
                </IconButton>
                <img
                    src={imageMap[currentDish.name]}
                    alt=""
                    className="dish-image"
                />

                <div className="dish-info">
                    <h1 className="dish-title">{currentDish.name}</h1>
                    <p className="ingredients">{currentDish.ingredients}</p>
                    {dynamicQuestions.map(
                        (question: DynamicQuestion, index: Number) => (
                            <DynamicQuestion
                                key={index}
                                title={question.title}
                                type={question.type}
                                options={question.options}
                                onChange={(value: string) =>
                                    handleChange(question.title, value)
                                }
                            />
                        )
                    )}
                    <div className="quantity">
                        <h1 className="question-title">Quantity</h1>
                        <div className="quantity-box flex items-center">
                            <img
                                src={menus}
                                alt=""
                                className="icon"
                                onClick={() => handleQuantity(-1)}
                            />
                            {dishToOrder.quantity}
                            <img
                                src={plus}
                                alt=""
                                className="icon"
                                onClick={() => handleQuantity(1)}
                            />
                        </div>
                    </div>

                    <button className="add-bug-btn">ADD TO BAG</button>
                </div>
            </div>
        </Modal>
    );
};

export default DishPage;
