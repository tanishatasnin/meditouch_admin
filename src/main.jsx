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
import Login from "./components/Admin/Login/login";
// import register_doctor from "./components/Pages/Doctor/register_doctor";
import Emergency from "./components/Pages/Emergency/emergency";
import Register_doc from "./components/Pages/Doctor/register_doctor";
import Nurses from "./components/Pages/Nurses/nurses";
import Register_nurse from "./components/Pages/Nurses/register_nurse"


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
      }
      
    ]
  }, 
  {
    path: "/doctor",
    element:<Doctor></Doctor>,
    children:[
      {
        path:'/doctor',
        element:<Doctor></Doctor>

      }

    ]
  },
  {
    
      path:'/emergency',
      element:<Emergency></Emergency>

    },
    {
      path: "/login",
      element:<Login></Login>,
      }
    ,
    {
      path: "/nurses",
      element:<Nurses></Nurses>,
      
      }
    ,
    
    {
      path: "/header",
      element:<Header></Header>,
      
      
    },
    {
      path: "/register_doctor",
      element: <Register_doc></Register_doc>
    },
    {
      path: "/register_doctor",
      element: <Register_doc></Register_doc>
    },
    {
      path: "/register_nurse",
      element: <Register_nurse></Register_nurse>
    }


  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);