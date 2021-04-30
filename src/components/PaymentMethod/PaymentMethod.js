import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentCard from './PaymentCard';

const stripePromise = loadStripe('pk_test_51IeBnkBC2KRRFOmDYKbgTrSEg8CZiARb8VGDP4DR8rQJEAoSkG6wq6omHjEuF7W7f4hXTlh7AWuMk0gZRd3ymJw900xJfciQXs');


const PaymentMethod = ({ handelPayment }) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <PaymentCard handelPayment={handelPayment}></PaymentCard>
            </Elements>
        </div>
    );
};

export default PaymentMethod;