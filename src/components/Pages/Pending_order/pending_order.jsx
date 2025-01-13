// export default PendingOrders;

import React from "react";
import Sidebar from "../../Admin/Navbar/sidebar";
import Header from "../../Admin/Header/header";
import "./pending_order.css";
import OrderCard from "./OrderCard";

const PendingOrders = ({ orders = [] }) => {
  const exampleOrders = [
    {
      id: "HtKsR4ODfwQWC4QiBFq",
      user: "John Doe",
      date: "November 09, 2024, 12:00 PM",
      paymentMethod: "bKash",
      paymentStatus: "Paid",
      address: "Dhaka, Bangladesh",
      items: [
        { name: "Sergel", quantity: 10, price: 7000 },
        { name: "Maxpro", quantity: 5, price: 4900 },
      ],
      totalAmount: 11900,
      status: "pending",
    },
    {
      id: "HtKsR4ODfwQQiBFq",
      user: "John Doe",
      date: "November 09, 2024, 12:00 PM",
      paymentMethod: "bKash",
      paymentStatus: "Paid",
      address: "Dhaka, Bangladesh",
      items: [
        { name: "Sergel", quantity: 10, price: 7000 },
        { name: "Maxpro", quantity: 5, price: 4900 },
      ],
      totalAmount: 11900,
      status: "pending",
    },
  ];

  const allOrders = orders.length > 0 ? orders : exampleOrders;



  return (
    <div className="main-container">
      <Sidebar />
      <div className="content">
        <Header />
     
    <OrderCard initialOrders={allOrders}></OrderCard> 
      </div>
    </div>
  );
};

export default PendingOrders;
