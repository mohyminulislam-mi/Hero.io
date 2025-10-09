import React from 'react';
import useData from '../Hooks/useData';
import App from '../components/App';


const Apps = () => {
    const [apps] = useData();
    return (
        <div>
            <div className='py-10 text-center'>
                <h1 className='text-3xl font-bold mb-4'>Our All Applications</h1>
                <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div></div>
            <div className='w-11/12 mx-auto grid grid-cols-2  lg:grid-cols-4 gap-4'>
                {apps.map(app => <App app={app}></App>)}
            </div>
        </div>

    );
};

export default Apps;