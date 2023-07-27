import ProfileSvg from "../../Assets/Images/AppHeader/Profile.svg";
import SearchSvg from "../../Assets/Images/AppHeader/Search.svg";
import CartSvg from "../../Assets/Images/AppHeader/Cart.svg";
interface ActionsNavProps {
    toggleCart: () => void;
    toggleSearch: () => void;
}
export const Actions: React.FC<ActionsNavProps> = ({
    toggleCart,
    toggleSearch,
}) => {
    return (
        <div className="right-nav flex">
            <img src={ProfileSvg} alt="Profile" className="profile" />
            <img
                src={SearchSvg}
                alt="Search"
                className="search-icon"
                onClick={toggleSearch}
            />
            <img
                src={CartSvg}
                alt="Cart"
                className="cart-icon"
                onClick={toggleCart}
            />
        </div>
    );
};
