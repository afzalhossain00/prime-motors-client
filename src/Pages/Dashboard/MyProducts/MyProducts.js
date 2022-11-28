import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {
    const [deleteBike, setDeleteBike] = useState(null);
    const { user } = useContext(AuthContext);

    const closeModal = () => {
        setDeleteBike(null);
    }

    const url = (`http://localhost:5000/sellerProduct?email=${user?.email}`);

    const { data: bikes = [], isLoading, refetch } = useQuery({
        queryKey: ['bikes', user?.email],
        queryFn: async () => {
            try {
                const res = await fetch(url, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                console.log(data)
                return data;
            }
            catch (error) {
                console.log(error);
            }
        }
    })

    const handleDeleteProduct = bike => {
        fetch(`http://localhost:5000/sellerProduct/${bike._id}`, {
            method: 'DELETE',
            headers: {
                authorization: ` bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Product ${bike.name} deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='m-5'>
            <h3 className='text-3xl text-semibold mb-5'>My Products: {bikes.length}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    bikes.map(bike => <div key={bike._id} className="card bg-base-100 shadow-xl">
                        <figure><img src={bike.image} alt="bikes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {bike.title}
                                <div className="badge badge-secondary">Available</div>
                            </h2>
                            <p>Post Date: {bike.postDate?.slice(0, 10)}</p>
                            <div className="card-actions flex justify-end">
                                <label onClick={() => setDeleteBike(bike)} htmlFor="confirmation-modal" className="btn btn-sm btn-accent">Delete</label>
                                <Link to='/'><button className="btn btn-sm btn-primary">Advertise</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            {
                deleteBike && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deleteBike.title}. It cannot be undone.`}
                    successAction={handleDeleteProduct}
                    successButtonName="Delete"
                    modalData={deleteBike}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default MyProducts;