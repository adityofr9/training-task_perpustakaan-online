import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

// Import Slice
import { booksSelectors, updateBook } from '../../../features/booksSlice';
import { transactionsSelectors, updateTransaction, getTransactions } from '../../../features/transactionsSlice';
// import { alertAction } from "../../../features/alertsSlice";

// Export Functional Component
export { TableTransactions };

function TableTransactions() {
    const dispatch = useDispatch();
    const books = useSelector(booksSelectors.selectAll)
    const transactions = useSelector(transactionsSelectors.selectAll)
    // console.log("book: ", books);
    // console.log("transaction: ", transactions);

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
        // console.log(transaction);
        setBookLend({
            id: transaction.bookId,
            status: "Tersedia"
        })
        setReturned({
            id: transaction.id,
            returnedDate: new Date().toISOString().split("T")[0]
        })
        // console.log(bookLend);
    }

    useEffect(() => {
        if (bookLend) {
            console.log(bookLend)
            dispatch(updateBook(bookLend));
            console.log(returned);
            dispatch(updateTransaction(returned))
        }
        dispatch(getTransactions())
    }, [bookLend, dispatch, returned])

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
                { (transactions.length > 0)
                ? <tbody className='align-middle'>
                    {transactions.map((transaction, index) => (
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
                                {transaction.returnedDate === "" && !returned
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