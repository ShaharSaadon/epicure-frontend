import LogoSvg from "../../Assets/Images/AppHeader/Logo.svg";

import { Hamburger } from "./Hamburger";
import { Cart } from "./Cart";
import { SearchHeader } from "./SearchHeader";
import { useToggle } from "../../customHooks/useToggle";
import { Link } from "react-router-dom";
import { MobileNav } from "./MobileNav";
import { Actions } from "./Actions";

export const AppHeader = () => {
    const [isHeaderOpen, toggleHeader] = useToggle();
    const [isCartOpen, toggleCart] = useToggle();
    const [isSearchOpen, toggleSearch] = useToggle();

    return (
        <div className="app-header flex justify-between items-center">
            <Hamburger
                isHeaderOpen={isHeaderOpen}
                toggleHeader={toggleHeader}
            />

            <Link to="/">
                <img src={LogoSvg} alt="Logo" className="logo" />
            </Link>

            <Actions toggleSearch={toggleSearch} toggleCart={toggleCart} />

            <MobileNav
                isHeaderOpen={isHeaderOpen}
                toggleHeader={toggleHeader}
            />

            <SearchHeader
                isSearchOpen={isSearchOpen}
                toggleSearch={toggleSearch}
            />

            <Cart isCartOpen={isCartOpen} toggleCart={toggleCart} />
        </div>
    );
};
