import CartImage from "../../Assets/Images/AppHeader/Cart.svg";

interface CartProps {
    isCartOpen: boolean;
    toggleCart: () => void;
}

export const Cart: React.FC<CartProps> = ({ isCartOpen, toggleCart }) => {
    return (
        <div
            className={`cart ${
                isCartOpen ? "open" : ""
            } flex flex-column items-center justify-center`}
            onClick={toggleCart}
        >
            <img src={CartImage} alt="cart" className="cart-icon" />
            <h2 className="cart-message">YOUR CART IS EMPTY</h2>
        </div>
    );
};
