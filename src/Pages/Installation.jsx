import React, { useEffect, useState, useMemo } from "react";
import Install from "../components/Install";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Installation = () => {
    const [installation, setInstallation] = useState([]);
    const [sortApp, setSortApp] = useState('none');

    useEffect(() => {
        const existingList = JSON.parse(localStorage.getItem('installation')) || [];
        setInstallation(existingList);
    }, []);

    const handleUninstall = (id) => {
        const updatedList = installation.filter(app => app.id !== id);
        localStorage.setItem('installation', JSON.stringify(updatedList));
        setInstallation(updatedList);
        toast.success("Uninstalled");
    };


    useEffect(() => {
        const saveList = JSON.parse(localStorage.getItem('installation'));
        if (saveList) setInstallation(saveList)
    }, []);

    const sortItems = useMemo(() => {
        if (sortApp === 'low-asc') {
            return [...installation].sort((a, b) => a.size - b.size);
        } else if (sortApp === 'high-desc') {
            return [...installation].sort((a, b) => b.size - a.size);
        } else {
            return installation;
        }
    }, [sortApp, installation]);



    return (
        <div className="w-11/12 mx-auto">
            <div className="text-center">
                <h1 className="font-bold text-3xl">Your Installed Apps</h1>
                <p className="text-[#627382] mt-3">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            <div className="flex justify-between items-center mt-10">
                <h3 className="font-bold ">{installation.length} Apps Found</h3>

                <label>
                    <select className="select select-bordered" value={sortApp} onChange={e => setSortApp(e.target.value)}>
                        <option value="none">Sort by downloads</option>
                        <option value="low-asc">Low-High</option>
                        <option value="high-desc">High-Low</option>
                    </select>
                </label>

            </div>

            <div>
                {
                    sortItems.map(install => <Install key={install.id} install={install} handleUninstall={handleUninstall}></Install>)
                }
            </div>
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
    );
};

export default Installation;
