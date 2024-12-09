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
import RegisterDoctor from "./components/Pages/Doctor/register_doctor";
import Emergency from "./components/Pages/Emergency/emergency";
import RegisterNurse from "./components/Pages/Nurses/register_nurse";

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

    },
    {
      path: "/Login",
      element:<Login></Login>,
      children:[
        {
          path:'/Login',
          element:<Login></Login>
  
        }
  
      ]
      
    },
    {
      path: "/pages/",
      element:<RegisterDoctor></RegisterDoctor>,
      children:[
        {
          path:'/pages/register_doctor',
          element:<RegisterDoctor></RegisterDoctor>
  
        }
  
      ]
    },
    {
      path:"/pages/",
      element:<RegisterNurse></RegisterNurse>,
      children:[
        {
            path:'/pages/register_nurse',
            element:<RegisterNurse></RegisterNurse>

    }
  ]
  },
    
  

  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);