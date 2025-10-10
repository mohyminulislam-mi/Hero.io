import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import useData from '../Hooks/useData';
import download from '../assets/icon-downloads.png'
import ratings from '../assets/icon-ratings.png'
import review from '../assets/icon-review.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Chart from './Chart';


const AppsDetails = () => {
    const [isInstalled, setIsInstalled] = useState(false);
    const { id } = useParams();
    const { apps } = useData();
    const app = apps.find(p => String(p.id) === id) || [];

    useEffect(() => {
        const existingList = JSON.parse(localStorage.getItem('installation')) || [];
        const alreadyInstalled = existingList.some(p => p.id === app.id);
        setIsInstalled(alreadyInstalled);
    }, [app.id]);

    if (!app) {
        return <div>Loading...</div>;
    }

    const handleInstallNow = () => {
        const existingList = JSON.parse(localStorage.getItem('installation')) || [];

        const alreadyInstalled = existingList.some(p => p.id === app.id);
        if (alreadyInstalled) return toast.success('Already Added');

        const updatedList = [...existingList, app];
        localStorage.setItem('installation', JSON.stringify(updatedList));

        setIsInstalled(true);
        toast.success("Installed");
    };


    return (
        <div className='w-11/12 mx-auto'>
            <div className='lg:flex items-center justify-between border-b-2 border-[#dddddd]'>
                <div className="lg:w-[20%] overflow-hidden md:items-center"><img className="w-[50%] lg:w-full object-cover" src={app.image} /></div>
                <div className='w-[78%]'>
                    <div className='w-[100%] border-b-2 border-[#dddddd] pb-4'>
                        <h1>{app.title}</h1>
                        <p>Development by <span className='text-purple-500 font-medium'>{app.companyName}</span></p>
                    </div>

                    <div className=' mt-4 flex  gap-12'>
                        <div >
                            <img src={download} alt="Download Icon" className='w-[30px]' />
                            <h4 className='pt-1 pb-1'>Downloads</h4>
                            <h1 className='font-bold text-xl'>{app.downloads / 10000000} M</h1>
                        </div>
                        <div >
                            <img src={ratings} alt="Download Icon" className='w-[30px]' />
                            <h4 className='pt-1 pb-1'>Average Ratings</h4>
                            <h1 className='font-bold text-xl'>{app.ratingAvg}</h1>
                        </div>
                        <div >
                            <img src={review} alt="Download Icon" className='w-[30px]' />
                            <h4 className='pt-1 pb-1'>Total Reviews</h4>
                            <h1 className='font-bold text-xl'>{app.reviews / 100000} K</h1>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button onClick={handleInstallNow} className="btn bg-green-500 text-white">{isInstalled ? 'Installed' : `Install Now (${app.size} MB)`}</button>

                        <ToastContainer
                            position="top-right"
                            autoClose={1000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            pauseOnHover={false}
                            draggable
                            theme="light"
                        />
                    </div>
                </div>
            </div>
            <Chart></Chart>
        </div>
    );
};

export default AppsDetails;