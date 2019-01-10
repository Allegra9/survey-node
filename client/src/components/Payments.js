import React from "react";
import StripeCheckout from "react-stripe-checkout";

class Payments extends React.Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button
          style={{ padding: "20px", fontSize: "20px", cursor: "pointer" }}
        >
          Add credits
        </button>
      </StripeCheckout>
    );
  }
}

export default Payments;
