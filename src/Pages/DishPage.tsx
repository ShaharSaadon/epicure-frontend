import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allrestaurants } from "../Assets/data";
import { linkService } from "../Services/link.service";
import { useNavigate } from "react-router-dom";
import { toggleModal } from "../store/actions/modal.actions";
import { IconButton } from "@mui/material";
import { useParams } from "react-router-dom";
import { Checkbox } from "@mui/material";
import { Modal } from "@mui/material";
import { Dish } from "../Assets/data";
import CloseIcon from "@mui/icons-material/Close";

export const DishPage = () => {
    let { restaurantId, dishId } = useParams();
    const [currDish, setCurrDish] = useState<Dish | null>(null);
    const { isOpen } = useSelector(({ modalModule }) => modalModule);
    const { imageMap } = linkService;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const label = { inputProps: { "aria-label": "Checkbox demo" } };

    useEffect(() => {
        if (restaurantId && dishId) {
            const restaurant = allrestaurants.find(
                (rest) => rest._Id === restaurantId
            );
            const dishes = restaurant?.dishes || [];
            const foundDish = dishes.find((dish) => dish._Id === dishId);
            setCurrDish(foundDish || null);
        }
    }, [restaurantId, dishId]);

    const handleCloseModal = () => {
        dispatch(toggleModal());
        navigate(-1);
    };

    if (!currDish) return null;

    return (
        <Modal
            open={isOpen}
            onClose={handleCloseModal}
            // BackdropComponent={Backdrop}
            BackdropProps={{ open: false }}
        >
            <div className="dish-page">
                <img
                    src={imageMap[currDish.name]}
                    alt=""
                    className="dish-image"
                />
                <IconButton className="close-button" onClick={handleCloseModal}>
                    <CloseIcon />
                </IconButton>
                <div className="dish-info">
                    <h1 className="dish-title">{currDish.name}</h1>
                    <p className="ingredients">{currDish.ingredients}</p>
                    <div className="side">
                        <h1 className="question-title">Choose a Side</h1>
                        <input
                            type="radio"
                            value="white-bread"
                            name="side"
                        />{" "}
                        White Bread
                        <input
                            type="radio"
                            value="sticky-rise"
                            name="side"
                        />{" "}
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
        </Modal>
    );
};
