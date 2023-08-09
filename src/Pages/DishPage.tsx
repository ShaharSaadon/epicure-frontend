import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal, openModal } from "../store/actions/modal.actions";
import { DynamicQuestion } from "../Components/Dynamic/DynamicQuestion";
import { iDynamicQuestion } from "../Services/link.service";
import { loadDish } from "../store/actions/restaurant.actions";
import { DishToOrder } from "../store/actions/cart.actions";
import { linkService } from "../Services/link.service";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { useParams } from "react-router-dom";
import { addToCart } from "../store/actions/cart.actions";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import plus from "../Assets/Images/Restaurants/plus.svg";
import menus from "../Assets/Images/Restaurants/menus.svg";

const DishPage = () => {
    let { dishId } = useParams<{ dishId: string }>();

    const { imageMap, dynamicQuestions } = linkService;
    const { isOpen } = useSelector(({ modalModule }) => modalModule);
    const { dish } = useSelector(({ restaurantModule }) => restaurantModule);

    const [dishToOrder, setDishToOrder] = useState({
        ...dish,
        side: "",
        changes: "",
        quantity: 1,
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(openModal());
        dispatch(loadDish(dishId));
    }, []);

    useEffect(() => {
        document.title = `Epicure | ${dish?.name}`;

        if (dish) {
            setDishToOrder({
                ...dish,
                side: "",
                changes: "",
                quantity: 1,
            });
        }
    }, [dish]);

    const handleCloseModal = () => {
        dispatch(toggleModal());
        navigate(-1);
    };

    const handleAddToCart = () => {
        console.log(dishToOrder);
        dispatch(addToCart(dishToOrder));
        navigate(-1);
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

    if (!dish) return null;

    return (
        <Modal
            open={isOpen}
            onClose={handleCloseModal}
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
                <img src={imageMap[dish.name]} alt="" className="dish-image" />

                <div className="dish-info">
                    <h1 className="dish-title">{dish.name}</h1>
                    <p className="ingredients">{dish.ingredients}</p>
                    {dynamicQuestions.map(
                        (question: iDynamicQuestion, index: number) => (
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
