import React, { useState, useEffect } from 'react';
import { useLoaderData} from 'react-router';
import SingleApp from '../Home/SingleApp';
import { Oval } from "react-loader-spinner";

const AllApps = () => {
    const data = useLoaderData();
    const [search, setSearch] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    

    const filteredApps = data.filter(app =>
        app.title.toLowerCase().includes(search.toLowerCase())
    );

    // debounce visual indicator for search
    useEffect(() => {
        if (search === "") {
            setIsSearching(false);
            return;
        }
        setIsSearching(true);
        const id = setTimeout(() => setIsSearching(false), 300);
        return () => clearTimeout(id);
    }, [search]);

    

    return (
        <div>
            <div className="py-16">
                <h2 className="text-4xl font-bold text-center text-primary flex justify-center gap-3">
                    Our All Applications
                </h2>
                <p className="text-center text-gray-400">
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>

            <div className="w-11/12 mx-auto flex flex-col-reverse lg:flex-row gap-5 items-start justify-between lg:items-end my-10 sticky">
                <h2 className="text-lg underline font-bold">{`(${filteredApps.length})`} Apps Found</h2>

                <label className="input max-w-[300px] w-[300px] input-secondary">
                    <input
                        type="search"
                        placeholder="Search Apps"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full"
                        required
                    />
                </label>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 mb-10">
                {isSearching ? (
                    <div className="col-span-full flex justify-center py-10">
                        <ClipLoader color="#36d7b7" size={50} />
                    </div>
                ) : filteredApps.length > 0 ? (
                    filteredApps.map((singleApp) => (
                        <SingleApp key={singleApp.id} singleApp={singleApp} />
                    ))
                ) : (
                    <div className="col-span-full text-center text-red-500 font-bold py-10">
                        No App Found
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllApps;
