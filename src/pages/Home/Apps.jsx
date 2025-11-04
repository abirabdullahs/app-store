import React, { Suspense } from "react";
import SingleApp from './SingleApp';

const Apps = ({ data }) => {
    console.log(data);
    return (
        <div className="my-10">
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="font-bold text-5xl text-blue-900 mb-3">Trending Apps</h2>
                <p className="text-gray-500">
                    Explore all trending apps on the market developed by us
                </p>
            </div>

            {/* App Cards */}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
                {data.slice(0, 8).map((singleApp) => (
                    <SingleApp key={singleApp.id} singleApp={singleApp} />
                ))}
            </div>

            <div className="text-center flex justify-center mt-10">
                <a className="btn btn-wide  text-white hover:shadow-xl bg-linear-to-tl to-[#632EE3] from-[#9F62F2] " href="/apps" data-discover="true">Show All</a>
            </div>

        </div>
    );
};

export default Apps;
