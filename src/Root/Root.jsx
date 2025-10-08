import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1 py-5 bg-[#f5f5f5]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;