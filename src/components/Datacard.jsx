import React from 'react';
import DownloadIcon from './../assets/icon-downloads.png'
import RatingsIcon from './../assets/icon-ratings.png'

const Datacard = ({ appdata }) => {

    return (
        <div>
            <div className="card bg-base-100 shadow-sm hover:scale-101 transition ease-in-out">
                <figure className="h-48 overflow-hidden">
                    <img className="w-full object-cover" src={"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"} alt="image" />
                </figure>
                <div className="card-body">
                        <span className="pr-[5px] font-medium">{appdata.title}:</span>
                    <div className='flex justify-between items-center pt-3'>
                        <div className='flex justify-between items-center bg-green-100 px-3 py-1 rounded'>
                            <img className='w-[15px]' src={DownloadIcon} />
                            <span className='pl-1 font-medium font text-sm'>9M</span>
                        </div>
                        <div className='flex justify-between items-center bg-orange-100 px-3 py-1 rounded'>
                            <img className='w-[15px]' src={RatingsIcon} />
                            <span className='pl-1 font-medium font text-sm '>5</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Datacard;