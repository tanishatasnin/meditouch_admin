import React from 'react';
import Sidebar from '../../Admin/Navbar/sidebar';
import Header from '../../Admin/Header/header';
import Header1 from '../../Admin/Header/header1';
import './emergency.css';
import doctor_image from '../../../assets/assets/images/doctor-demo.jpg';




const emengency_doctor = () => {

    const services = [
        {
          id: 1,
          name: 'Abdul Krim',
          email: 'rvivy42@gmail.com',
          phone: '01738439423',
          Distict: 'Dhaka',
          gender: 'Male',
          Fee: 'BDT 500 Per visit',
          Degree: 'A from DDDD(2025)',
          image: doctor_image,
        },
        
      ];

    return (
        <div className='page-body'>
            <Sidebar></Sidebar>
            <Header1></Header1>
            <div className="e-doctor-page">

        {services.map((doctor) => (
          <div key={doctor.id} className="e-doctor-card">
            {/* Profile Image */}
            <img src={doctor.image} alt={doctor.name} className="e-doctor-image" />
            
            {/* Details Section */}
            <div className="e-doctor-details">
              <h2 className="e-doctor-name">{doctor.name}</h2>
              <p>
                <strong>Email:</strong> {doctor.email}
              </p>
              <p>
                <strong>Phone:</strong> {doctor.gender}
              </p>
              <p>
                <strong>Service:</strong> {doctor.Distict}
              </p>
              <p>
                <strong>Request Time:</strong> {doctor.Fee}
              </p>
              <p>
                <strong>Request Time:</strong> {doctor.Degree}
              </p>
              
            </div>
            
            
          </div>
        ))}
      </div>


        </div>
    );
};

export default emengency_doctor;