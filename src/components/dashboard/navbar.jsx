import React from 'react';
import { Link } from "react-router-dom";

// Export Functional Component
export { Navbar };

function Navbar() {
    return(
        <header className="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow">
            {/* Navbar Logo */}
            <Link className="d-flex col-md-3 col-lg-2 me-0 text-decoration-none" to="" style={{height: '50px'}}>
                <img src={process.env.PUBLIC_URL + '/assets/logo-only.png'} className="mx-auto p-1 d-block img-fluid" alt='logo' style={{objectFit: 'contain', height: '100%', width: '100%'}} />
                <p className='h3 fw-bolder me-2' style={{lineHeight: '170%'}}>
                    <span className='text-danger'>HON</span><span className='text-black'>LINE</span>
                </p>
            </Link>
            {/* Navbar Logout */}
            <div className="navbar-nav">
                <Link className="navbar-nav logout nav-link px-3 fw-bold" to="/login">Logout</Link>
            </div>
        </header>
    )
}