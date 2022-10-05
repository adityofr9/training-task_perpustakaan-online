import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

// Import Slice
import { booksSelectors, updateBook } from '../../../features/booksSlice';
import { transactionsSelectors, updateTransaction, getTransactions } from '../../../features/transactionsSlice';
import { alertAction } from "../../../features/alertsSlice";

// Export Functional Component
export { TableTransactions };

function TableTransactions({searchValue}) {
    const dispatch = useDispatch()

    // Get data from State
    const books = useSelector(booksSelectors.selectAll)
    const transactions = useSelector(transactionsSelectors.selectAll)

    // Initial Book State
    const [bookLend, setBookLend] = useState('')
    
    // Initial Transaction State
    const [returned, setReturned] = useState('')
    

    // Get Book data by referrence transactions.bookId
    const refbook = (bookId) => {
        const book = books.filter(book => book.id === bookId)
        if (book[0] !== undefined) {
            return book[0].title
        }
        return
    }

    const handleReturn = (transaction) => {
        setBookLend({
            id: transaction.bookId,
            status: "Available"
        })
        setReturned({
            id: transaction.id,
            returnedDate: new Date().toISOString().split("T")[0]
        })
    }

    useEffect(() => {
        if (bookLend) {
            console.log(bookLend)
            dispatch(updateBook(bookLend));
            console.log(returned);
            dispatch(updateTransaction(returned))
            // Action for alert state when success input book data
            dispatch(
            alertAction.createAlert({
                message: "Successfully Input Transaction Data!",
                type: "success"
                })
            );
            dispatch(getTransactions())
        }
    }, [bookLend])


    // Filtering data based on key by matching the search value
    const searchFilter = transactions.filter(trs => 
        // refbook(trs.id).toLowerCase().includes(searchValue) //This filtering data by book title
        trs.borrowerName.toLowerCase().includes(searchValue)
        || trs.borrowDate.toLowerCase().includes(searchValue)
        || trs.returnEstimate.toLowerCase().includes(searchValue)
        || trs.returnedDate.toLowerCase().includes(searchValue)
    )

    // Function for validate the search value to return book data
    const datas = () => {
        if (searchValue === null) {
            return transactions
        } else {
            return searchFilter
        }
    }

    return(
        <>
            <table className="table table-bordered">
                <thead className="table-light text-center align-middle">
                    <tr>
                        <th scope="col" rowSpan={2}>No</th>
                        <th scope="col" rowSpan={2}>Book Title</th>
                        <th scope="colgroup" rowSpan={2}>Borrower Name</th>
                        <th scope="col" rowSpan={2}>Lend Date</th>
                        <th scope="col" colSpan={2} rowSpan={1}>Return</th>
                        <th scope="col" rowSpan={2}>Actions</th>
                    </tr>
                    <tr>
                        <th scope="col">Estimate</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                
                {/* Conditional rendering for checking is Transaction data exists */}
                { (transactions.length > 0 && searchFilter.length > 0)
                ? <tbody className='align-middle'>
                    {datas().map((transaction, index) => (
                        <tr key={transaction.id}>
                            <th scope="row">{index + 1}</th>
                            <td className='col-3'>{refbook(transaction.bookId)}</td>
                            <td>{transaction.borrowerName}</td>
                            <td>{transaction.borrowDate}</td>
                            <td>{transaction.returnEstimate}</td>
                            <td>
                                {transaction.returnedDate && transaction.returnedDate}
                            </td>
                            <td className='text-center'>
                                {/* Link Delete with conditional rendering based on book.status */}
                                {transaction.returnedDate === ""
                                ? <Link onClick={() => handleReturn(transaction)} type="button" className='text-decoration-none d-sm-block d-md-block d-lg-inline'>
                                    Return
                                </Link>
                                // <Link onClick={() => dispatch(deleteBook(book.id))}>Delete</Link>
                                // :<Link onClick={() => handleReturn(transaction)} data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='text-decoration-none d-sm-block d-md-block d-lg-inline' disabled>
                                : null}
                            </td>
                        </tr>
                    ))}
                </tbody>

                // Conditional rendering if the Book data is empty or not found
                :<tbody>
                    <tr>
                        <td colSpan={7} className="text-center"><b>Data is not found!</b></td>
                    </tr>
                </tbody>
                }
            </table>
        </>
    )
}