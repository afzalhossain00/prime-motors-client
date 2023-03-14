import React from 'react';

const AboutUs = () => {
    return (
        <section className="hero bg-base-200 my-10 py-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-1/2 py-6'>
                    <img alt='' src='https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1' className="rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <h2 className='text-3xl font-bold mb-6'>ABOUT US</h2>
                    <p className="mb-5 text-md font-semibold">Prime motors is a old recondition <br /> buying and selling website.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;