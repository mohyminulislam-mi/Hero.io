import React, { useState } from 'react';
import useData from '../Hooks/useData';
import App from '../components/App';


const Apps = () => {
    const { apps} = useData();
    const [search, setSearch] = useState('');
    const term = search.trim().toLocaleLowerCase();
    const searcheApps = term
        ? apps.filter(app => app.title?.toLocaleLowerCase().includes(term))
        : apps;
    return (
        <div >
            <div className='py-10 text-center'>
                <h1 className='text-3xl font-bold mb-4'>Our All Applications</h1>
                <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='w-11/12 mx-auto flex justify-between items-center pb-5'>
                <h1>All Apps {' '} <span>({searcheApps.length}) Apps Founds</span></h1>
                <label className='input'>
                    <input value={search} onChange={e => setSearch(e.target.value)} type="search" placeholder='Search Apps' />
                </label>

            </div>
            <div className='w-11/12 mx-auto grid grid-cols-2  lg:grid-cols-4 gap-4'>
                {searcheApps.map(app => <App key={app.id} app={app}></App>)}
            </div>
        </div>

    );
};

export default Apps;