import React from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "../../App.css";
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Payment = () => {
  const [clientSecret, setClientSecret] = useState("");
  let params = useParams();
  let serviceId = params.id;
  const [id, setId] = useState(serviceId);
  const stripePromise = loadStripe("pk_test_51L1c26AQe13D7JV4qkbk7P4B1hqD11LQp1f43VnqQ4E1kxBnQhUObvyRLxAHAEesfzQw9eCsyOUivrnIV5z5AkKG00S04v3xro");
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/create-payment-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: serviceId }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          const booking = {
            paymentStatus: "paid",
            serviceId: serviceId
          }
          fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/updatepayment`, {
            method: 'PUT',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
            })
        }
        setClientSecret(data.clientSecret)
      });
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm serviceId={serviceId} />
        </Elements>
      )}
    </div>
  )
}
export default Payment;