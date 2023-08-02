import { EmptyCart } from "./EmptyCart";
import { useSelector } from "react-redux";
import { FullCart } from "./FullCart";
interface CartProps {
    isCartOpen: boolean;
    toggleCart: () => void;
}

export const Cart: React.FC<CartProps> = ({ isCartOpen, toggleCart }) => {
    const { cart } = useSelector(({ cartModule }) => cartModule);
    const cartLength = cart.length;
    return (
        <div
            className={`cart ${
                isCartOpen ? "open" : ""
            } flex flex-column items-center justify-center`}
            onClick={toggleCart}
        >
            {cartLength === 0 ? <EmptyCart /> : <FullCart />}
        </div>
    );
};
