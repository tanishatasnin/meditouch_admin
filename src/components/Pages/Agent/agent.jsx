import React from 'react';
import Sidebar from '../../Admin/Navbar/sidebar';
import Header from '../../Admin/Header/header';
import Header1 from '../../Admin/Header/header1';
// import './Doctor.css';
import doctor_image from '../../../assets/assets/images/doctor-demo.jpg';


const agent = () => {
    const agents = [
        {
          id: 1,
          name: 'MD Rahmatullah',
          email: 'mdrahmatullah5468@gmail.com',
          gender: 'Male',
          phone: '01715638963',
          address:'Mohammadpur , dhaka',
          dob:'2nd march 1996 ',
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
      
      {agents.map((agent) => (
        <div key={agent.id} className="doctor-card">
          {/* <img src={doctor.image} alt={doctor.name} className="doctor-image" /> */}
          <img src={doctor_image} alt={agent.name} className="doctor-image" />
          <div className="doctor-details">
            <h2 className="doctor-name">{agent.name}</h2>
            <p>
              <strong>Licence ID:</strong> {agent.address}
            </p>
            <p>
              <strong>Email:</strong> {agent.email}
            </p>
            <p>
              <strong>Gender:</strong> {agent.gender}
            </p>
            <p>
              <strong>Phone:</strong> {agent.phone}
            </p>
            
            <p>
              <strong>Date of Birth:</strong> {agent.dob}
            </p>
            
          </div>
        </div>
      ))}
    </div>
            




        </div>
    );
};

export default agent;