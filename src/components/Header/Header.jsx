import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className=''>
            <div className="navbar bg-base-100 pl-[250px] pr-[200px] mx-auto bg-gray-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/statistics">Statistics</NavLink></li>
                            <li tabIndex={0}>
                                <NavLink className="justify-between">
                                    Applied Jobs
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </NavLink>
                            </li>
                            <li><NavLink>Blog</NavLink></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case font-bold text-3xl">JobHunter</Link>
                </div>
                <div className="navber navbar-center hidden lg:flex text-gray-400">
                    {/* <Link to="/" className='navMiddleText' >Home</Link> */}
                    <NavLink className="navMiddleText" activeClassName="active" to="/">Home</NavLink>
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/statistics" className='navMiddleText'>Statistics</NavLink></li>
                        
                        <li tabIndex={0}>
                            <NavLink to="/appliedjob" className='navMiddleText'>Applied Jobs</NavLink>
                        </li>
                        <li><NavLink className='navMiddleText' to="/blog">Blog</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn nav-btn">Star Applying</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;