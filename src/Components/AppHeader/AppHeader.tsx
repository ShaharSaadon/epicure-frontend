import LogoSvg from "../../Assets/Images/AppHeader/Logo.svg";
import ProfileSvg from "../../Assets/Images/AppHeader/Profile.svg";
import SearchSvg from "../../Assets/Images/AppHeader/Search.svg";
import BagSvg from "../../Assets/Images/AppHeader/Bag.svg";
import { linkService } from "../../Services/link.service";
import { NavLink } from "react-router-dom";
import { Hamburger } from "./Hamburger";
import { Bag } from "./Bag";
import { Search } from "./Search";
import { useToggle } from "../../customHooks/useToggle";
import { Link } from "react-router-dom";

export const AppHeader = () => {
    const [isHeaderOpen, toggleHeader] = useToggle();
    const [isBagOpen, toggleBag] = useToggle();
    const [isSearchOpen, toggleSearch] = useToggle();
    const { mainNavLinks } = linkService;

    return (
        <div className="app-header flex justify-between items-center">
            <Hamburger
                isHeaderOpen={isHeaderOpen}
                toggleHeader={toggleHeader}
            />

            <Link to="/">
                <img src={LogoSvg} alt="Logo" className="logo" />
            </Link>

            <div className=""></div>
            <div className="right-nav flex">
                <img src={ProfileSvg} alt="Profile" className="profile" />
                <img
                    src={SearchSvg}
                    alt="Search"
                    className="search-icon"
                    onClick={toggleSearch}
                />
                <img
                    src={BagSvg}
                    alt="Bag"
                    className="bag-icon"
                    onClick={toggleBag}
                />
            </div>

            <nav
                className={`nav flex flex-column ${isHeaderOpen ? "open" : ""}`}
            >
                {mainNavLinks.map((link, index) => (
                    <NavLink key={index} to={link.path} className="nav-link">
                        {link.text}
                    </NavLink>
                ))}
            </nav>

            <Search isSearchOpen={isSearchOpen} toggleSearch={toggleSearch} />

            <Bag isBagOpen={isBagOpen} toggleBag={toggleBag} />
        </div>
    );
};
