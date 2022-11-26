import React from 'react';
import { Link } from 'react-router-dom';

const CategoryDetails = ({ card }) => {
    const { name, description, url, categoryId } = card;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/category/${categoryId}`}>
                        <button className="btn btn-accent">Show More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;