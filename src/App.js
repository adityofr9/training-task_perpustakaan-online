import './App.css';
import React from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Routes
} from "react-router-dom";

// Import Component
import { Home } from "./components/dashboard/home";
import { Login } from "./components/login/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*"  element={<Home />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
  );
}

export default App;
