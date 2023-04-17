import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li className='font-semibold'><NavLink activeClassName='is-active' to='/'>Home</NavLink></li>
        <li className='font-semibold'><NavLink activeClassName='is-active' to='/jobs'>Jobs</NavLink></li>
        <li className='font-semibold'><NavLink activeClassName='is-active' to='/contact'>Contact</NavLink></li>
        <li className='font-semibold'><NavLink activeClassName='is-active' to='/jobpost'>Job Post</NavLink></li>
        {/* {
        user ? <>
            <li className='font-semibold'><NavLink activeClassName='is-active' to='/orders'>Orders</NavLink></li>
            <li className='font-semibold btn btn-outline btm-nav-sm rounded-xl' onClick={logout}><NavLink activeClassName='is-active' to='/login'>Log Out</NavLink></li>
        </>
            :
            <li className='font-semibold'><NavLink activeClassName='is-active' to='/login'>Log in</NavLink></li>
    } */}
    </>



    return (
        <div className="navbar bg-base-100 sticky top-0 z-30">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a href=" " className="btn btn-ghost normal-case text-xl">YTJobs</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="drawer-content flex flex-col items-center justify-center">

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
            </div>
        </div>
    );
};

export default Navbar;