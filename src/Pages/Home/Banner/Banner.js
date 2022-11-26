import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/8991394/pexels-photo-8991394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md text-white">
                    <h1 className="mb-5 text-5xl font-bold">Prime Motors</h1>
                    <p className="mb-5 text-lg">Looking to buy or sell a motorbike or scooter? Find best deals on used motorbikes and scooters only on Prime motors.</p>
                    <button className="btn btn-accent btn-sm">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;