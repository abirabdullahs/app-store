import React from 'react';
import DownloadIcon from '../../assets/images/icon-downloads.png'
import RatingIcon from '../../assets/images/icon-ratings.png'
import { Link } from 'react-router';

const SingleApp = ({ singleApp }) => {
    console.log(singleApp);
    return (
        <Link to={`/Apps/${singleApp.id}`}>

            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-4 flex flex-col">
                {/* App Image */}
                <div className="bg-gray-200 rounded-xl w-full h-60 flex items-center justify-center overflow-hidden">
                    {singleApp.image ? (
                        <img
                            src={singleApp.image}
                            alt={singleApp.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="text-gray-400">No Image</div>
                    )}
                </div>

                {/* App Title */}
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                    {singleApp.title}
                </h3>

                {/* Bottom Stats */}
                <div className="mt-3 flex justify-between items-center">
                    {/* Downloads */}
                    <div className="flex items-center gap-1 bg-green-50 text-green-600 px-3 py-1 rounded-md font-medium text-sm">
                        <img src={DownloadIcon} alt="" className='w-5 h-5' />
                        <span>{singleApp.downloads || "9M"}</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 bg-orange-50 text-orange-500 px-3 py-1 rounded-md font-medium text-sm">
                        <img src={RatingIcon} alt="" className='w-5 h-5' />
                        <span>{singleApp.ratingAvg || "5"}</span>
                    </div>
                </div>
            </div>

        </Link>
    );
};

export default SingleApp;