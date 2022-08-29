import React from 'react';

// Import Component
import { Navbar } from "./navbar.js";

// Export Functional Component
export { Sidebar };

function Sidebar() {
    return(
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse">
            <div class="position-sticky pt-3">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                        Dashboard
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                        Data Buku
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                        Transaksi
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}