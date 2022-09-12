import React from 'react';
import { Link } from "react-router-dom";

// Import CSS
import '../dashboard.css';

// Import Component
import { TableTransactions } from "./tableTransactions";

// Export Functional Component
export { Transaction };

function Transaction() {
    return(
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Transaksi Peminjaman & Pengembalian Buku</h1>
            </div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                <form className="col-12 col-sm-auto mb-2 mb-lg-0 me-lg-auto" role="search">
                    <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                </form>
                {/* Add Button */}
                <Link to="/transaction/add" >
                    <button type="button" className="btn btn-outline-danger">Pinjam Buku</button>
                </Link>
            </div>
            {/* Table Content */}
            <TableTransactions />
        </>
    )
}