import React from 'react';

const Description = ({app}) => {
    return (
        <div className='mt-10 mb-5'>
            <h1 className='text-5xl font-bold text-blue-700 mb-5'>Description</h1>
            <p>{app.description}</p>
        </div>
    );
};

export default Description;