import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { booksSelectors, deleteBook } from '../../../features/booksSlice';

// Export Functional Component
export { TableBooks };

function TableBooks() {
    const dispatch = useDispatch();
    const books = useSelector(booksSelectors.selectAll);
    return(
        <>
            <table className="table table-bordered">
                <thead className="table-light">
                    <tr>
                    <th scope="col">No</th>
                    <th scope="col">Book Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>

                {/* Conditional rendering for checking is Book data exists */}
                {(books.length > 0)
                ? <tbody>
                    {books.reverse().map((book, index) => (
                        <tr key={book.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>
                                {/* Conditional rendering for Status Book based on book.status */}
                                {(book.status === "Tersedia" || book.status === undefined) 
                                ? <span className="badge text-bg-success">Tersedia</span>
                                : <span className="badge text-bg-danger">Dipinjam</span>}
                            </td>
                            <td>
                                {/* Link Detail */}
                                <Link to={`/books/${book.id}`} className="me-1" >
                                    Detail
                                </Link>

                                {/* Link Edit */}
                                <Link to={`/books/edit/${book.id}`} className="me-1" >
                                    Edit
                                </Link>

                                {/* Link Delete with conditional rendering based on book.status */}
                                {(book.status === "Tersedia" || book.status === undefined )
                                ?
                                <Link onClick={() => dispatch(deleteBook(book.id))}>Delete</Link>
                                : null}
                            </td>
                        </tr>
                    ))}
                </tbody>
                // Conditional rendering if Book Data is empty
                :<tbody>
                    <tr>
                        <td colSpan={5} className="text-center"><b>Data is empty!</b></td>
                    </tr>
                </tbody>
                }
            </table>
        </>
    )
}