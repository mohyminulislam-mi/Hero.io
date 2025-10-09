import React from "react";
import Logo from "./../assets/logo.png";
import "./../index.css";
import { NavLink } from "react-router";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="footer sm:footer-horizontal p-10 w-11/12 mx-auto pl-0 pr-0">
                <aside className='footer-a'>
                    <NavLink src="/" className="flex items-center no-underline">
                        <img
                            src={Logo}
                            alt="App Logo"
                            style={{ width: "70px", height: "70px" }}
                        />{" "}
                        <span className="text-purple-500 font-bold text-3xl pl-3">
                            HERO.IO
                        </span>{" "}
                    </NavLink>
                    <p className="pr-14 text-gray-400">
                        Lorem Ipsum is simply dummy text of <br />
                        the printing and typesetting industry. <br />
                        Lorem Ipsum has been the industry's <br />
                        standard dummy text ever since the <br /> 1500s,when an unknown
                        printer took <br /> a galley of type and scrambled it to <br /> make
                        a type specimen book.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact us</a>
                    <a className="link link-hover">Priceing</a>
                    <a className="link link-hover">Location</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href="#" className="text-2xl">
                            <BsLinkedin />
                        </a>
                        <a href="#" className="text-2xl">
                            <FaFacebook />
                        </a>
                        <a href="#" className="text-2xl">
                            <FaSquareXTwitter />
                        </a>
                        <a href="#" className="text-2xl">
                            <IoLogoYoutube />
                        </a>
                    </div>
                </nav>
            </div>
            <div className="footer sm:footer-horizontal footer-center p-7  text-white">
                <p className=" text-gray-400">
                    Copyright © {new Date().getFullYear()} - HERO.IO. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
