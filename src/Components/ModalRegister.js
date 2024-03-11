import React from "react";
import "./ModalRegister.css"; // Import your new stylesheet
const ModalRegister = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-content">
        <h2>Register Now</h2>
        <div className="form-field">
          <i className="icon-username" /> {/* Replace with actual icons */}
          <input type="text" placeholder="Enter your username" />
        </div>
        <div className="form-field">
          <i className="icon-password" />
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className="form-field">
          <i className="icon-password" />
          <input type="password" placeholder="Re-type your password" />
        </div>
        <div className="form-field">
          <i className="icon-phone" />
          <input type="text" placeholder="Enter your phone" />
        </div>
        <button className="btn-register">Register</button>
      </div>
    </>
  );
};

export default ModalRegister;
