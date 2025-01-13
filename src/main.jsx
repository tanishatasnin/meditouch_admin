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
import Emergency from "./components/Pages/Emergency/emergency";
import Register_doc from "./components/Pages/Doctor/register_doctor";
import Nurses from "./components/Pages/Nurses/nurses";
import Register_nurse from "./components/Pages/Nurses/register_nurse"
import Pending_order from "./components/Pages/Pending_order/pending_order";
import Emengency_doc from "./components/Pages/Emergency/emengency_doctor";
import Order_History from "./components/Pages/Order_History/order_history";
import Add_emergency_doctor from "./components/Pages/Emergency/add_emergency_doctor";
import Add_agent from "./components/Pages/Agent/add_agent";
import Agent from "./components/Pages/Agent/agent";
import Home from "./components/Admin/Home/home";


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
      },{
        path: '/home',
        element: <Home></Home>
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
      path: "/register_doctor",
      element: <Register_doc></Register_doc>
    },
    {
      path: "/register_nurse",
      element: <Register_nurse></Register_nurse>
    },
    {
      path: "/pending-orders",
      element: <Pending_order></Pending_order>
    },
    {
      path: "/emergency-doctors",
      element: <Emengency_doc></Emengency_doc>
    }, 
    {
      path: "/order-history",
      element: <Order_History></Order_History>
    }
    ,
    {
      path:"/add-emergency-doctor", 
      element:<Add_emergency_doctor></Add_emergency_doctor>
    },{
      path: "/add-agent",
      element: <Add_agent></Add_agent>
    }
    ,
    {
      path:"/agents", 
      element:<Agent></Agent>
    }


  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);