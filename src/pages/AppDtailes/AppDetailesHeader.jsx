import React from 'react';
import RatingsChart from './RatingsChart';
import Description from './Description';
import { toast } from 'react-toastify';
import { useState } from 'react';

const AppDetailesHeader = ({ app, addApp, disabled }) => {

    const [clicked, setClicked] = useState(true);
  
    const handleInstall =()=>{
        addApp(app);
        toast(app.title +" installed");
        console.log(app);
        setClicked(!clicked);
    }

    return (
        <div className="w-11/12 mx-auto my-10">
            {/* Main Layout */}
            <div className="flex flex-col lg:flex-row gap-6 items-stretch">
                {/* App Image */}
                <div className="lg:w-1/3 w-full flex justify-center">
                    <img
                        className="rounded-2xl shadow-xl w-50 object-cover h-50"
                        alt={app.title}
                        src={app.image || "/app-logo/icon-006.webp"}
                    />
                </div>

                {/* App Info */}
                <div className="lg:w-2/3 w-full space-y-5">
                    {/* Header */}
                    <div className="border-b-2 border-secondary pb-4 space-y-2">
                        <h2 className="text-primary text-3xl font-bold">
                            {app.title || "SmPlan: ToDo List with Reminder"}
                        </h2>
                        <p className="text-gray-300">
                            Developed by{" "}
                            <span className="text-secondary font-semibold">
                                {app.companyName || "productive.io"}
                            </span>
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-between gap-4 py-3">
                        <div className="stats bg-base-200 shadow-md rounded-xl">
                            <div className="stat text-center">
                                <div className="stat-title text-gray-400">Downloads</div>
                                <div className="stat-value text-success">
                                    {app.downloads || "8M"}
                                </div>
                            </div>
                            <div className="stat text-center">
                                <div className="stat-title text-gray-400">Average Rating</div>
                                <div className="stat-value text-warning">
                                    {app.rating || "4.9"}
                                </div>
                            </div>
                            <div className="stat text-center">
                                <div className="stat-title text-gray-400">Total Reviews</div>
                                <div className="stat-value text-info">
                                    {app.reviews || "54K"}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Install Button */}
                    <div>
                        <button className="btn btn-success text-white shadow-lg hover:shadow-2xl text-lg px-8" onClick={handleInstall} disabled={disabled}>
                            {clicked && `Install Now ${app.size} (MB)`}
                            {clicked || `Installed`}

                        </button>
                    </div>
                </div>
            </div>


           <RatingsChart app={app}></RatingsChart>
           <Description app={app}></Description>

        </div>
    );
};

export default AppDetailesHeader;