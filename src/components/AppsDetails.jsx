import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import useData from '../Hooks/useData';
import download from '../assets/icon-downloads.png'
import ratings from '../assets/icon-ratings.png'
import review from '../assets/icon-review.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Chart from './Chart';
import Loading from './Loading';


const AppsDetails = () => {
    const [isInstalled, setIsInstalled] = useState(false);
    const { id } = useParams();
    const { apps, loading } = useData();
    const app = apps.find(p => String(p.id) === id) || [];

    useEffect(() => {
        const existingList = JSON.parse(localStorage.getItem('installation')) || [];
        const alreadyInstalled = existingList.some(p => p.id === app.id);
        setIsInstalled(alreadyInstalled);
    }, [app.id]);

    if (loading) {
        return <Loading />;
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
            <div className='lg:flex items-center justify-between border-b-2 border-[#dddddd] py-5'>
                <div className="lg:w-[24%] overflow-hidden md:items-center"><img className="w-[50%] mx-auto lg:w-full object-cover bg-base-100" src={app.image} /></div>
                <div className='lg:w-[75%]'>
                    <div className='w-[100%] border-b-2 border-[#dddddd] py-4 '>
                        <h1 className='lg:font-bold font-semibold lg:text-2xl text-xl mb-2'>{app.title}</h1>
                        <p>Development by <span className='text-purple-500 font-medium'>{app.companyName}</span></p>
                    </div>

                    <div className=' mt-3 flex  gap-12'>
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
            <div>
                <h3 className='mt-2 text-2xl font-semibold'>{app.title}</h3>
                <p className='text-[#627382] mt-5'>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.</p>
                <p className='my-10 text-[#627382]'>A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.</p>
                <p className='text-[#627382]'>For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>
            </div>
        </div>
    );
};

export default AppsDetails;