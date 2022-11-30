import React from 'react';

const AllBuyers = () => {
    return (
        <div>
            <h3 className="text-3xl font-semibold mb-5">All Buyers</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Maruf</td>
                            <td>maruf@gmail.com</td>
                            <td>buyer</td>
                            <td><button className='btn btn-xs btn-accent'>Delete</button></td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Kashem Ali</td>
                            <td>kashem@ali.com</td>
                            <td>buyer</td>
                            <td><button className='btn btn-xs btn-accent'>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;