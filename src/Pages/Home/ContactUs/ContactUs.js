import React from 'react';

const ContactUs = () => {
    return (
        <div className='bg-emerald-400 py-10 flex items-center justify-center mx-auto px-4 rounded-md'>
            <input type="text" placeholder="Email ID" className="input w-full max-w-xs mr-4" />
            <button className="btn btn-warning">Subscribe</button>
        </div>
    );
};

export default ContactUs;