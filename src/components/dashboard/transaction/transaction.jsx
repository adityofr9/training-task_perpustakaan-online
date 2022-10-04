import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

// Import Slice
import { getBooks } from '../../../features/booksSlice';
import { getTransactions } from '../../../features/transactionsSlice';

// Import Component
import { TableTransactions } from "./tableTransactions";

// Export Functional Component
export { Transaction };

function Transaction() {
    const dispatch = useDispatch()

    useEffect(() => {
        // Dispatch actions for get Book state from store
        dispatch(getBooks())
        // Dispatch actions for get Transactions state from store
        dispatch(getTransactions())
        // load()
    },[dispatch])

    return(
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Book Lending & Return Transactions</h1>
            </div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                <form className="mb-2 mb-lg-0" role="search" style={{width: '280px'}}>
                    <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                </form>
                {/* Add Button */}
                <Link to="/transaction/add" >
                    <button type="button" className="btn btn-outline-danger">Lend Book</button>
                </Link>
            </div>
            {/* Table Content */}
            <TableTransactions />
        </>
    )
}