import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { booksSelectors, deleteBook } from '../../../features/booksSlice';

// Import Component
import { DeletePopup } from '../../deletePopup';

// Export Functional Component
export { TableBooks };

function TableBooks() {
    const dispatch = useDispatch();
    const books = useSelector(booksSelectors.selectAll);

    // State for popup
    const [popup, setPopup] = useState({
        show: false,
        id: null,
    });

    // This will show the Cofirmation Box
    const handleDelete = (book) => {
        setPopup({
            show: true,
            paramBook: book.title,
            id: book.id,
        });
    };
    
    // This will perform the deletion
    const handleDeleteTrue = () => {
        if (popup.show && popup.id) {
            dispatch(deleteBook(popup.id))
            setPopup({
                show: false,
                id: null,
            });
        }
    };

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
                    {books.map((book, index) => (
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
                                // <Link onClick={() => dispatch(deleteBook(book.id))}>Delete</Link>
                                <Link onClick={() => handleDelete(book)} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Delete
                                </Link>
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
            {/* Modal Popup Component for delete data */}
            {popup && <DeletePopup handleDeleteTrue={handleDeleteTrue} title={popup.paramBook}/>}
        </>
    )
}