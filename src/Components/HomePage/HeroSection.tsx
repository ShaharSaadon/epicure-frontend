import heroImage from "../../Assets/Images/HomePage/hero-image.png";
import Search from "../../Assets/Images/AppHeader/Search.svg";
export const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="img-container">
                <img src={heroImage} alt="dishes" className="hero-image" />
            </div>
            <div className="box flex flex-column items-center text-center">
                <h2 className="text">
                    Epicure works with the top chef restaurants in Tel Aviv
                </h2>
                <div className="search flex">
                    <img src={Search} alt="" className="search-icon" />
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search for restaurants cuisine, chef"
                    />
                </div>
            </div>
        </section>
    );
};
