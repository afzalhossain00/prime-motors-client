import React from 'react';

const AllSellers = () => {
    return (
        <div>
            <h3 className="text-3xl font-semibold mb-5">All Sellers</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>verify</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td>Suzan</td>
                            <td>suzan@gmail.com</td>
                            <td>seller</td>
                            <td><button className='btn btn-xs btn-primary'>verify now</button></td>
                            <td><button className='btn btn-xs btn-accent'>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;