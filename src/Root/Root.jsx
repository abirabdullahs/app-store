import React, { useState, useEffect } from 'react';
import Navbar from './../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from './../components/Navbar/Footer';
import { useLocation } from 'react-router-dom';
import Loader from './../components/Loader/Loader';

const Root = () => {
    const [selectedApps, setSelectedApps] = useState(() => {
        try {
            const raw = localStorage.getItem('selectedApps');
            return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    });
    const [disabled, setDisabled] = useState(false);
    const location = useLocation();
    const [navLoading, setNavLoading] = useState(false);

    useEffect(() => {
        try {
            localStorage.setItem('selectedApps', JSON.stringify(selectedApps));
        } catch {
            // 
        }
    }, [selectedApps]);


    useEffect(() => {
        setNavLoading(true);
        const t = setTimeout(() => setNavLoading(false), 300);
        return () => clearTimeout(t);
    }, [location.pathname]);
    
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar />
            <Outlet context={{ selectedApps, setSelectedApps , disabled, setDisabled }} />
            <Footer />
            {navLoading && <Loader />}
            
        </div>
    );
};

export default Root;