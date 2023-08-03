import logoSvg from "../Assets/Images/AooFooter/logo.svg";
import googlePlaySvg from "../Assets/Images/AooFooter/google.svg";
import appleSvg from "../Assets/Images/AooFooter/apple.svg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
export const AppFooter = () => {
    const { pathname } = useLocation();
    const [isHomePage, setisHomePage] = useState(pathname === "/");
    useEffect(() => {
        pathname === "/" ? setisHomePage(true) : setisHomePage(false);
    }, [pathname]);

    return (
        <footer>
            {isHomePage ? (
                <div className="main-footer">
                    <img src={logoSvg} alt="logo" className="logo" />
                    <div className="download-boxes">
                        <div className="google download-box flex items-center justify-center">
                            <img
                                src={googlePlaySvg}
                                alt="google play logo"
                                className="icon"
                            />
                            <div className="text flex flex-column items-center">
                                <p>Get it on</p>
                                <p>Google Play</p>
                            </div>
                        </div>
                        <div className="apple download-box flex items-center justify-center">
                            <img
                                src={appleSvg}
                                alt="apple logo"
                                className="icon"
                            />
                            <div className="text flex flex-column items-center">
                                <p>Download on the</p>
                                <p>App Store</p>
                            </div>
                        </div>
                    </div>

                    <div className="about">
                        <h1 className="about-title">ABOUT US:</h1>
                        <p className="about-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. In a lacus vel justo fermentum bibendum non eu
                            ipsum. Cras porta malesuada eros, eget blandit
                            turpis suscipit at. Vestibulum sed massa in magna
                            sodales porta. Vivamus elit urna, dignissim a
                            vestibulum.
                        </p>
                        <p className="about-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. In a lacus vel justo fermentum bibendum no eu
                            ipsum. Cras porta malesuada eros.
                        </p>
                    </div>
                </div>
            ) : (
                ""
            )}
            <ul className="footer-nav clean-list flex ">
                <li>Contact Us</li>
                <li>Term of Use</li>
                <li>Privacy Policy</li>
            </ul>
        </footer>
    );
};
