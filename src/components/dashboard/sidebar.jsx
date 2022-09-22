import React from 'react';
import { NavLink } from "react-router-dom";

// Import Component
// import { Navbar } from "./navbar.js";

// Export Functional Component
export { Sidebar };

function Sidebar() {
    return(
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" style={
                            // Styling for active link
                            ({ isActive }) => ({background: isActive ? 'rgba(145, 31, 39, 0.5)' : ''})
                        } end>
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/books" style={
                            // Styling for active link
                            ({ isActive }) => ({background: isActive ? 'rgba(145, 31, 39, 0.5)' : ''})
                        }>
                            Data Buku
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/transaction" style={
                            // Styling for active link
                            ({ isActive }) => ({background: isActive ? 'rgba(145, 31, 39, 0.5)' : ''})
                        }>
                            Transaksi
                        </NavLink>
                    </li>
                    {/* Sidebar Toggle */}
                    {/* <li className='nav-item'>
                        <button className="navbar-toggler position-absolute collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}