import React from 'react';
import { createBrowserRouter } from "react-router-dom";
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
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch('/apps.json').then(res => res.json()),
        Component: Home,
      },
      {
        path: '/Apps',
        loader: () => fetch('/apps.json').then(res => res.json()),
        Component: AllApps,
      },
      {
        path: '/Installation',
        Component: Installation,
      },
      {
        path: '/Apps/:id',
        loader: () => fetch('/apps.json').then(res => res.json()),
        Component: AppDetailes,
      },
    ],
  },
]);
