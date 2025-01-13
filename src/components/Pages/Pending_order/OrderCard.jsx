import React, { useState } from "react";

export default function OrderCard({ initialOrders }) {
  const [allOrders, setAllOrders] = useState(initialOrders);

  const handleMarkAsDelivered = (orderId) => {
    const updatedOrders = allOrders.filter((order) => order.id !== orderId);

    setAllOrders(updatedOrders);
  };

  return (
    <div className="pending-orders-container">
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
                    <div className="item-separator">
                      <div>
                        <span className="item-name">{item.name}</span>
                      </div>
                      <div>
                        <span className="item-details">
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
              {order.status === "delivered" ? (
                <p>
                  <strong>Delivered Date:</strong> {order.date}
                </p>
              ) : null}
            </div>
            {order.status === "pending" ? (
              <button
                className="mark-delivered-button"
                onClick={() => handleMarkAsDelivered(order.id)}
              >
                Mark as Delivered
              </button>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
