import React from 'react';
import { useParams } from "react-router";
import useData from '../Hooks/useData';
import download from '../assets/icon-downloads.png'
import ratings from '../assets/icon-ratings.png'
import review from '../assets/icon-review.png'

const AppsDetails = () => {
    const { id } = useParams();
    const { apps } = useData();
    const app = apps.find(p => String(p.id) === id);
    if (!app) {
        return <div>Loading...</div>;
    }



    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex items-center'>
                <div className="w-[25%] overflow-hidden pr-10 "><img className="w-full object-cover" src={app.image} /></div>
                <div>
                    <h1>{app.title}</h1>
                    <p>Development by <span className='text-purple-500'>{app.companyName}</span></p>

                    <div className='mt-8 flex justify-between gap-15'>
                        <div >
                            <img src={download} alt="Download Icon" className='w-[30px]'/>
                            <h4 className='pt-1 pb-1'>Downloads</h4>
                            <h1 className='font-extrabold text-xl'>{app.downloads / 10000000} M</h1>
                        </div>
                        <div >
                            <img src={ratings} alt="Download Icon" className='w-[30px]'/>
                            <h4 className='pt-1 pb-1'>Average Ratings</h4>
                            <h1 className='font-extrabold text-xl'>{app.ratingAvg}</h1>
                        </div>
                        <div >
                            <img src={review} alt="Download Icon" className='w-[30px]'/>
                            <h4 className='pt-1 pb-1'>Total Reviews</h4>
                            <h1 className='font-extrabold text-xl'>{app.reviews / 10000} K</h1>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button className="btn bg-green-500 text-white">Install Now ({app.size} MB)</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppsDetails;