import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";

import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Monthly from "./pages/Monthly";
import Weekly from "./pages/Weekly";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weekly" element={<Weekly />} />
        <Route path="/monthly" element={<Monthly />} />
      </Routes>
    </Router>
  );
}

export default App;
