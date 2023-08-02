import React from "react";
import { useSelector } from "react-redux";
import { DishToOrder } from "../../store/actions/cart.actions";
import { linkService } from "../../Services/link.service";
export const FullCart = () => {
    const { cart } = useSelector(({ cartModule }) => cartModule);
    const { imageMap } = linkService;

    return (
        <div className="full-cart">
            <h1>MY ORDER</h1>

            {cart.map((item: DishToOrder) => (
                <div className="cart-item flex" key={item._Id}>
                    <img
                        src={[imageMap[item.name]]}
                        alt="image-dish"
                        className="image-dish square-ratio"
                    />
                    <div className="dish-info flex flex-column justify-center items-center">
                        <p></p>
                        <h1>
                            <span>{item.quantity}x</span>
                            {item.name}
                        </h1>
                        <p>
                            {item.side} | {item.changes.join(" | ")}
                        </p>
                        <p>{item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
