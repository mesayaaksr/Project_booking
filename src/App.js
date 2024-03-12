// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import UILogin from './Page/UILogin';
import UIHome from "./Page/UIHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<UILogin/>} />
        <Route path="/home" element={<UIHome/>}/>
      </Routes>
    </Router>
  );
}

export default App;
