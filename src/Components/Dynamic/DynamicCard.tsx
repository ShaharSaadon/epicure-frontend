import { Restaurant, Dish } from "../../Services/link.service";
import { Link, useParams } from "react-router-dom";
import { linkService } from "../../Services/link.service";
import { toggleModal } from "../../store/actions/modal.actions";
import { useDispatch } from "react-redux";
import { Rating } from "@mui/material";

interface DynamicCardProps {
    data: Dish | Restaurant;
}

export const DynamicCard = ({ data }: DynamicCardProps) => {
    console.log(data);
    const { imageMap } = linkService;
    const isRestaurant = data.type !== "dish";
    const dispatch = useDispatch();
    const { restaurantId } = useParams<{ restaurantId: string }>();

    const handleOpenModal = () => {
        if (!isRestaurant) {
            dispatch(toggleModal()); // Open the modal
        }
    };
    console.log(data);

    if (data.type === "restaurant") {
        if (Array.isArray(data.chef) && data.chef.length) {
            data.chef = data.chef[0];
        }
    }

    return (
        <Link
            to={
                isRestaurant
                    ? `/restaurants/${data._id}`
                    : `/restaurants/${restaurantId}/${data._id}`
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
                            <p className="chef-name"> {data?.chef?.name}</p>
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
