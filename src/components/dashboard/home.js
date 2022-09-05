import React from 'react';
import { Route, Routes } from "react-router-dom";
import './dashboard.css';

// Import Component
import { Navbar } from "./navbar.js";
import { Sidebar } from "./sidebar.js";
import { Dashboard } from "./dashboard";
import { List } from "./listBooks.js";
import { Transaction } from "./transaction.js";

// Export Functional Component
export { Home };

function Home() {
    return(
        <>
            {/* Navbar Component */}
            <Navbar />
            <div class="container-fluid">
                <div class="row">
                    {/* Sidebar Component */}
                    <Sidebar />
                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        {/* Route for Content Component */}                  
                        <Routes>
                            <Route path="/"  element={<Dashboard />}/>
                            <Route path="/books"  element={<List />}/>
                            <Route path="/transaction" element={<Transaction />}/>
                        </Routes>
                    </main>
                </div>
            </div>
        </>
    )
}