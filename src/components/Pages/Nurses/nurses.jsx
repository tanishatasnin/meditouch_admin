import React from 'react';
import Sidebar from '../../Admin/Navbar/sidebar';
import Header from '../../Admin/Header/header';
import '../Doctor/Doctor.css';


const nurses = () => {

    const nurses = [
        {
          
          name: 'Rokeya Begum',
          email: 'rcicy42@gamil.com.com',
          gender: 'feMale',
          phone: '01998919720',
          district: 'Dhaka',
          degrees: 'A From SDFSDF (2020)',
          charge:'150',
          image: 'https://via.placeholder.com/80'
        }
       
      ];
    return (
        <div>
            <Sidebar></Sidebar>
            <Header></Header>
            
             <div className="doctor-page">
      
      {nurses.map((nurses) => (
        <div key={nurses.id} className="doctor-card">
          <img src={nurses.image} alt={nurses.name} className="doctor-image" />
          <div className="doctor-details">
            <h2 className="doctor-name">{nurses.name}</h2>
            
            <p>
              <strong>Email:</strong> {nurses.email}
            </p>
            <p>
              <strong>Gender:</strong> {nurses.gender}
            </p>
            <p>
              <strong>Phone:</strong> {nurses.phone}
            </p>
            <p>
              <strong>District:</strong> {nurses.district}
            </p>
            
            <p>
              <strong>Degrees:</strong> {nurses.degrees}
            </p>
            <p>
              <strong>Charges Per Hour:</strong> {nurses.charge}
            </p>
            
          </div>
        </div>
      ))}
    </div>
            




        </div>
    );
};

export default nurses;