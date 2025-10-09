import React from 'react';
import DownloadIcon from './../assets/icon-downloads.png'
import RatingsIcon from './../assets/icon-ratings.png'

const Install = ({ install }) => {
    return (
        <div className="card card-side bg-base-100 shadow-sm mt-5 flex items-center">
            <figure>
                <img className="w-[120px] h-[100px] object-fill pl-5 rounded" src={install.image} alt={install.title}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{install.title}</h2>
                <div className='flex justify-between p-0'>
                    <div className='flex items-center'>
                    <div className='flex justify-between items-center'>
                        <img className='w-[15px]' src={DownloadIcon} alt="Downloads Icon" />
                        <span className='pl-1 font-medium font-text-sm'>{install.downloads / 10000000}B</span>
                    </div>
                    <div className='flex justify-between items-center px-3'>
                        <img className='w-[15px]' src={RatingsIcon} alt="Ratings Icon" />
                        <span className='pl-1 font-medium font-text-sm'>{install.ratingAvg}</span>
                    </div>
                    <div><span className='pl-1 font-medium font-text-sm'>{install.size} MB</span></div>
                </div>
                <div>
                    <button className="btn bg-green-500 text-white">Uninstall</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Install;