import React from 'react';

const AboutInfo = ({ card }) => {
    const { name, icon } = card;
    return (
        <div className='card h-5/6 shadow-xl p-6 mt-14 text-center'>
            <figure>
                <img style={{ width: '60px' }} src={icon} alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="text-lg font-semibold">{name}</h2>
            </div>
        </div>
    );
};

export default AboutInfo;