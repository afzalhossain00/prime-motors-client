import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'

const Navbar = () => {
    const menuItems = <>
        <li><Link className='text-lg font-semibold' to='/'>Home</Link></li>
        <li><Link className='text-lg font-semibold' to='/blogs'>Blogs</Link></li>
        <li><Link className='text-lg font-semibold' to='/login'>Login</Link></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">
                        <img className='rounded-lg mr-2' style={{ width: '50px' }} src={logo} alt="" />
                        <Link style={{ textDecoration: 'none', color: 'black' }} className='font-bold text-2xl' to="/">Prims Motos</Link>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;