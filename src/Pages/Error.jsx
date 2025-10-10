import React from 'react';
import { Link, useRouteError } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import error404 from '../assets/error-404.png'

const Error = () => {
    const error = useRouteError();

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1 w-11/12 mx-auto'>
                <div className='p-15 text-center'>
                    <div className='flex justify-center mb-5'><img className='text-center' src={error404} alt={error.message} /></div>
                    <h1 className='font-bold text-4xl'>Oops, Page not found!</h1>
                    <p className='text-[#627382] my-2'>The page you are looking for is not available.</p>
                    <Link to="/"
                        className="btn bgbtn h-10 bg-gradient-to-r from-indigo-500 to-purple-500 text-white mt-5"
                    > Back to Home</Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;