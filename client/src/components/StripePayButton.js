import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "../utils/axiosConfig";

const StripePayButton = ({ price }) => {
  const priceConversion = price * 100;
  const publishableKey = "pk_test_tm34JDTqrz4UbvxWeiuq06hU00lEitvkQL";

  const onToken = async (token) => {
    const data = {
      amount: priceConversion,
      token,
    };
    try {
      await axios.post("/payment", data);
      alert("Payment Successful");
    } catch (error) {
      alert("Payment Failed!");
      console.log("failed", error);
    }
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="My Store"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ₦${price}`}
      amount={priceConversion}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="NGN"
    >
      <div style={{ width: "fit-content", height: "fit-content" }}>
        <button className="btn btn-success shadow">Pay Now</button>
      </div>
    </StripeCheckout>
  );
};

export default StripePayButton;
