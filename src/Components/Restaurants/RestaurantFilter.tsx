import arrowImg from "../../Assets/Images/Restaurants/arrow.png";
import { linkService } from "../../Services/link.service";
export const RestaurantFilter = () => {
    const { filterTypes } = linkService;
    return (
        <div className="restaurant-filter flex justify-center">
            <ul className="flex clean-list">
                {filterTypes.map((filter) => (
                    <li
                        key={filter.type}
                        className={`filter-type ${filter.type} flex items-center`}
                    >
                        <p>{filter.label}</p>
                        <img
                            src={arrowImg}
                            alt="arrow-down"
                            className="arrow-icon"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
