import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const Product = () => {
    const products = useLoaderData()

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
            {
                products.map(product => <ProductDetails
                    key={product._id}
                    product={product}
                ></ProductDetails>)
            }
        </div>
    );
};

export default Product;