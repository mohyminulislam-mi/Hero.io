import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Datacard from '../components/Datacard';
import Playstore from './../assets/play-store.png'
import Appstore from './../assets/app-store.png'
import Hero from './../assets/hero.png'

const Home = () => {
    const appsdata = useLoaderData();
    const HomeApps = appsdata.slice(0, 8)
    
    return (
        <div className='w-11/12 mx-auto'>
            {/* ----- hero contents start here----  */}
            <div className='text-center'>
                <h1 className='text-5xl font-bold'>We Build</h1>
                <h1 className='text-5xl font-bold'><span className='text-6xl text-purple-500'>Productive</span> Apps</h1>
                <p>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='text-center'>
                    <div className='border-gray-100'>
                        <img src={Playstore} />
                        <p>Google Play</p>
                    </div>
                    <div className='border-gray-100 border-solid'>
                        <img src={Appstore} />
                        <p>App Store</p>
                    </div>
                </div>
            </div>
            {/* ---- hero banner ---- */}
            <div className='flex items-center'>
                <div ><img src={Hero} alt="Banner" /></div>
            </div>




            {/* ---- Trending Apps ---- */}
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
                <Link src={'./apps'} className='btn bgbtn h-10 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold'>Show All</Link>
            </div>
        </div>
    );
};

export default Home;