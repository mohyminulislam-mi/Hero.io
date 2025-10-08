import React from 'react';
import { useLoaderData } from 'react-router';
import Datacard from '../components/Datacard';

const Home = () => {
    const appsdata = useLoaderData();
    const HomeApps = appsdata.slice(0, 8)
    
    return (
        <div className='w-11/12 mx-auto'>
            <div className='py-10 text-center'>
                <h1 className='text-3xl font-bold mb-4'>Trending Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-2  lg:grid-cols-4 gap-4 '>
                {
                HomeApps.map(appdata => <Datacard key={appdata.id} appdata={appdata}></Datacard>)
            }
            </div>
            <div className='text-center pt-15'>
                <button className='btn bgbtn h-10 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold'>Show All</button>
            </div>
        </div>
    );
};

export default Home;