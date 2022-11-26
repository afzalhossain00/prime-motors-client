import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import ProductDetails from './ProductDetails';

const Product = () => {
    const products = useLoaderData()
    const [bookItem, setBookItem] = useState(null);

    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                {
                    products.map(product => <ProductDetails
                        key={product._id}
                        product={product}
                        setBookItem={setBookItem}
                    ></ProductDetails>)
                }
            </div>
            {bookItem &&
                <BookingModal
                    bookItem={bookItem}
                    setBookItem={setBookItem}
                ></BookingModal>
            }
        </section>
    );
};

export default Product;