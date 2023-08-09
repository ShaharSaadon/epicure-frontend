import React from "react";
import { useSelector } from "react-redux";
import { Order } from "../Services/link.service";
export const Orders = () => {
    const { loggedinUser } = useSelector(({ userModule }) => userModule);
    const orders = loggedinUser.orders;

    return (
        <table className="order-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Restaurant ID</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order: Order, index: number) => (
                    <tr key={index}>
                        <td>{new Date(order.date).toLocaleDateString()}</td>
                        <td>{order.restaurantId}</td>
                        <td>{order.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
