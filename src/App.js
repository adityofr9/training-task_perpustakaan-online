import './App.css';
import React from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Routes
} from "react-router-dom";

// Import Component
import { Dashboard } from "./components/dashboard/dashboard.js";
import { Login } from "./components/login/login.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Dashboard />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
  );
}

export default App;
