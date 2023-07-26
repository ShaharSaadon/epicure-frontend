import Logo from "../Assets/Images/AppHeader/Logo.svg";
import Bag from "../Assets/Images/AppHeader/Bag.svg";
import Profile from "../Assets/Images/AppHeader/Profile.svg";
import Search from "../Assets/Images/AppHeader/Search.svg";
import { linkService } from "../Services/link.service";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
export const AppHeader = () => {
    const [isHeaderOpen, setIsHeaderOpen] = useState(false);
    const [isBagOpen, setIsBagOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { mainNavLinks } = linkService;

    function handleClickHamburger() {
        setIsHeaderOpen((prevIsHeaderOpen) => !prevIsHeaderOpen);
    }
    function handleClickBag() {
        setIsBagOpen((prevIsBagOpen) => !prevIsBagOpen);
    }
    function handleClickSearch() {
        setIsSearchOpen((prevIsSearchOpen) => !prevIsSearchOpen);
    }

    return (
        <div className="app-header flex justify-between items-center">
            <div
                className={`hamburger ${isHeaderOpen ? "open" : ""}`}
                onClick={handleClickHamburger}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <img src={Logo} alt="Logo" className="logo" />
            <div className="right-nav flex">
                <img
                    src={Search}
                    alt="Search"
                    // className="search"
                    onClick={handleClickSearch}
                />
                <img src={Profile} alt="Profile" className="profile" />
                <img src={Bag} alt="Bag" onClick={handleClickBag} />
            </div>
            <div className=""></div>

            <nav
                className={`nav flex flex-column ${isHeaderOpen ? "open" : ""}`}
            >
                {mainNavLinks.map((link, index) => (
                    <NavLink key={index} to={link.path} className="nav-link">
                        {link.text}
                    </NavLink>
                ))}
            </nav>
            <div className={`bag ${isBagOpen ? "open" : ""}`}>
                <img src={Bag} alt="" />
                <h2>YOUR BAG IS EMPTY</h2>
            </div>
            <div className={`search ${isSearchOpen ? "open" : ""}`}>
                <h2>Search Box</h2>
            </div>
        </div>
    );
};
