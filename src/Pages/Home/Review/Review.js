import React from 'react';
import ReviewDetails from './ReviewDetails';
import img1 from '../../../assets/images/reviews/review1.jpg'
import img2 from '../../../assets/images/reviews/review2.jpg'
import img3 from '../../../assets/images/reviews/review3.jpg'
import img4 from '../../../assets/images/reviews/review4.jpg'
import img5 from '../../../assets/images/reviews/review5.jpg'

const Review = () => {
    const bannerData = [
        {
            image: img1,
            prev: 5,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: img4,
            prev: 3,
            id: 4,
            next: 5
        },
        {
            image: img5,
            prev: 4,
            id: 5,
            next: 1
        },
    ]

    return (
        <div className='text-center mb-10'>
            <h2 className='text-3xl font-bold'>User Reviews</h2>
            <div className="carousel w-full py-10">

                {
                    bannerData.map(slide => <ReviewDetails
                        key={slide.id}
                        slide={slide}
                    ></ReviewDetails>)
                }
            </div>
        </div>
    );
};

export default Review;