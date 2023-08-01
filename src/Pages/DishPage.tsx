import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allrestaurants } from "../Assets/data";
import { linkService } from "../Services/link.service";
import { useNavigate } from "react-router-dom";
import { toggleModal, openModal } from "../store/actions/modal.actions";
import { IconButton } from "@mui/material";
import { useParams } from "react-router-dom";
import { Modal } from "@mui/material";
import { Dish } from "../Assets/data";
import CloseIcon from "@mui/icons-material/Close";
import { DynamicQuestion } from "../Components/Dynamic/DynamicQuestion";

interface DynamicQuestion {
    title: string;
    type: string;
    options: string[];
}

export const DishPage = () => {
    let { restaurantId, dishId } = useParams();

    const [currDish, setCurrDish] = useState<Dish | null>(null);
    const { imageMap, dynamicQuestions } = linkService;
    const { isOpen } = useSelector(({ modalModule }) => modalModule);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const label = { inputProps: { "aria-label": "Checkbox demo" } };

    useEffect(() => {
        dispatch(openModal());
        const restaurant = allrestaurants.find(
            (rest) => rest._Id === restaurantId
        );

        const dishes = restaurant?.dishes || [];
        const foundDish = dishes.find((dish) => dish._Id === dishId);
        if (foundDish) setCurrDish(foundDish);
    }, [currDish]);

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
                <IconButton
                    className="close-container"
                    onClick={handleCloseModal}
                >
                    <CloseIcon className="close-button" />
                </IconButton>
                <img
                    src={imageMap[currDish.name]}
                    alt=""
                    className="dish-image"
                />

                <div className="dish-info">
                    <h1 className="dish-title">{currDish.name}</h1>
                    <p className="ingredients">{currDish.ingredients}</p>
                    {dynamicQuestions.map(
                        (question: DynamicQuestion, index: Number) => (
                            <DynamicQuestion
                                key={index}
                                title={question.title}
                                type={question.type}
                                options={question.options}
                            />
                        )
                    )}
                    <div className="quantity">
                        <h1 className="question-title">Quantity</h1>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </Modal>
    );
};
