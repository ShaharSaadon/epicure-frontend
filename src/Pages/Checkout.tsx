import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { FullCart } from "../Components/AppHeader/FullCart";

const Checkout = () => {
    const [deliveryDetails, setDeliveryDetails] = useState({
        fullName: "",
        address: "",
        phone: "",
    });

    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: "",
        nameOnCard: "",
        cvv: "",
        expiryDate: "",
    });

    const handleDeliveryDetailsChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { id, value } = e.target;
        setDeliveryDetails((prevDetails) => ({
            ...prevDetails,
            [id]: value,
        }));
    };

    const handlePaymentDetailsChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { id, value } = e.target;
        setPaymentDetails((prevDetails) => ({
            ...prevDetails,
            [id]: value,
        }));
    };

    return (
        <div className="checkout-page flex flex-column">
            <h1 className="title"> Delivery Details</h1>
            <form className="checkout-form flex flex-column">
                <TextField
                    id="fullName"
                    label="Full Name"
                    variant="standard"
                    className="text-input"
                    required
                    onChange={handleDeliveryDetailsChange}
                    value={deliveryDetails.fullName}
                />
                <TextField
                    id="address"
                    label="Address"
                    variant="standard"
                    className="text-input"
                    required
                    onChange={handleDeliveryDetailsChange}
                    value={deliveryDetails.address}
                />
                <TextField
                    id="phone"
                    label="Phone"
                    variant="standard"
                    className="text-input"
                    required
                    onChange={handleDeliveryDetailsChange}
                    value={deliveryDetails.phone}
                />
            </form>

            <h1 className="title"> Payment Details</h1>
            <form className="checkout-form flex flex-column">
                <TextField
                    id="cardNumber"
                    label="Card Number"
                    variant="standard"
                    className="text-input"
                    required
                    onChange={handlePaymentDetailsChange}
                    value={paymentDetails.cardNumber}
                />
                <TextField
                    id="nameOnCard"
                    label="Name on Card"
                    variant="standard"
                    className="text-input"
                    required
                    onChange={handlePaymentDetailsChange}
                    value={paymentDetails.nameOnCard}
                />
                <TextField
                    id="cvv"
                    label="CVV"
                    variant="standard"
                    className="text-input"
                    required
                    onChange={handlePaymentDetailsChange}
                    value={paymentDetails.cvv}
                />
                <TextField
                    id="expiryDate"
                    label="Expiry Date"
                    variant="standard"
                    className="text-input"
                    required
                    onChange={handlePaymentDetailsChange}
                    value={paymentDetails.expiryDate}
                />
            </form>

            <FullCart />
        </div>
    );
};

export default Checkout;
