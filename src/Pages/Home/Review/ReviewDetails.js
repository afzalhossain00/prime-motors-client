import React from 'react';

const ReviewDetails = ({ slide }) => {
    const { image, id, prev, next } = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='flex items-center justify-between mx-auto'>
                <img src={image} alt='' style={{ width: '100px', height: '100px', borderRadius: '100px' }} className="rounded-xl mr-6" />
                <div>
                    <h3 className='text-xl font-bold mb-2'>JOHN DEO</h3>
                    <p className="mb-5 text-md font-semibold">It is a long established fact that a reader will be <br /> directed by the readable content of a page <br /> when looking at it's layout.</p>
                </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default ReviewDetails;