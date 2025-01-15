import React from 'react';
import Sidebar from '../../Admin/Navbar/sidebar';
import Header from '../../Admin/Header/header';
import '../Doctor/Doctor.css';
import Header1 from '../../Admin/Header/header1';


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
        },{
          
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
        <div className='page-body'>
            <Sidebar></Sidebar>
            <Header1></Header1>
            
             <div className="doctor-page">
      
      {nurses.map((nurses) => (
        <div key={nurses.id} className="doctor-card">
          <img src={nurses.image} className="doctor-image" />
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