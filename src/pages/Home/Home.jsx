import React from 'react';
import Header from './Header';
import { useLoaderData } from 'react-router';
import Apps from './Apps';

const Home = () => {

    const data = useLoaderData();
    console.log(data);
    return (
        <div>
           < Header></Header>
           <Apps data = {data}></Apps>
        </div>
    );
};

export default Home;