import React from 'react';

const ProductDetails = ({ product, setBookItem }) => {
    const { image, title, location, resalePrice, originalPrice, YearsOfUse, postedTime, sellersName } = product;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <div className='text-lg'>
                    <p><span className='font-semibold'>Location:</span> {location}</p>
                    <p><span className='font-semibold'>Orginal Price: </span>${originalPrice}</p>
                    <p><span className='font-semibold'>Resale Price: </span>${resalePrice}</p>
                    <p><span className='font-semibold'>Years of use: </span>{YearsOfUse}</p>
                    <p><span className='font-semibold'>Posted Time: </span>{postedTime}</p>
                    <p><span className='font-semibold'>Seller Name: </span>{sellersName}</p>
                </div>
                <div className="card-actions justify-end">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-accent"
                        onClick={() => setBookItem(product)}
                    >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;