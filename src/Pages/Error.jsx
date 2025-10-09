import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Error = () => {
    const error = useRouteError();
    
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1 w-11/12 mx-auto'>
                <h1>404 Error! {error.message}</h1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;