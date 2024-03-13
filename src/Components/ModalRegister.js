import React, { useState } from "react";
import "./ModalRegister.css";
import { CiUser, CiPhone } from "react-icons/ci";
import { PiPasswordThin } from "react-icons/pi";

const ModalRegister = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [rePassword, setRePassword] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  const handleRegister = () => {
    if (password !== rePassword) {
      alert("Passwords do not match.");
      return;
    }
    const userData = { username, password, phoneNumber };
    localStorage.setItem("userData", JSON.stringify(userData));
    console.log(`User registered: ${username}`);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-content">
        <h2>Register Now</h2>
        <div className="form-field">
          <div className="input-icon-wrapper">
            <CiUser className="input-icon" />
            <input
              type="text"
              placeholder="Enter your username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-field">
          <div className="input-icon-wrapper">
            <PiPasswordThin className="input-icon" />
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-field">
          <div className="input-icon-wrapper">
            <PiPasswordThin className="input-icon" />
            <input
              type="password"
              placeholder="Re-type your password"
              onChange={(event) => {
                setRePassword(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-field">
          <div className="input-icon-wrapper">
            <CiPhone className="input-icon" />
            <input
              type="text"
              placeholder="Enter your phone"
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
            />
          </div>
        </div>
        <button className="btn-register" onClick={handleRegister}>
          Register
        </button>
      </div>
    </>
  );
};

export default ModalRegister;
