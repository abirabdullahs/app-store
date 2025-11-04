import React from 'react';
import { useLoaderData, useOutletContext, useParams } from 'react-router';
import AppDetailesHeader from './AppDetailesHeader';

const AppDetailes = () => {
    
    const { selectedApps, setSelectedApps , disabled, setDisabled} = useOutletContext();
    const { id } = useParams();
    const dataPrimary = useLoaderData();
    const app = dataPrimary.find(item => item.id.toString() === id);
    if (!app) return <div className="text-center text-red-500 mt-10">App Not Found</div>;
   

    const addApp = (installedApp) => {
    setDisabled(true);
    if (!selectedApps.find(a => a.id === installedApp.id)) {
      setSelectedApps( (selectedApps)=>{
        const updated = [...selectedApps,installedApp];
        localStorage.setItem("selectedApps", JSON.stringify(updated));
        return updated;
      });
    }
  };

    return (
        <div>
            <AppDetailesHeader app={app} addApp={addApp} disabled ={disabled}></AppDetailesHeader>
        </div>
    );
};

export default AppDetailes;