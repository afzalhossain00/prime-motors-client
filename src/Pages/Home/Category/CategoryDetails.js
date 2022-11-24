import React from 'react';

const CategoryDetails = ({ card }) => {
    const { name, description, url } = card;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Show More</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;