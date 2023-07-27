import { linkService } from "../../Services/link.service";
import { NavLink } from "react-router-dom";

export const DekstopNav = () => {
    const { dekstopNavLinks } = linkService;

    return (
        <nav className={`dekstop-nav flex`}>
            {dekstopNavLinks.map((link, index) => (
                <NavLink key={index} to={link.path} className="nav-link">
                    {link.text}
                </NavLink>
            ))}
        </nav>
    );
};
