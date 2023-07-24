import spicy from "../../Assets/Images/HomePage/spicy.svg";
import vegan from "../../Assets/Images/HomePage/vegan.svg";
import vegitarian from "../../Assets/Images/HomePage/vegitarian.svg";

export const SignatureDishOf = () => {
    return (
        <div className="signature-dish flex flex-column items-center text-center">
            <h1>SIGNATURE DISH OF:</h1>
            <div className="dish-type flex flex-column">
                <img src={spicy} alt="spicy" className="spicy" />
                <p>Spicy</p>
            </div>
            <div className="dish-type flex flex-column">
                <img src={vegitarian} alt="vegitarian" className="vegitarian" />
                <p>Vegitarian</p>
            </div>
            <div className="dish-type flex flex-column">
                <img src={vegan} alt="vegan" className="vegan" />
                <p>Vegan</p>
            </div>
        </div>
    );
};
