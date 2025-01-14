import React from 'react';
import Sidebar from '../../Admin/Navbar/sidebar';
import Header1 from '../../Admin/Header/header1';
import './emergency.css';
import doctor_image from '../../../assets/assets/images/doctor-demo.jpg';

const emergency = () => {
  const services = [
    {
      id: 1,
      name: 'Limon',
      email: 'rvivy42@gmail.com',
      phone: '01738439423',
      service: 'Ambulance',
      requestTime: 'January 05, 2025, 10:22 PM',
      status: 'PENDING',
      image: doctor_image,
    },
    
  ];

  return (
    <div>
      <Sidebar />
      <Header1 />
      <div className="e-doctor-page">
        {services.map((service) => (
          <div key={service.id} className="e-doctor-card">
            {/* Profile Image */}
            <img src={service.image} alt={service.name} className="e-doctor-image" />
            
            {/* Details Section */}
            <div className="e-doctor-details">
              <h2 className="e-doctor-name">{service.name}</h2>
              <p>
                <strong>Email:</strong> {service.email}
              </p>
              <p>
                <strong>Phone:</strong> {service.phone}
              </p>
              <p>
                <strong>Service:</strong> {service.service}
              </p>
              <p>
                <strong>Request Time:</strong> {service.requestTime}
              </p>
              <p>
                <strong>Status:</strong> <span className={`status ${service.status.toLowerCase()}`}>{service.status}</span>
              </p>
            </div>
            
            {/* Button Section */}
            <div className="e-doctor-actions">
              <button className="e-btn view-location">View Location on Map</button>
              <button className="e-btn mark-done">✔ Mark as done</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default emergency;
