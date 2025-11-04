import React, { useState, useEffect } from 'react';
import Navbar from './../components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from './../components/Navbar/Footer';
import { useNavigation } from 'react-router-dom';
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
    // use the router navigation state to show loading during route transitions
    const navigation = useNavigation();
    const location = useLocation();
    const [showNavLoader, setShowNavLoader] = useState(false);

    useEffect(() => {
        try {
            localStorage.setItem('selectedApps', JSON.stringify(selectedApps));
        } catch {
            // 
        }
    }, [selectedApps]);


    
    useEffect(() => {
        if (navigation.state === 'loading') {
            setShowNavLoader(true);
            return;
        }

       
        const t = setTimeout(() => setShowNavLoader(false), 200);
        return () => clearTimeout(t);
    }, [navigation.state, location.pathname]);
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar />
            <Outlet context={{ selectedApps, setSelectedApps , disabled, setDisabled }} />
            <Footer />
            {showNavLoader && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
                    <Loader />
                </div>
            )}
            
        </div>
    );
};

export default Root;