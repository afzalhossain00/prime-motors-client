import React from 'react';
import customer from "../../../assets/icons/customer.png";
import payment from "../../../assets/icons/payment.png";
import creditCard from "../../../assets/icons/creditCard.png";
import AboutInfo from './AboutInfo';

const About = () => {
    const cardData = [
        {
            id: 1,
            name: 'Active Buyers',
            icon: customer,
        },
        {
            id: 2,
            name: 'Get Best Price',
            icon: payment,
        },
        {
            id: 3,
            name: 'Instant Payment',
            icon: creditCard,
        },

    ]

    return (
        <div className='mt-20'>
            <div className='text-center mb-8'>
                <h2 className='text-3xl font-bold'>Why Choose to Sell on Prime Motors</h2>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 text-center'>
                    {
                        cardData.map(card => <AboutInfo
                            key={card.id}
                            card={card}
                        ></AboutInfo>)
                    }
                </div>
            </div>


        </div>
    );
};

export default About;