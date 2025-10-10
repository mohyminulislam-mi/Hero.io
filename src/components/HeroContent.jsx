import React from 'react';
import Playstore from './../assets/play-store.png'
import Appstore from './../assets/app-store.png'
import Hero from './../assets/hero.png'
import { Link } from 'react-router';

const HeroContent = () => {
    return (
        <div>
             {/* ----- hero contents start here----  */}
            <div className='text-center mt-20'>
                <h1 className='text-5xl font-bold lg:py-[15px]'>We Build <span className='text-6xl text-purple-500'>Productive</span> Apps</h1>
                <p className=' p-[15px] text-[#627382]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex items-center justify-center mt-8'>
                    <Link to={'https://play.google.com/store/apps'} target="_blank" className='border-gray-300 border flex justify-center items-center mr-7 py-[5px] px-4'>
                        <img src={Playstore} />
                        <p className='font-semibold'>Google Play</p>
                    </Link>
                    <Link to={'https://www.apple.com/app-store/'} target="_blank"  className='border-gray-300 border flex justify-center items-center py-[5px] px-4'>
                        <img src={Appstore} />
                        <p className='font-semibold'>App Store</p>
                    </Link>
                </div>
            </div>
            {/* ---- hero banner ---- */}
            <div className='w-11/12 mx-auto mt-15'>
                <img src={Hero} alt="Banner" className='mx-auto' />
            </div>
             {/* ---- hero banner ---- */}
            <div className='bg-gradient-to-r from-indigo-500 to-purple-500'>
                <div className='text-center text-white py-14'>
                    <h1 className='text-3xl lg:text-5xl font-bold'>Trusted by Millions, Built for You</h1>
                    <div className='flex justify-center lg:gap-30 gap-2 md:px-5'>
                        <div className='mt-10'>
                            <h6 className='font-light'>Total Downloads</h6>
                            <h1 className='lg:text-5xl text-3xl font-bold py-1'>29.6M</h1>
                            <h6 className='font-light'>21% more than last month</h6>
                        </div>
                        <div className='mt-10'>
                            <h6 className='font-light'>Total Reviews</h6>
                            <h1 className='lg:text-5xl text-3xl font-bold py-1'>906K</h1>
                            <h6 className='font-light'>46% more than last month</h6>
                        </div>
                        <div className='mt-10'>
                            <h6 className='font-light'>Active Apps</h6>
                            <h1 className='lg:text-5xl text-3xl font-bold py-1'>132+</h1>
                            <h6 className='font-light'>31 more will Launch</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroContent;