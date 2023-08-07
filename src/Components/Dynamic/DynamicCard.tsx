import { linkService } from "../../Services/link.service";
import { Restaurant, Dish } from "../../Assets/data";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import { toggleModal } from "../../store/actions/modal.actions";
import { useDispatch } from "react-redux";

interface DynamicCardProps {
    data: Dish | Restaurant;
}

export const DynamicCard = ({ data }: DynamicCardProps) => {
    const { imageMap } = linkService;
    const isRestaurant = data.type !== "dish";
    const dispatch = useDispatch();

    const handleOpenModal = () => {
        if (!isRestaurant) {
            dispatch(toggleModal()); // Open the modal
        }
    };

    return (
        <Link
            to={
                isRestaurant
                    ? `/restaurants/${data._id}`
                    : `/restaurants/${data.restaurantId}/${data._id}`
            }
            onClick={handleOpenModal}
        >
            <section className="dynamic-card flex flex-column">
                <img
                    src={imageMap[data.name]}
                    alt={data.name}
                    className="card-image"
                />
                <div className="card-info flex flex-column">
                    <h1 className="card-title">{data.name}</h1>
                    {isRestaurant ? (
                        <div className="card-content flex flex-column restaurant">
                            <p className="chef-name"> {data.chef}</p>
                            {data.stars && (
                                <Rating
                                    name="read-only"
                                    value={data.stars}
                                    readOnly
                                    className="rating flex justify-center"
                                />
                            )}
                        </div>
                    ) : (
                        <div className="card-content flex flex-column dish">
                            <p className="ingredients"> {data.ingredients}</p>
                            {data.special ? (
                                <img
                                    src={imageMap[data.special]}
                                    alt=""
                                    className="icon-special"
                                />
                            ) : (
                                ""
                            )}
                            <p className="price">₪ {data.price}</p>
                        </div>
                    )}
                </div>
            </section>
        </Link>
    );
};
