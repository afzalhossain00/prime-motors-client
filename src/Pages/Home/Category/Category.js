import React from 'react';
import CategoryDetails from './CategoryDetails';

const Category = () => {
    const cardData = [
        {
            id: 1,
            name: 'Sports Bike',
            description: 'Find the best deals second hand Sports Bike. Get a amount of',
            quantity: 100,
            url: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        },
        {
            id: 2,
            name: 'Luxury bike',
            description: 'Find the best deals second hand Electric car. Get a amount of',
            quantity: 120,
            url: "https://images.pexels.com/photos/4616619/pexels-photo-4616619.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 3,
            name: 'Scooter bike',
            description: 'Find the best deals second hand Scooter bike. Get a amount of',
            quantity: 140,
            url: "https://images.pexels.com/photos/159192/vespa-roller-motor-scooter-cult-159192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },

    ]
    return (
        <div className='mt-12'>
            <h2 className='text-3xl text-center font-bold'>Our Categories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                {
                    cardData.map(card => <CategoryDetails
                        key={card.id}
                        card={card}
                    ></CategoryDetails>)
                }
            </div>
        </div>
    );
};

export default Category;