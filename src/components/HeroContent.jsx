import React from 'react';
import Playstore from './../assets/play-store.png'
import Appstore from './../assets/app-store.png'
import Hero from './../assets/hero.png'

const HeroContent = () => {
    return (
        <div>
             {/* ----- hero contents start here----  */}
            <div className='text-center'>
                <h1 className='text-5xl font-bold lg:px-[450px] lg:py-[15px]'>We Build <span className='text-6xl text-purple-500'>Productive</span> Apps</h1>
                <p className='lg:px-[310px] py-[15px]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex items-center justify-center'>
                    <div className='border-gray-300 border flex justify-center items-center mr-7 py-[5px] px-4'>
                        <img src={Playstore} />
                        <p className='font-semibold'>Google Play</p>
                    </div>
                    <div className='border-gray-300 border flex justify-center items-center py-[5px] px-4'>
                        <img src={Appstore} />
                        <p className='font-semibold'>App Store</p>
                    </div>
                </div>
            </div>
            {/* ---- hero banner ---- */}
            <div className='w-11/12 mx-auto mt-15'>
                <img src={Hero} alt="Banner" className='mx-auto' />
            </div>
        </div>
    );
};

export default HeroContent;