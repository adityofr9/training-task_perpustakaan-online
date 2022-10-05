import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

// Import fake-backend
import { estimateMin } from "../../../utils/fake-backend";

// Import Slice
import { getBooks, updateBook, booksSelectors } from '../../../features/booksSlice';
import { saveTransaction } from "../../../features/transactionsSlice";
import { alertAction } from "../../../features/alertsSlice";

// Export the component
export { AddTransaction };

function AddTransaction() {
    // Initial Transaction State
    const [bookId, setBookId] = useState()
    const [borrowerName, setBorrowerName] = useState('')
    const [borrowerAge, setBorrowerAge] = useState('')
    const [borrowDate, setbBorrowDate] = useState('')
    const [returnEstimate, setReturnEstimate] = useState('')
    const [returnedDate] = useState('')

    // Initial Book State
    const [id, setId] = useState('')
    const [status, setStatus] = useState('')
    
    // Variable for keep book data based on Book ID
    let selectedBook

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    useEffect(() => {
        // Dispatch actions for get Book state from store
        dispatch(getBooks())
    },[dispatch])

    // Filtering available book data based on book status
    const availableBook = useSelector(booksSelectors.selectAll).filter(book => book.status === "Available")

    // Conditional when book id has been selected
    if (bookId) {
        selectedBook = availableBook.filter((book) => book.id === bookId)
    }

    
    // Event handle onChange on input Lend Date Field
    const onBorrow = (e) => {
        setbBorrowDate(e.target.value)
        // This conditional will automaticaly update Estimate Return value
        // when Estimate Return field already filled
        if (returnEstimate) {
            setReturnEstimate(estimateMin(e.target.value))
        }
    }
    
    // Event handle onChange on input Return Estimate Date Field
    const onEstimate = (e) => {
        setReturnEstimate(e.target.value)
    }

    useEffect(() => {
        if (bookId) {
            setId(selectedBook[0].id)
            setStatus("Borrowed")
        }
    }, [bookId, selectedBook])
    
    const createTransaction = async (e) => {
        e.preventDefault();

        const paramTransaction = { bookId, borrowerName, borrowerAge, borrowDate, returnEstimate, returnedDate};
        await dispatch(saveTransaction(paramTransaction));

        const updateBookStatus = { id, status }
        dispatch(updateBook(updateBookStatus));
        
        // Action for alert state when success input book data
        await dispatch(
            alertAction.createAlert({
                message: "Successfully Input Transaction Data!",
                type: "success"
            })
        );
        
        navigate('/transaction')
    }
    
    return (
    <>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Book Lend Form</h1>
        </div>
        <form onSubmit={createTransaction} className="row g-3 col-10 mx-auto">
            <div className="col-md-12">
                <label htmlFor="inputTitle" className="form-label">Book Title</label>
                <select id="inputTitle" className="form-select border-danger border-opacity-25"
                defaultValue={""}
                onChange={(e) => setBookId(parseInt(e.target.value))}
                required>
                    <option value="" disabled>Choose Book Title</option>
                    {/* Transforming options array into lists of option elements */}
                    {availableBook.length > 0
                    ? availableBook.map((book) => (
                        <option key={book.id} value={book.id}>
                            {book.title}
                        </option>
                    ))
                    : <option value="" disabled>Books are not available for lend!</option>}
                </select>
            </div>
            <div className="col-6">
                <label htmlFor="inputAuthor" className="form-label">Author</label>
                <input type="text" className="form-control border-danger border-opacity-25" id="inputAuthor" 
                // Conditional value content for author field
                value={selectedBook ? selectedBook[0].author : ""}
                disabled />
            </div>
            <div className="col-6">
                <label htmlFor="inputBookshelf" className="form-label">Bookshelf</label>
                <input type="text" className="form-control border-danger border-opacity-25" id="inputBookshelf" 
                // Conditional value content for author field
                value={selectedBook ? selectedBook[0].bookshelf : ""}
                disabled />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputBorrowerName" className="form-label">Borrower Name</label>
                <input type="text" className="form-control border-danger border-opacity-25" id="inputBorrowerName" 
                value={borrowerName}
                onChange={(e) => setBorrowerName(e.target.value)}
                required />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputAge" className="form-label">Borrower Age</label>
                <input type="number" className="form-control border-danger border-opacity-25" min="8" max="70" step="1"
                placeholder="8-70 Years Old"
                value={borrowerAge}
                onChange={(e) => setBorrowerAge(e.target.value)}
                required />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputLendDate" className="form-label">Lend Date</label>
                <input type="date" className="form-control border-danger border-opacity-25" id="inputLendDate" name="added_date" 
                // Date range validation
                min="2020-01-01" max={new Date().toISOString().split("T")[0]} 
                value={borrowDate}
                onChange={(e) => onBorrow(e)}
                required />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputReturnEst" className="form-label">Return Estimate</label>
                <input type="date" className="form-control border-danger border-opacity-25" id="inputReturnEst" name="added_date" 
                // Date range validation
                min={estimateMin(borrowDate)}
                value={returnEstimate}
                onChange={(e) => onEstimate(e)}
                required />
            </div>
            <div className="mt-4">
                <button type="submit" className="btn btn-primary">Submit</button>
                {/* Link Back Button */}
                <Link to="/transaction" >
                    <button type="button" className="btn btn-danger mx-1">Back</button>
                </Link>
            </div>
        </form>

    </>
    );
}