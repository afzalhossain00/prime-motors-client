import React, { useEffect, useState } from 'react';
import CategoryDetails from './CategoryDetails';

const Category = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div className='mt-12'>
            <h2 className='text-3xl text-center font-bold'>Our Categories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                {
                    categories.map(card => <CategoryDetails
                        key={card.id}
                        card={card}
                    ></CategoryDetails>)
                }
            </div>
        </div>
    );
};

export default Category;