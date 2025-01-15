
//new for responsive layout
import { useState,useEffect } from "react";
import "./Sidebar.css";
import logo from "./../../../assets/assets/images/logo.png";
import { Link } from "react-router-dom";

import icon_nurse from "./../../../assets/assets/icons/nurse2.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  });
  return (
    <>
      {/* Hamburger Menu */}
      <div
        className="hamburger-menu"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
        aria-expanded={isOpen}
      >
        <i className="fa fa-bars"></i>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
        {/* Close Button */}
        <div className="close-button" onClick={toggleSidebar}>
          <i className="fa fa-times"></i>
        </div>

        {/* Sidebar Header with Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" className="sidebar-logo" />
        </div>

        {/* Menu Section */}
        <div className="menu-section">
      <ul className="menu">
        <Link
          to="/"
          className={`menu-item ${location.pathname === "/" ? "active" : ""}`}
        >
          <i className="fa fa-home"></i>
          <span>Home</span>
        </Link>
        <Link
          to="/emergency"
          className={`menu-item ${
            location.pathname === "/emergency" ? "active" : ""
          }`}
        >
          <i className="fa fa-bell"></i>
          <span>Emergency</span>
        </Link>
        <Link
          to="/doctor"
          className={`menu-item ${
            location.pathname === "/doctor" ? "active" : ""
          }`}
        >
          <i className="fa fa-user-md"></i>
          <span>Doctors</span>
        </Link>
        <Link
          to="/register_doctor"
          className={`menu-item ${
            location.pathname === "/register_doctor" ? "active" : ""
          }`}
        >
          <i className="fa fa-user-plus"></i>
          <span>Register Doctor</span>
        </Link>
        <Link
          to="/nurses"
          className={`menu-item ${
            location.pathname === "/nurses" ? "active" : ""
          }`}
        >
          <i className={"fa fa-user"}></i>
          <span>Nurses</span>
        </Link>
        <Link
          to="/register_nurse"
          className={`menu-item ${
            location.pathname === "/register_nurse" ? "active" : ""
          }`}
        >
          <i className="fa fa-user-nurse"></i>
          <span>Add Nurses</span>
        </Link>
        <Link
          to="/pending-orders"
          className={`menu-item ${
            location.pathname === "/pending-orders" ? "active" : ""
          }`}
        >
          <i className="fa fa-list"></i>
          <span>Pending Orders</span>
        </Link>
        <Link
          to="/order-history"
          className={`menu-item ${
            location.pathname === "/order-history" ? "active" : ""
          }`}
        >
          <i className="fa fa-history"> </i>
          <span>Order History</span>
        </Link>
        <Link
          to="/emergency-doctors"
          className={`menu-item ${
            location.pathname === "/emergency-doctors" ? "active" : ""
          }`}
        >
          <i className="fa fa-users"></i>
          <span>Emergency Doctors</span>
        </Link>
        <Link
          to="/add-emergency-doctor"
          className={`menu-item ${
            location.pathname === "/add-emergency-doctor" ? "active" : ""
          }`}
        >
          <i className="fa fa-plus-circle"></i>
          <span>Add Emergency Doctor</span>
        </Link>
        <Link
          to="/agents"
          className={`menu-item ${
            location.pathname === "/agents" ? "active" : ""
          }`}
        >
          <i className="fa fa-users"></i>
          <span>Agents</span>
        </Link>
        <Link
          to="/add-agent"
          className={`menu-item ${
            location.pathname === "/add-agent" ? "active" : ""
          }`}
        >
          <i className="fa fa-user-tie"></i>
          <span>Add Agent</span>
        </Link>
      </ul>
    </div>

        {/* Logout Button */}
        <div className="logout">
          <button className="logout-button">Sign out</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
