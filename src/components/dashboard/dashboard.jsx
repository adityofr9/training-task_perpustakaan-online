import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './dashboard.css';

// Import Slice
import { getBooks, booksSelectors } from '../../features/booksSlice';
import { getTransactions, transactionsSelectors } from '../../features/transactionsSlice';

// Export Functional Component
export { Dashboard };

function Dashboard() {
    const dispatch = useDispatch()

    useEffect(() => {
        // Dispatch actions for get Book state from store
        dispatch(getBooks())
        // Dispatch actions for get Transactions state from store
        dispatch(getTransactions())
    },[dispatch])

    // Get data from State
    const books = useSelector(booksSelectors.selectAll)
    const transactions = useSelector(transactionsSelectors.selectAll)

    // Length by filtered data
    const borrowed = books.filter(book => book.status === "Borrowed").length
    const available = books.filter(book => book.status === "Available").length
    const lend = transactions.filter(transaction => transaction.returnedDate === "").length
    const returned = transactions.filter(transaction => transaction.returnedDate !== "").length

    return(
        <>
            <div className="px-4 py- my-5 text-center">
                <img className="d-block mx-auto mb-4" src={process.env.PUBLIC_URL + '/assets/dashboard.svg'} alt="" width="400" loading='lazy'/>
                <h1 className="display-5 fw-bold">Welcome at <span className='text-danger'>HON</span>LINE</h1>
                <div className="d-flex flex-wrap justify-content-center border-top py-2">
                    <div className="card border-0 m-2 shadow" style={{width: 300}}>
                        <div className="card-header">
                            <h5 className="card-title text-secondary">Books</h5>
                            <h2 className="card-text">{books.length}</h2>
                        </div>
                        <div className="card-body">
                            <div className='hstack gap-2 justify-content-center'>
                                <div className='d-inline col-5 h5'>Available: {available}</div>
                                <div className='vr col-1'></div>
                                <div className='d-inline col-5 h5 text-danger'>Borrowed: {borrowed}</div>
                            </div>
                        </div>
                    </div>
                    <div className="card border-0 m-2 shadow" style={{width: 300}}>
                        <div className="card-header">
                            <h5 className="card-title text-secondary">Transactions</h5>
                            <h2 className="card-text">{transactions.length}</h2>
                        </div>
                        <div className="card-body">
                            <div className='hstack gap-2 justify-content-center'>
                                <div className='d-inline col-5 h5'>Returned: {returned}</div>
                                <div className='vr col-1'></div>
                                <div className='d-inline col-5 h5 text-danger'>Lend: {lend}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}