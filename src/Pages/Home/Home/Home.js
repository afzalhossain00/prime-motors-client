import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div className='mx-4'>
            <Banner></Banner>
            <Category></Category>
            <About></About>
        </div>
    );
};

export default Home;