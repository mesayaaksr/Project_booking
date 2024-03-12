import React, { useState, useEffect } from "react";
import "./ModalRegister.css"; // Import your new stylesheet

const ModalRegister = ({ isOpen, onClose }) => {
  const [registrationInfo, setRegistrationInfo] = useState(() => {
    const savedRegistrationInfo = JSON.parse(localStorage.getItem("registrationInfo")) || {};
    return savedRegistrationInfo;
  });
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistrationInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    console.log("Registration Info:", registrationInfo);

    setRegistrationStatus("Registration successful!"); 
  };

  useEffect(() => {
    localStorage.setItem("registrationInfo", JSON.stringify(registrationInfo));
  }, [registrationInfo]);

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-content">
        <h2>Register Now</h2>
        <div className="form-field">
          <i className="icon-username" /> 
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={registrationInfo.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
          <i className="icon-password" />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={registrationInfo.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
          <i className="icon-password" />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-type your password"
            value={registrationInfo.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
          <i className="icon-phone" />
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone"
            value={registrationInfo.phone}
            onChange={handleInputChange}
          />
        </div>
        <button className="btn-register" onClick={handleRegister}>
          Register
        </button>
        {registrationStatus && (
          <p className="registration-status">{registrationStatus}</p>
        )}
      </div>
    </>
  );
};

export default ModalRegister;
