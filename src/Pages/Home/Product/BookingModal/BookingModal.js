import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';

const BookingModal = ({ bookItem, setBookItem }) => {
    const { user } = useContext(AuthContext);
    const { title, resalePrice } = bookItem

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const title = form.title.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            user: name,
            email,
            itemName: title,
            price,
            phone,
            location
        }

        fetch('https://prime-motors-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBookItem(null)
                    toast.success('Item is booked.')
                }
            })

        // console.log(booking);

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-1 mt-7'>
                        <label className="label"> <span className="label-text">Name</span> </label>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled className="input input-bordered input-warning w-full" />


                        <label className="label"> <span className="label-text">Email</span> </label>
                        <input name='email' type="email" defaultValue={user?.email} disabled className="input input-bordered input-warning w-full" />

                        <label className="label"> <span className="label-text">Title</span> </label>
                        <input name='title' type="text" defaultValue={title} disabled className="input input-bordered input-warning w-full font-semibold text-lg" />

                        <label className="label"> <span className="label-text">Price: In Dollars</span> </label>
                        <input name='price' type="text" defaultValue={resalePrice} disabled className="input input-bordered input-warning w-full" />


                        <label className="label"> <span className="label-text">Phone</span> </label>
                        <input name='phone' type="text" placeholder='Phone Number' className="input input-bordered input-warning w-full" required />

                        <label className="label"> <span className="label-text">Location</span> </label>
                        <input name='location' type="text" placeholder='Your Location' className="input input-bordered input-warning w-full" required />

                        <input className='btn btn-accent mt-4' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;