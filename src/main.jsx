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
import Doctor from "./components/Pages/Doctor/doctor";
// import register_doctor from "./components/Pages/Doctor/register_doctor";
import Emergency from "./components/Pages/Emergency/emergency";



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
  {
    path: "/pages/",
    element:<Doctor></Doctor>,
    children:[
      {
        path:'/pages/doctor',
        element:<Doctor></Doctor>

      }

    ]
  },
  {
    
      path:'/pages/emergency',
      element:<Emergency></Emergency>

    }
    
  

  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);