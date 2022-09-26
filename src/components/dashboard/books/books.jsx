import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getBooks } from '../../../features/booksSlice';
import { Link } from "react-router-dom";

// Import CSS
import '../dashboard.css';

// Import Component
import { TableBooks } from "./tableBooks";
import { Loading } from "../../loading";

// Export Functional Component
export { Books };

function Books() {
    const dispatch = useDispatch()
    
    // State for show component
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
        dispatch(getBooks())
        load()
    },[dispatch])


    if (!show) {
        return <Loading/>
    } else {
        return(
            <>
                {/* Title Content */}
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Data Buku</h1>
                </div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    <form className="col-auto col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                    </form>
                    {/* Link Add Button */}
                    <Link to="/books/add" >
                        <button type="button" className="btn btn-outline-danger">Add Books</button>
                    </Link>
                </div>
                {/* Table Content */}
                <TableBooks />
            </>
        )
    }
}