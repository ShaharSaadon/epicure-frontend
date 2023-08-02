import LogoSvg from "../../Assets/Images/AppHeader/Logo.svg";
import { Hamburger } from "./Hamburger";
import { Cart } from "./Cart";
import { SearchHeader } from "./SearchHeader";
import { useToggle } from "../../customHooks/useToggle";
import { Link } from "react-router-dom";
import { MobileNav } from "./MobileNav";
import { Actions } from "./Actions";
import { DekstopNav } from "./DekstopNav";
import { useEffect } from "react";
import { Login } from "./Login";
export const AppHeader = () => {
    const [isHeaderOpen, toggleHeader] = useToggle();
    const [isCartOpen, toggleCart] = useToggle();
    const [isSearchOpen, toggleSearch] = useToggle();
    const [isLoginOpen, toggleLogin] = useToggle();

    // Prevent body scrolling when any of the menus is open
    useEffect(() => {
        document.body.style.overflow =
            isHeaderOpen || isCartOpen || isSearchOpen || isLoginOpen
                ? "hidden"
                : "";
    }, [isHeaderOpen, isCartOpen, isSearchOpen, isLoginOpen]);

    const closeAll = () => {
        if (isHeaderOpen) toggleHeader();
        if (isCartOpen) toggleCart();
        if (isSearchOpen) toggleSearch();
        if (isLoginOpen) toggleLogin();
    };

    return (
        <>
            <div className="app-header flex justify-between items-center">
                <Hamburger
                    isHeaderOpen={isHeaderOpen}
                    toggleHeader={toggleHeader}
                />

                <div className="left-side flex items-center">
                    <Link to="/" className="flex">
                        <img src={LogoSvg} alt="Logo" className="logo" />
                    </Link>
                    <h1 className="dekstop-logo">Epicure</h1>
                    <DekstopNav />
                </div>

                <Actions
                    toggleSearch={toggleSearch}
                    toggleCart={toggleCart}
                    toggleLogin={toggleLogin}
                />

                {/* Overlay */}
                {(isHeaderOpen ||
                    isCartOpen ||
                    isSearchOpen ||
                    isLoginOpen) && (
                    <div className="overlay" onClick={closeAll} />
                )}

                <MobileNav
                    isHeaderOpen={isHeaderOpen}
                    toggleHeader={toggleHeader}
                />

                <SearchHeader
                    isSearchOpen={isSearchOpen}
                    toggleSearch={toggleSearch}
                />

                <Cart isCartOpen={isCartOpen} toggleCart={toggleCart} />

                <Login isLoginOpen={isLoginOpen} toggleLogin={toggleLogin} />
            </div>
        </>
    );
};
