import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import productImage from '../../../assets/logo.png';
import Loading from '../../Shared/Loading/Loading';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `https://prime-motors-server.vercel.app/bookings?email=${user?.email}`

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className="text-3xl font-semibold mb-5">My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Image</th>
                            <th>Item</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings &&
                            bookings?.map((booking, i) => <tr key={booking._id} className='hover'>
                                <th>{i + 1}</th>
                                <th>
                                    <div className="avatar">
                                        <div className="w-14 rounded-full">
                                            <img src={booking.image ? booking.image : productImage} alt='' />
                                        </div>
                                    </div>
                                </th>
                                <td>{booking.itemName}</td>
                                <td>{booking.email}</td>
                                <td>${booking.price}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid && <Link
                                            to={`/dashboard/payment/${booking._id}`}
                                        ><button
                                            className='btn btn-primary btn-sm'
                                        >Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.price && booking.paid && <span className='text-green-600'>Paid</span>
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;