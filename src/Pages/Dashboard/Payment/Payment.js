import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData()
    const navigation = useNavigation()
    const { price, itemName } = booking;

    if (navigation.state === "loading") {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className="text-2xl mb-2">Payment for <strong>{itemName}</strong></h3>
            <h3 className="text-2xl">Please pay <strong>${price}</strong> to buy this product.</h3>
            {/* <CheckoutForm></CheckoutForm> */}

            <div className='w-96 my-8 bg-slate-200 p-8 rounded-md'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;