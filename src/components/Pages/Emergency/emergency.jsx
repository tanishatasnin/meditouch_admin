import React from 'react';
import Sidebar from '../../Admin/Navbar/sidebar';
import Header1 from '../../Admin/Header/header1';
import './emergency.css';
import doctor_image from '../../../assets/assets/images/doctor-demo.jpg';

const emergency = () => {
  const doctors = [
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
        {doctors.map((doctor) => (
          <div key={doctor.id} className="e-doctor-card">
            {/* Profile Image */}
            {/* <img src={doctor.image} alt={doctor.name} className="doctor-image" /> */}
            
            {/* Details Section */}
            <div className="e-doctor-details">
              <h2 className="e-doctor-name">{doctor.name}</h2>
              <p>
                <strong>Email:</strong> {doctor.email}
              </p>
              <p>
                <strong>Phone:</strong> {doctor.phone}
              </p>
              <p>
                <strong>Service:</strong> {doctor.service}
              </p>
              <p>
                <strong>Request Time:</strong> {doctor.requestTime}
              </p>
              <p>
                <strong>Status:</strong> <span className={`status ${doctor.status.toLowerCase()}`}>{doctor.status}</span>
              </p>
            </div>
            
            {/* Button Section */}
            <div className="e-doctor-actions">
              <button className="btn view-location">View Location on Map</button>
              <button className="btn mark-done">✔ Mark as done</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default emergency;
