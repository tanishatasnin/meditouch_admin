import React from 'react';
import Sidebar from '../../Admin/Navbar/sidebar';
import Header from '../../Admin/Header/header';
import './Doctor.css';
import doctor_image from '../../../assets/assets/images/doctor-demo.jpg';
import Header1 from '../../Admin/Header/header1';


const doctor = () => {

    const doctors = [
        {
          id: 1,
          name: 'MD Rahmatullah',
          specialty: 'Endocrinologists',
          licenseId: '117',
          email: 'mdrahmatullah5468@gmail.com',
          gender: 'Male',
          phone: '01715638963',
          district: 'Barishal',
          dob: '1999-09-25',
          degrees: 'MBBS from DMC (2020)',
          timeSlots: 'Not added yet!',
          image: 'https://via.placeholder.com/80', // Placeholder image URL
        }
        // Add more doctors here
      ];
    
    return (
        <div>
            <Sidebar></Sidebar>
            {/* <Header>
            </Header> */}
            <Header1></Header1>
             <div className="doctor-page">
      
      {doctors.map((doctor) => (
        <div key={doctor.id} className="doctor-card">
          {/* <img src={doctor.image} alt={doctor.name} className="doctor-image" /> */}
          <img src={doctor_image} alt={doctor.name} className="doctor-image" />
          <div className="doctor-details">
            <h2 className="doctor-name">{doctor.name}</h2>
            <p className="doctor-specialty">{doctor.specialty}</p>
            <p>
              <strong>Licence ID:</strong> {doctor.licenseId}
            </p>
            <p>
              <strong>Email:</strong> {doctor.email}
            </p>
            <p>
              <strong>Gender:</strong> {doctor.gender}
            </p>
            <p>
              <strong>Phone:</strong> {doctor.phone}
            </p>
            <p>
              <strong>District:</strong> {doctor.district}
            </p>
            <p>
              <strong>Date of Birth:</strong> {doctor.dob}
            </p>
            <p>
              <strong>Degrees:</strong> {doctor.degrees}
            </p>
            <p>
              <strong>Available Time Slots:</strong> {doctor.timeSlots}
            </p>
          </div>
        </div>
      ))}
    </div>
            




        </div>
    );
};

export default doctor;