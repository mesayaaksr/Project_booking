// src/UILogin.js
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
    const savedData = localStorage.getItem("userData");
    const userData = savedData ? JSON.parse(savedData) : null;

    if (
      userData &&
      email === userData.username &&
      password === userData.password
    ) {
      navigate("/home");
    } else {
      alert("Invalid username or password.");
    }
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
          <h1>Welcome to Luxoasis</h1>
          <p>
          A resort filled with Nature and tranquility, the paradise you choose for yourself.
          </p>
        </div>
      </div>
      <div className="login-section">
        <div className="login-container">
          <form onSubmit={handleSubmit} className="login-form">
            <h2 className="login-title">USER LOGIN</h2>
            <input
              type="text"
              placeholder="Username"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
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
