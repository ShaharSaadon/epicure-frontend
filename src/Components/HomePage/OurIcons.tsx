import spicy from "../../Assets/Images/HomePage/icons/spicy.svg";
import vegan from "../../Assets/Images/HomePage/icons/vegan.svg";
import vegitarian from "../../Assets/Images/HomePage/icons/vegitarian.svg";

export const OurIcons = () => {
    return (
        <div className="our-icons flex flex-column items-center text-center">
            <h1>THE MEANING OF OUR ICONS:</h1>
            <div className="icon-type flex flex-column">
                <img src={spicy} alt="spicy" className="spicy" />
                <p>Spicy</p>
            </div>
            <div className="icon-type flex flex-column">
                <img src={vegitarian} alt="vegitarian" className="vegitarian" />
                <p>Vegitarian</p>
            </div>
            <div className="icon-type flex flex-column">
                <img src={vegan} alt="vegan" className="vegan" />
                <p>Vegan</p>
            </div>
        </div>
    );
};
