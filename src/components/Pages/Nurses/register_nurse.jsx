import { useState } from "react";
import "./register_nurse.css";
import Sidebar from "../../Admin/Navbar/sidebar";
import Header from "../../Admin/Header/header";

const RegisterNurse = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    district: "",
    licenseId: "",
    chargePerHour: "", // Changed this field name to chargePerHour
    dob: "",
    specialty: "",
    image: null,
    degrees: [], // Array to store degrees
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Check if the field is "chargePerHour" and ensure no negative values
    if (name === "chargePerHour" && value < 0) {
      alert("Charge per hour cannot be negative. Setting it to 0.");
      setFormData({ ...formData, [name]: 0 });
      return;
    }

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
      <Header />
      <div className="register-nurse">
        <form onSubmit={handleSubmit} className="form">
          <p className="subtitle">Insert Nurse details below:</p>
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
            type="number"
            name="chargePerHour" // Changed to chargePerHour
            placeholder="Charge per hour"
            value={formData.chargePerHour} // Updated to chargePerHour
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
                    onChange={(e) =>
                      handleDegreeChange(e, index, "institution")
                    }
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
            Register Nurse
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterNurse;
