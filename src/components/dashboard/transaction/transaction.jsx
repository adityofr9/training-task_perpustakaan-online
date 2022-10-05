import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

// Import Slice
import { getBooks } from '../../../features/booksSlice';
import { getTransactions } from '../../../features/transactionsSlice';

// Import Component
import { TableTransactions } from "./tableTransactions";
import { Loading } from "../../loading";
import { AlertMsg } from '../../alert';

// Export Functional Component
export { Transaction };

function Transaction() {
    const dispatch = useDispatch()

    // Initial state for search Transaction data
    const [searchTransaction, setSearchTransaction] = useState('')

    // Function for handle any change value on input search
    const handleSearch = async (e) => {
        const {value} = e.target
        setSearchTransaction(value)
    }

    // This will make searchBook value to lower case
    let searchValue = searchTransaction.toLowerCase();


    // Initial state for show component
    const [show, setShow] = useState(false)
    
    // Asynchronous funtion for loading component
    const load = async () => {
        const promise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                setShow(true)
                resolve()
            }, 100)
        })
        await promise
    }

    useEffect(() => {
        // Dispatch actions for get Book state from store
        dispatch(getBooks())
        // Dispatch actions for get Transactions state from store
        dispatch(getTransactions())
        // Callback Function Load
        load()
    },[dispatch])

    
    // Conditional Rendering for loading component
    if (!show) {
        return <Loading/>
    } else {
        return(
            <>
                <AlertMsg/>
                {/* Title Content */}
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Book Lending & Return Transactions</h1>
                </div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    <form className="mb-2 mb-lg-0" role="search" style={{width: '280px'}}>
                        <input type="search" className="form-control" placeholder="Search by name, date" aria-label="Search" onChange={(e) => handleSearch(e)} />
                    </form>
                    {/* Add Button */}
                    <Link to="/transaction/add" >
                        <button type="button" className="btn btn-outline-danger">Lend Book</button>
                    </Link>
                </div>
                {/* Table Content */}
                <TableTransactions searchValue={searchValue}/>
            </>
        )
    }
}