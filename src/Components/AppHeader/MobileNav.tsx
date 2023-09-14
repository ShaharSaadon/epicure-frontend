import { NavLink } from "react-router-dom";
import { linkService } from "../../Services/link.service";
import { Wrapper } from "./Wrapper";
interface MobileNavProps {
    isHeaderOpen: boolean;
    toggleHeader: () => void;
}
export const MobileNav: React.FC<MobileNavProps> = ({
    isHeaderOpen,
    toggleHeader,
}) => {
    const { upperMobileNavLinks, lowerMobileNavLinks } = linkService;

    return (
        <nav
            className={`mobile-nav flex flex-column ${
                isHeaderOpen ? "open" : ""
            }`}
            onClick={toggleHeader}
        >
            <Wrapper />
            {upperMobileNavLinks?.map((link, index) => (
                <NavLink key={index} to={link.path} className="nav-link">
                    {link.text}
                </NavLink>
            ))}
            {/* <br className="border"></br> */}
            <div className="nav-link border"></div>
            {lowerMobileNavLinks?.map((link, index) => (
                <NavLink key={index} to={link.path} className="nav-link">
                    {link.text}
                </NavLink>
            ))}
        </nav>
    );
};
