import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Dashboard from "./components/Admin/Dashboard/dashboard";
import Navbar from "./components/Admin/Navbar/navbar";
import Header from "./components/Admin/Header/header";
import Sidebar from "./components/Admin/Navbar/sidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Dashboard></Dashboard>,
    children:[
      {
        path: '/navbar',
        element: <Navbar></Navbar>
      },
      {
        path: '/sidebar',
        element: <Sidebar></Sidebar>
      },
      {
        path: '/header',
        element: <Header></Header>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);