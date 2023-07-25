import spicy from "../../Assets/Images/HomePage/icons/spicy.svg";
import vegan from "../../Assets/Images/HomePage/icons/vegan.svg";
import vegitarian from "../../Assets/Images/HomePage/icons/vegitarian.svg";

export const OurIcons = () => {
    return (
        <div className="icons-container text-center">
            <h1 className="icon-title">THE MEANING OF OUR ICONS:</h1>
            <div className="our-icons flex flex-column items-center ">
                <div className="icon-type flex flex-column">
                    <img src={spicy} alt="spicy" className="icon" />
                    <p>Spicy</p>
                </div>
                <div className="icon-type flex flex-column">
                    <img src={vegitarian} alt="vegitarian" className="icon" />
                    <p>Vegitarian</p>
                </div>
                <div className="icon-type flex flex-column">
                    <img src={vegan} alt="vegan" className="icon" />
                    <p>Vegan</p>
                </div>
            </div>
        </div>
    );
};
