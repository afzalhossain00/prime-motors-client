import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext)
    const error = useRouteError()
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='flex justify-center items-center mt-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <p className="text-red-500">{error.statusText || error.message}</p>
                    <h2 className="card-title text-red-500">Something went wrong.</h2>
                    <div className="card-actions">
                        <h4 className="text-xl">Please <button className='btn btn-sm btn-primary' onClick={handleLogOut}>Sign Out</button> <br /> And Log In Again.</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayError;