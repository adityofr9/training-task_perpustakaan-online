import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

// Import Slice
import { getBooks } from '../../../features/booksSlice';

// Import Component
import { TableBooks } from "./tableBooks";
import { Loading } from "../../loading";
import { AlertMsg } from '../../alert';

// Export Functional Component
export { Books };

function Books() {
    const dispatch = useDispatch()

    // State for search Book data
    const [searchBook, setSearchBook] = useState('')
    
    // Function for handle any change value on input search
    const handleSearch = async (e) => {
        const {value} = e.target
        setSearchBook(value)
    }
    
    // This will make searchBook value to lower case
    let searchValue = searchBook.toLowerCase();
    
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
                    <h1 className="h2">Book Data</h1>
                </div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    <form className="mb-2 mb-lg-0" role="search" style={{width: '280px'}}>
                        <input type="search" className="form-control" placeholder="Search by title, author, type book" aria-label="Search" onChange={(e) => handleSearch(e)} />
                    </form>
                    {/* Link Add Button */}
                    <Link to="/books/add" className='col-auto' >
                        <button type="button" className="btn btn-outline-danger">Add Books</button>
                    </Link>
                </div>

                {/* Table Content */}
                <TableBooks searchValue={searchValue}/>
            </>
        )
    }
}