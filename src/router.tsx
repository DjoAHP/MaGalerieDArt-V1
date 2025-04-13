import React from 'react';
    import {
      createBrowserRouter,
      RouterProvider,
    } from "react-router-dom";
    import App from './App';
    import Musees from './musees';
    import Mythologie from './mythologie';

    const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/musees",
        element: <Musees />,
      },
      {
        path: "/mythologie",
        element: <Mythologie />,
      },
    ]);

    function Router() {
      return (
        <RouterProvider router={router} />
      );
    }

    export default Router;
