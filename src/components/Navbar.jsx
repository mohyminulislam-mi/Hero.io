import React from "react";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import Logo from "./../assets/logo.png"
import './../index.css'


const Navbar = () => {
    return (
        <div className="navbar bg-base-100  w-11/12 mx-auto pl-0 pr-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <li className="font-medium text-lg">
                        <NavLink to="/">Home</NavLink>
                    </li>
                     <li className="font-medium text-lg">
                        <NavLink to="/apps">Apps</NavLink>
                    </li>
                     <li className="font-medium text-lg">
                        <NavLink to="/installation">Installation</NavLink>
                    </li>
                    </ul>
                </div>
                <NavLink src='/' className="flex items-center navbar-a"><img src={Logo} alt="App Logo" style={{ width: "40px", height: "40px" }} /> <span className="text-purple-500 font-bold no-underline">HERO.IO</span> </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                     <li className="font-medium text-lg">
                        <NavLink to="/">Home</NavLink>
                    </li>
                     <li className="font-medium text-lg">
                        <NavLink to="/apps">Apps</NavLink>
                    </li>
                     <li className="font-medium text-lg">
                        <NavLink to="/installation">Installation</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://github.com/mohyminulislam-mi' target="_blank" className="btn h-10 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold"><FaGithub /> Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;
