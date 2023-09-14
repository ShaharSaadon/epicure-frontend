import heroImage from "../../Assets/Images/HomePage/hero-image.png";
import { Search } from "../Dynamic/Search";
export const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="img-container">
                <img
                    src={heroImage}
                    alt="Assorted dishes on a table"
                    className="hero-image"
                />
            </div>
            <div className="box flex flex-column items-center text-center">
                <h2 className="text">
                    Epicure works with the top chef restaurants in Tel Aviv
                </h2>

                <Search />
            </div>
        </section>
    );
};
