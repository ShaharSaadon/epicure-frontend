import { NavLink } from "react-router-dom";
import { linkService } from "../../Services/link.service";
interface MobileNavProps {
    isHeaderOpen: boolean;
    toggleHeader: () => void;
}
export const MobileNav: React.FC<MobileNavProps> = ({
    isHeaderOpen,
    toggleHeader,
}) => {
    const { mainNavLinks } = linkService;

    return (
        <nav
            className={`mobile-nav flex flex-column ${
                isHeaderOpen ? "open" : ""
            }`}
            onClick={toggleHeader}
        >
            {mainNavLinks.map((link, index) => (
                <NavLink key={index} to={link.path} className="nav-link">
                    {link.text}
                </NavLink>
            ))}
        </nav>
    );
};