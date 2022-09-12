import React from 'react';
import { Route, Routes } from "react-router-dom";
import './dashboard.css';

// Import Component
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { Dashboard } from "./dashboard";
import { Books } from "./books/books";
import { Transaction } from "./transaction/transaction";
import { AddBooks } from './books/addBooks';
import { AddTransaction } from './transaction/addTransaction';

// Export Functional Component
export { Home };

function Home() {
    return(
        <>
            {/* Navbar Component */}
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    {/* Sidebar Component */}
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        {/* Route for Content Component */}                  
                        <Routes>
                            <Route path="/"  element={<Dashboard />}/>
                            <Route path="/books"  element={<Books />}/>
                            <Route path="/books/add"  element={<AddBooks />}/>
                            <Route path="/transaction" element={<Transaction />}/>
                            <Route path="/transaction/add"  element={<AddTransaction />}/>
                        </Routes>
                    </main>
                </div>
            </div>
        </>
    )
}