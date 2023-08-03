import { useSelector } from "react-redux";
import { DishToOrder } from "../../store/actions/cart.actions";
import { linkService } from "../../Services/link.service";
import { useNavigate, useLocation } from "react-router-dom";
import lockSvg from "../../Assets/Images/AppHeader/lock.svg";
export const FullCart = () => {
    const { cart } = useSelector(({ cartModule }) => cartModule);
    const { imageMap } = linkService;
    const navigate = useNavigate();
    const location = useLocation();

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        for (const item of cart) {
            totalPrice += item.price * item.quantity;
        }
        return totalPrice;
    };
    return (
        <div className="full-cart flex flex-column items-center ">
            <h1 className="cart-title">MY ORDER</h1>

            <div className="items-list flex flex-column">
                {cart.map((item: DishToOrder) => (
                    <div className="cart-item flex" key={item._Id}>
                        <img
                            src={[imageMap[item.name]]}
                            alt="image-dish"
                            className="image-dish square-ratio"
                        />
                        <div className="dish-info flex flex-column justify-center items-start">
                            <h1 className="dish-name">
                                <span> {item.quantity} x </span>
                                {item.name}
                            </h1>
                            <p className="details">
                                {item.side} | {item.changes.join(" | ")}
                            </p>
                            <p className="price">₪{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h1 className="cart-title">Total - ₪{calculateTotalPrice()}</h1>
            <button
                className="checkout-btn flex items-center justify-center"
                onClick={() =>
                    navigate(
                        location.pathname === "/checkout"
                            ? "/payment"
                            : "/checkout"
                    )
                }
            >
                <img src={lockSvg} alt="lock-icon" className="icon" />
                {location.pathname === "/checkout"
                    ? "COMPLETE PAYMENT"
                    : "COMPLETE CHECKOUT"}
            </button>
        </div>
    );
};
