import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
const PaymentForm = ({ handleNext }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      setError(error.message);
      return;
    }

    try {
      const res = await axios.post(
        "https://impossible-eel-helmet.cyclic.cloud/create-payment-intent",
        {
          tokenId: token.id,
          amount: 2000, // Replace with the desired amount in cents
        }
      );
      console.log(res.data);
      window.location.href = "/success";
      // handleNext();
    } catch (err) {
      setError("Payment failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {error && <p>{error}</p>}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          sx={{ mt: 3, ml: 1 }}
          variant="contained"
          type="submit"
          disabled={!stripe}
        >
          Pay Now
        </Button>
      </Box>
    </form>
  );
};

export default PaymentForm;
