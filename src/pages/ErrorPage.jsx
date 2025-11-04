import React from 'react';
import errorImage from '../assets/images/error-404.png'

const ErrorPage = () => {
    return (
        <div className='w-full h-100vh flex justify-center items-center'>
            <img src={errorImage}alt="" />
        </div>
    );
};

export default ErrorPage;