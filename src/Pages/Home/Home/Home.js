import React from 'react';
import About from '../About/About';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ContactUs from '../ContactUs/ContactUs';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div className='mx-4'>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <AboutUs></AboutUs>
            <Review></Review>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;