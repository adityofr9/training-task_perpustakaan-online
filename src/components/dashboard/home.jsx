import React from 'react';
import { Route, Routes } from "react-router-dom";
import './dashboard.css';

// Import Component
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { Dashboard } from "./dashboard";
import { Books } from "./books/books";
import { DetailBooks } from "./books/detailBooks";
import { AddBooks } from './books/addBooks';
import { EditBooks } from './books/editBooks';
import { Transaction } from "./transaction/transaction";
import { AddTransaction } from './transaction/addTransaction';

// Export Functional Component
export { Home };

function Home() {
    return(
        <>
            {/* Navbar Component */}
            <Navbar />
            <div className="container-fluid min-vh-100">
                <div className="row">
                    {/* Sidebar Component */}
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 pb-3">
                        {/* Route for Content Component */}                  
                        <Routes>
                            <Route path="/"  element={<Dashboard />}/>
                            <Route path="/books"  element={<Books />}/>
                            <Route path="/books/:id"  element={<DetailBooks />}/>
                            <Route path="/books/add"  element={<AddBooks />}/>
                            <Route path="/books/edit/:id"  element={<EditBooks />}/>
                            <Route path="/transaction" element={<Transaction />}/>
                            <Route path="/transaction/add"  element={<AddTransaction />}/>
                        </Routes>
                    </main>
                </div>
            </div>
            {/* Footer */}
            <footer className="footer position-sticky py-1 border-top" style={{zIndex: 1100}}>
                <div className="container text-center">
                    <span className="text-light fw-semibold">&copy; 2022 Copyright HONLINE</span>
                </div>
            </footer>
        </>
    )
}