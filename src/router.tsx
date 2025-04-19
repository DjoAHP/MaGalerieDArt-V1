import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Musees from "./musees";
import Mythologie from "./mythologie";
import Scultures from "./scultures";
import Dessins from "./dessins";
import Livres from "./livres";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dessins",
    element: <Dessins />,
  },
  {
    path: "/livres",
    element: <Livres />,
  },
  {
    path: "/scultures",
    element: <Scultures />,
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
  return <RouterProvider router={router} />;
}

export default Router;
