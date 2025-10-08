import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Error = () => {
    const error = useRouteError();
    
    return (
        <div>
            <Navbar></Navbar>
            <h1>404 Error! {error.message}</h1>
            <Footer></Footer>
        </div>
    );
};

export default Error;