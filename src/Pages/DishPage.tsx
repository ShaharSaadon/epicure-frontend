import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    DishToOrder,
    setCurrentDish,
} from "../store/actions/restaurant.actions";

import { allrestaurants } from "../Assets/data";
import { linkService } from "../Services/link.service";
import { useNavigate } from "react-router-dom";
import { toggleModal, openModal } from "../store/actions/modal.actions";
import { IconButton } from "@mui/material";
import { useParams } from "react-router-dom";
import { Modal } from "@mui/material";
import { DynamicQuestion } from "../Components/Dynamic/DynamicQuestion";
import CloseIcon from "@mui/icons-material/Close";
import plus from "../Assets/Images/Restaurants/plus.svg";
import menus from "../Assets/Images/Restaurants/menus.svg";
import { addToCart } from "../store/actions/cart.actions";
interface DynamicQuestion {
    title: string;
    type: string;
    options: string[];
}

const DishPage = () => {
    3;
    let { restaurantId, dishId } = useParams();

    const { imageMap, dynamicQuestions } = linkService;
    const { isOpen } = useSelector(({ modalModule }) => modalModule);
    const { currentDish } = useSelector(
        ({ restaurantModule }) => restaurantModule
    );

    const { cart } = useSelector(({ cartModule }) => cartModule);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [dishToOrder, setDishToOrder] = useState({
        ...currentDish,
        side: "",
        changes: "",
        quantity: 1,
    });

    useEffect(() => {
        dispatch(openModal());

        const foundRestaurant = allrestaurants.find(
            (rest) => rest._Id === restaurantId
        );

        const dishes = foundRestaurant?.dishes || [];
        const foundDish = dishes.find((dish) => dish._Id === dishId);

        if (foundDish) dispatch(setCurrentDish(foundDish));

        setDishToOrder({
            ...currentDish,
            side: "",
            changes: "",
            quantity: 1,
        });
    }, [currentDish]);

    const handleCloseModal = () => {
        dispatch(toggleModal());
        navigate(-1);
    };

    const handleAddToCart = () => {
        dispatch(addToCart(dishToOrder));
    };

    const handleQuantity = (operator: number) => {
        setDishToOrder((prevDishToOrder: DishToOrder) => ({
            ...prevDishToOrder,
            quantity: prevDishToOrder.quantity + operator,
        }));
    };

    const handleChange = (field: string, value: string) => {
        setDishToOrder((prevDishToOrder: DishToOrder) => ({
            ...prevDishToOrder,
            [field]: value,
        }));
    };

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

                {/* {JSON.stringify(cart, null, 2)} */}

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
                                    handleChange(question.idQuestion, value)
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

                    <button className="add-bug-btn" onClick={handleAddToCart}>
                        ADD TO BAG
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default DishPage;
