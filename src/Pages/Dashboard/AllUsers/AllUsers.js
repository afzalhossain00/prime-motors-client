import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllUsers = () => {
    const [deleteUser, setDeleteUser] = useState(null);

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://prime-motors-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });

    const closeModal = () => {
        setDeleteUser(null);
    }

    const handleDeleteUser = user => {
        fetch(`https://prime-motors-server.vercel.app/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: ` bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${user.email} deleted successfully`)
                }
            })
    }

    const handleMakeAdmin = id => {
        fetch(`https://prime-motors-server.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Successful')
                    refetch()
                }
            })

    }

    return (
        <div>
            <h3 className="text-3xl font-semibold mb-5">All Users</h3>
            <div className="overflow-x-auto">
                <table className="table w-9/12 mx-auto">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            {/* <th>Status</th> */}
                            {/* <th>Verify</th> */}
                            <th>Admin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                {/* <td>{user.role}</td> */}
                                {/* <td>verify now</td> */}
                                <td>{user?.status !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                                <td>
                                    {/* <button className='btn btn-xs btn-accent'>Delete</button> */}
                                    <label onClick={() => setDeleteUser(user)} htmlFor="confirmation-modal" className="btn btn-xs btn-accent">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteUser && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deleteUser.email}. It cannot be undone.`}
                    closeModal={closeModal}
                    successAction={handleDeleteUser}
                    modalData={deleteUser}
                    successButtonName="Delete"
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default AllUsers;