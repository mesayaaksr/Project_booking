// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import UILogin from './Page/UILogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<UILogin/>} />
      </Routes>
    </Router>
  );
}

export default App;
