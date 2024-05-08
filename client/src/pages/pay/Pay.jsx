import React, { useEffect, useState } from "react";
import "./Pay.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";

const stripePromise = loadStripe(
  // public key here
  "pk_test_51P1NQZSCj6TawCFOh793nfRdrukRUOlxaTuWh9Nml4l3d8f1TZdIlzHaWDYffdloXvWxkzFPeTPqZq2G8seeswS600gZBWMIuT"
);

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");

  const { id } = useParams();

  // as soon as we open this page, we are going to make an api req
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(
          `/orders/create-payment-intent/${id}`
        );
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret: clientSecret,
    appearance: appearance,
  };

  return <div className="pay">
    {clientSecret && (
        <Elements options={{clientSecret: clientSecret}} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
  </div>;
};

export default Pay;