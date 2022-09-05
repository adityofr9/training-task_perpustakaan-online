import React from 'react';
import { Link } from "react-router-dom";

// Export Functional Component
export { Navbar };

function Navbar() {
    return(
        <header class="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow">
            <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" to="">
                {/* <img src={process.env.PUBLIC_URL + '/assets/logonobg.png'} className="mx-auto d-block img-fluid" alt='logo' style="max" /> */}
                Company name
            </Link>
            <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-nav">
                <div class="nav-item text-nowrap">
                    {/* Temp */}
                    <Link className="nav-link px-3" to="/login">Sign out</Link>
                </div>
            </div>
        </header>
    )
}