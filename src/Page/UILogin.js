import React, { useState } from "react";
import "./UILogin.css";
import ModalRegister from "../Components/ModalRegister";
import { useNavigate } from "react-router-dom";

function UILogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login submitted for email:", email);
    navigate("/home");
  };

  const showRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const hideRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  return (
    <div className="login-page">
      <div className="welcome-section">
        <div className="welcome-text">
          <h1>Welcome to website</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="login-section">
        <div className="login-container">
          <form onSubmit={handleSubmit} className="login-form">
            <h2 className="login-title">USER LOGIN</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit" className="login-button">
              LOGIN
            </button>
            <button
              type="button"
              className="register-button"
              onClick={showRegisterModal}
            >
              Register
            </button>
          </form>
        </div>
      </div>
      <ModalRegister isOpen={isRegisterModalOpen} onClose={hideRegisterModal} />
    </div>
  );
}

export default UILogin;
