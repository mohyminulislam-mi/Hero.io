import React from 'react';
import AppError from '../assets/App-Error.png'
import { Link } from 'react-router';

const AppNotFound = () => {
    return (
        
        <div className='text-center w-full'>
                    <div className='flex justify-center mb-5'><img className='text-center' src={AppError} alt='App Error :)' /></div>
                    <h1 className='font-bold text-4xl'>OPPS!! APP NOT FOUND</h1>
                    <p className='text-[#627382] my-2'>The App you are requesting is not found on our system.  please try another apps</p>
                    <Link to="/"
                        className="btn bgbtn h-10 bg-gradient-to-r from-indigo-500 to-purple-500 text-white mt-5"
                    > Back to Home</Link>
                </div>
    );
};

export default AppNotFound;