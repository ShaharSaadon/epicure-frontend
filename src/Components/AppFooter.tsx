import logoSvg from "../Assets/Images/AppHeader/Logo.svg";

export const AppFooter = () => {
    return (
        <footer>
            <img src={logoSvg} alt="" />
            EPICURE
            <div className="google"></div>
            <div className="apple"></div>
            <div className="about-us">
                <h1>ABOUT US:</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    a lacus vel justo fermentum bibendum no eu ipsum. Cras porta
                    malesuada eros.
                </p>
            </div>
            <ul className="clean-list flex flex-column">
                <li>Contact Us</li>
                <li>Term of Use</li>
                <li>Privacy Policy</li>
            </ul>
        </footer>
    );
};
