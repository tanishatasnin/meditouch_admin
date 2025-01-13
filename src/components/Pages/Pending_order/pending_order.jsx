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
          <div className="pending-orders-header">
            {/* <h2 className="pending-orders-title">Pending Orders</h2>
            <div className="notification-badge">{allOrders.length}</div> */}
          </div>
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
                      <li key={idx} className="item-row">
                        {/* <div className="item-separtor">
                          <span className="item-name">{item.name}</span>
                          <span className="item-details">
                            {item.quantity} × {item.price} ৳
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <hr className="divider" />
                  <p className="total-amount">
                    <div className="item-separtor"> 
                    <div> 
                    <strong>Total Amount:</strong>
                    </div>
                     {order.totalAmount} ৳
                    </div> */}
                        <div className="item-separator">
                          <div>
                            <span className="item-name">{item.name}</span>
                          </div>
                          <div>
                            <span className="item-details">
                              {" "}
                              {item.quantity} × {item.price} ৳
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <hr className="divider" />

                  <p className="total-amount">
                    <div className="item-separator">
                      <div>
                        <strong>Total Amount:</strong>
                      </div>
                      <div>{order.totalAmount} ৳</div>
                    </div>
                  </p>
                  <p className="order-status">
                    <strong>Order Status:</strong> {order.status}
                  </p>
                </div>
                <button
                  className="mark-delivered-button"
                  onClick={() => handleMarkAsDelivered(order.id)}
                >
                  Mark as Delivered
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingOrders;
