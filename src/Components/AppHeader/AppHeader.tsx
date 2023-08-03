import { SearchHeader } from "./SearchHeader";
import { DekstopNav } from "./DekstopNav";
import { useToggle } from "../../customHooks/useToggle";
import { Hamburger } from "./Hamburger";
import { MobileNav } from "./MobileNav";
import { useEffect } from "react";
import { Actions } from "./Actions";
import { Login } from "./Login";
import { Cart } from "./Cart";
import { Link } from "react-router-dom";

import LogoSvg from "../../Assets/Images/AppHeader/Logo.svg";

export const AppHeader = () => {
    const [isHeaderOpen, toggleHeader] = useToggle();
    const [isCartOpen, toggleCart] = useToggle();
    const [isSearchOpen, toggleSearch] = useToggle();
    const [isLoginOpen, toggleLogin] = useToggle();

    //Prevent scrollliing
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
