import React from 'react';
import { Link } from "react-router-dom";

// Export Functional Component
export { Navbar };

function Navbar() {
    return(
        <header className="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow">
            <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" to="">
                {/* <img src={process.env.PUBLIC_URL + '/assets/logonobg.png'} className="mx-auto d-block img-fluid" alt='logo' style="max" /> */}
                Company name
            </Link>
            <div className="navbar-nav">
                {/* Temp */}
                <Link className="navbar-nav logout nav-link px-3" to="/login">Logout</Link>
            </div>
        </header>
    )
}