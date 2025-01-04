// import React from "react";
// import Sidebar from "../../Admin/Navbar/sidebar";
// import Header from "../../Admin/Header/header";
// import "./pending_order.css";

// const PendingOrders = ({ orders = [] }) => {
//   const exampleOrders = [
//     {
//       id: "HtKsR4ODfwQWC4QiBFq",
//       user: "John Doe",
//       date: "November 09, 2024, 12:00 PM",
//       paymentMethod: "bKash",
//       paymentStatus: "Paid",
//       address: "Dhaka, Bangladesh",
//       items: [
//         { name: "Sergel", quantity: 10, price: 7000 },
//         { name: "Maxpro", quantity: 5, price: 4900 },
//       ],
//       totalAmount: 11900,
//       status: "Pending",
//     },
//   ];

//   const allOrders = orders.length > 0 ? orders : exampleOrders;

//   return (
//     <div className="main-container">
//       <Sidebar />
//       <div className="content">
//         <Header />
//         <div className="pending-orders-container">
//           {/* Header Section */}
//           <div className="pending-orders-header">
//             {/* <h2 className="pending-orders-title">Pending Orders</h2>
//             <div className="notification-badge">{allOrders.length}</div> */}
//           </div>
//           {/* Order Cards */}
//           <div className="order-cards">
//             {allOrders.map((order, index) => (
//               <div key={index} className="order-card">
//                 <div className="card-header">
//                   <p>
//                     <strong>Order ID:</strong> {order.id}
//                   </p>
//                   <p>
//                     <strong>User:</strong> {order.user}
//                   </p>
//                 </div>
//                 <hr className="divider" />
//                 <div className="card-details">
//                   <p>
//                     <strong>Order Date:</strong> {order.date}
//                   </p>
//                   <p>
//                     <strong>Payment Method:</strong> {order.paymentMethod}
//                   </p>
//                   <p>
//                     <strong>Payment Status:</strong> {order.paymentStatus}
//                   </p>
//                   <p>
//                     <strong>User Address:</strong> {order.address}
//                   </p>
//                   <h4>Ordered Items:</h4>
//                   <ul className="ordered-items">
//                     {order.items.map((item, idx) => (
//                       <li key={idx}>
//                         <span>{item.name}</span>
//                         <span>
//                           {item.quantity} x {item.price} ৳
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                   <p>
//                     <strong>Total Amount:</strong> {order.totalAmount} ৳
//                   </p>
//                   <p>
//                     <strong>Order Status:</strong> {order.status}
//                   </p>
//                   <button
//                     className="mark-delivered-button"
//                     onClick={() => handleMarkAsDelivered(order.id)}
//                   >
//                     Mark as Delivered
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const handleMarkAsDelivered = (orderId) => {
//   console.log(`Order ${orderId} marked as delivered!`);
// };

// export default PendingOrders;
//responsive

// import React from "react";
// import Sidebar from "../../Admin/Navbar/sidebar";
// import Header from "../../Admin/Header/header";
// import "./pending_order.css";

// const PendingOrders = ({ orders = [] }) => {
//   const exampleOrders = [
//     {
//       id: "HtKsR4ODfwQWC4QiBFq",
//       user: "John Doe",
//       date: "November 09, 2024, 12:00 PM",
//       paymentMethod: "bKash",
//       paymentStatus: "Paid",
//       address: "Dhaka, Bangladesh",
//       items: [
//         { name: "Sergel", quantity: 10, price: 7000 },
//         { name: "Maxpro", quantity: 5, price: 4900 },
//       ],
//       totalAmount: 11900,
//       status: "Pending",
//     },
//   ];

//   const allOrders = orders.length > 0 ? orders : exampleOrders;

//   const handleMarkAsDelivered = (orderId) => {
//     console.log(`Order ${orderId} marked as delivered!`);
//   };

//   return (
//     <div className="main-container">
//       <Sidebar />
//       <div className="content">
//         <Header />
//         <div className="pending-orders-container">
//           {/* Header Section */}
//           <div className="pending-orders-header">
//             {/* <h2 className="pending-orders-title">Pending Orders</h2>
//             <div className="notification-badge">{allOrders.length}</div> */}
//           </div>
//           {/* Order Cards */}
//           <div className="order-cards">
//             {allOrders.map((order, index) => (
//               <div key={index} className="order-card">
//                 <div className="card-header">
//                   <p>
//                     <strong>Order ID:</strong> {order.id}
//                   </p>
//                   <p>
//                     <strong>User:</strong> {order.user}
//                   </p>
//                 </div>
//                 <hr className="divider" />
//                 <div className="card-details">
//                   <p>
//                     <strong>Order Date:</strong> {order.date}
//                   </p>
//                   <p>
//                     <strong>Payment Method:</strong> {order.paymentMethod}
//                   </p>
//                   <p>
//                     <strong>Payment Status:</strong> {order.paymentStatus}
//                   </p>
//                   <p>
//                     <strong>User Address:</strong> {order.address}
//                   </p>
//                   <h4>Ordered Items:</h4>
//                   <ul className="ordered-items">
//                     {order.items.map((item, idx) => (
//                       <li key={idx}>
//                         <span>{item.name}</span>
//                         <span>
//                           {item.quantity} x {item.price} ৳
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                   <p>
//                     <strong>Total Amount:</strong> {order.totalAmount} ৳
//                   </p>
//                   <p>
//                     <strong>Order Status:</strong> {order.status}
//                   </p>
//                   <button
//                     className="mark-delivered-button"
//                     onClick={() => handleMarkAsDelivered(order.id)}
//                   >
//                     Mark as Delivered
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PendingOrders;

import React from "react";
import Sidebar from "../../Admin/Navbar/sidebar";
import Header from "../../Admin/Header/header";
import "./pending_order.css";

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
      status: "Pending",
    },
  ];

  const allOrders = orders.length > 0 ? orders : exampleOrders;

  const handleMarkAsDelivered = (orderId) => {
    console.log(`Order ${orderId} marked as delivered!`);
  };

  return (
    <div className="main-container">
      <Sidebar />
      <div className="content">
        <Header />
        <div className="pending-orders-container">
          {/* Header Section */}
          <div className="pending-orders-header">
            <h2 className="pending-orders-title">Pending Orders</h2>
            <div className="notification-badge">{allOrders.length}</div>
          </div>
          {/* Order Cards */}
          <div className="order-cards">
            {allOrders.map((order, index) => (
              <div key={index} className="order-card">
                <div className="card-header">
                  <p>
                    <strong>Order ID:</strong> {order.id}
                  </p>
                  <p>
                    <strong>User:</strong> {order.user}
                  </p>
                </div>
                <hr className="divider" />
                <div className="card-details">
                  <p>
                    <strong>Order Date:</strong> {order.date}
                  </p>
                  <p>
                    <strong>Payment Method:</strong> {order.paymentMethod}
                  </p>
                  <p>
                    <strong>Payment Status:</strong> {order.paymentStatus}
                  </p>
                  <p>
                    <strong>User Address:</strong> {order.address}
                  </p>
                  <h4>Ordered Items:</h4>
                  <ul className="ordered-items">
                    {order.items.map((item, idx) => (
                      <li key={idx}>
                        <span>{item.name}</span>
                        <span>
                          {item.quantity} x {item.price} ৳
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p>
                  <hr className="divider" />
                    <strong>Total Amount:</strong> {order.totalAmount} ৳
                  </p>
                  <p>
                    <strong>Order Status:</strong> {order.status}
                  </p>
                  <button id = "order"
                    className="mark-delivered-button"
                    onClick={() => handleMarkAsDelivered(order.id)}
                  >
                    Mark as Delivered
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingOrders;
