import CartImage from "../../Assets/Images/AppHeader/Cart.svg";

export const EmptyCart = () => {
    return (
        <>
            <img src={CartImage} alt="cart" className="cart-icon" />
            <h2 className="cart-message">YOUR BAG IS EMPTY</h2>
            <div className="history">ORDER HISTORY</div>
        </>
    );
};
