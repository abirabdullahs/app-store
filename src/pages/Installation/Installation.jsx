import React, { useEffect, useState } from 'react';
import { useOutletContext } from "react-router-dom";
import AppCard from './AppCard';

const Installation = () => {
    const { selectedApps, setSelectedApps, setDisabled } = useOutletContext();
    console.log(selectedApps);
    const [sortOrder, setSortOrder] = useState('default');

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    useEffect(() => {
        try {
            const raw = localStorage.getItem('selectedApps');
            if (raw) setSelectedApps(JSON.parse(raw));
        } catch {
            // ignore errors
        }
    }, [setSelectedApps]);
    return (
        <div>
            <div className="px-5 lg:w-11/12 mx-auto py-10">
                <div className=""><h2 className="text-4xl font-bold text-center text-primary flex justify-center gap-3">Your Installed Apps
                </h2><p className="text-center text-gray-400">Explore All Trending Apps on the Market developed by us</p></div>
                <div className=" flex justify-between mt-10 sticky"><h2 className="text-lg  underline text-secondary font-medium">{selectedApps.length} Apps Found</h2><div className="">
                    <select value={sortOrder} onChange={handleSortChange} className="select bg-white">
                        <option value="default">Sort By Size</option>
                        <option value="asc">Low-High</option>
                        <option value="desc">High-Low</option>
                    </select>
                </div></div><div className="divider"></div><div className=" grid grid-cols-1 gap-5"></div></div>


            <div className='mb-10'>
                {React.useMemo(() => {
                    if (!selectedApps) return null;
                    const arr = [...selectedApps];
                    if (sortOrder === 'asc') arr.sort((a, b) => (a.size || 0) - (b.size || 0));
                    else if (sortOrder === 'desc') arr.sort((a, b) => (b.size || 0) - (a.size || 0));
                    return arr.map(item => (
                    <AppCard
                        key={item.id}          
                        setSelectedApps={setSelectedApps}
                        item={item}
                        setDisabled={setDisabled}
                    />
                    ));
                }, [selectedApps, sortOrder, setSelectedApps, setDisabled])}
            </div>

        </div>


    );
};

export default Installation;