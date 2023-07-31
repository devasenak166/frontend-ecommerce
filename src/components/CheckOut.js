import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import Offers from "./Offers";
import Navbar from "./Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm"; // Import the PaymentForm component
import Review from "./Review";
import Email from "./Email";
import Footer from "./Footer";

const steps = ["Shipping address", "Payment details"];

const CheckOut = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <Offers />
      <Navbar />
      <CssBaseline />

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Container>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </Container>
          ) : (
            <Container>
              {/* Render the appropriate step content */}
              {activeStep === 0 && <AddressForm />}
              {activeStep === 1 && (
                <Elements stripe={loadStripe(process.env.REACT_APP_STRIPE)}>
                  <PaymentForm handleNext={handleNext} />
                </Elements>
              )}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 1 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                {activeStep !== 1 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Next
                  </Button>
                )}
              </Box>
            </Container>
          )}
        </Paper>
      </Container>
      <Email />
      <Footer />
    </>
  );
};

export default CheckOut;
