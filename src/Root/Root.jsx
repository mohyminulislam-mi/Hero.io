import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router';
import Home from '../Pages/Home';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;