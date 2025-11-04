import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home/Home';
import AppDetailes from '../pages/AppDtailes/AppDetailes';
import AllApps from '../pages/AllApps/AllApps';
import Installation from '../pages/Installation/Installation';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        
        index: true,
        loader: ()=> fetch('apps.json'),
        path : '/',
        Component: Home
      },
      {
        loader: ()=> fetch('apps.json'),
        path: '/Apps',
        Component: AllApps
      },
      {
              path: '/Installation',
              Component: Installation
      },
      {
        loader: ()=> fetch('apps.json').then(res => res.json()),
        path: '/Apps/:id',
        Component: AppDetailes
      }
      
    ]
  },
]);