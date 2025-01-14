import React from 'react';
import Sidebar from '../../Admin/Navbar/sidebar';
import Header from '../../Admin/Header/header';
import OrderCard from '../Pending_order/OrderCard';
import Header2 from '../../Admin/Header/header2';

const order_history = ({ orders = [] }) => {

    const exampleOrders = [
        {
          id: "HtKsR4ODfwQWC4Fq",
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
          status: "delivered",
        },
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
            status: "delivered",
          },
      ];
    
      const allOrders = orders.length > 0 ? orders : exampleOrders;

    return (
        <div>
            <Sidebar></Sidebar>
            <Header2></Header2>
            <OrderCard initialOrders={allOrders}></OrderCard>
        </div>
    );
};

export default order_history;