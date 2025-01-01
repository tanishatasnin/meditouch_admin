import { useState } from "react";
import "./register_doctor.css";
import Sidebar from "../../Admin/Navbar/sidebar";
import Header from "../../Admin/Header/header";

const RegisterDoctor = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    district: "",
    licenseId: "",
    visitingFee: "",
    dob: "",
    specialty: "",
    image: null,
    degrees: [], // Array to store degrees
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleAddDegree = () => {
    const nextDegreeNumber = formData.degrees.length + 1;
    setFormData({
      ...formData,
      degrees: [
        ...formData.degrees,
        { degree: `degree${nextDegreeNumber}`, year: "", institution: "" },
      ],
    });
  };

  const handleDegreeChange = (index, field, value) => {
    const updatedDegrees = [...formData.degrees];
    updatedDegrees[index][field] = value; // Update specific field of the degree
    setFormData({ ...formData, degrees: updatedDegrees });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div>
      <Sidebar />
      <Header></Header>
      <div  className="register-nurse"> 

      {/* <h1 className="title">Register a Doctor</h1> */}
      
      <form onSubmit={handleSubmit} className="form">
      <p className="subtitle">Insert doctor details below:</p>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>
            Select gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          type="text"
          name="district"
          placeholder="District"
          value={formData.district}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="licenseId"
          placeholder="License ID"
          value={formData.licenseId}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="visitingFee"
          placeholder="Visiting Fee"
          value={formData.visitingFee}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="specialty"
          placeholder="Specialty"
          value={formData.specialty}
          onChange={handleInputChange}
          required
        />
        
        <button
          type="button"
          className="add-degree"
          onClick={handleAddDegree}
        >
          Add Degree
        </button>

        {/* Render degree input fields dynamically */}
        <div className="degrees-container">
  {formData.degrees.map((degree, index) => (
    <div key={index} className="degree-group">
      <label className="degree-label">Degree {index + 1}</label>
      <div className="degree-inputs">
        <input
          type="text"
          name={`degree-${index}`}
          placeholder="Degree"
          value={degree.degree}
          onChange={(e) => handleDegreeChange(e, index, "degree")}
        />
        <input
          type="text"
          name={`year-${index}`}
          placeholder="Year"
          value={degree.year}
          onChange={(e) => handleDegreeChange(e, index, "year")}
        />
        <input
          type="text"
          name={`institution-${index}`}
          placeholder="Institution"
          value={degree.institution}
          onChange={(e) => handleDegreeChange(e, index, "institution")}
        />
      </div>
    </div>
  ))}
</div>


        <label className="image-upload">
          Pick an image
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </label>
        <button type="submit" className="submit-button">
          Register Doctor
        </button>
      </form>
    </div>
    </div>
  );
};

export default RegisterDoctor;
