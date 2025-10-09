import React, { useEffect, useState } from "react";
import Install from "../components/Install";

const Installation = () => {
    const [installation, setInstallation] = useState([]);

    useEffect(() => {
        const saveList = JSON.parse(localStorage.getItem('installation'));
        if (saveList) setInstallation(saveList)
    }, []);
    return (
        <div className="w-11/12 mx-auto">
            <div className="text-center">
                <h1 className="font-bold text-3xl">Your Installed Apps</h1>
                <p className="text-[#627382] mt-3">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            <div className="flex justify-between mt-6">
                <h3 className="font-bold ">{installation.length} Apps Found</h3>
                <input type="text" />
            </div>

            <div>
                {
                    installation.map(install => <Install key={install.id} install={install}></Install>)
                }
            </div>
        </div>
    );
};

export default Installation;
