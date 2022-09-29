import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

// Import Slice
import { booksSelectors, deleteBook } from '../../../features/booksSlice';
import { alertAction } from "../../../features/alertsSlice";

// Import Component
import { DeletePopup } from '../../deletePopup';

// Export Functional Component
export { TableBooks };

function TableBooks({searchValue}) {
    const dispatch = useDispatch();
    const books = useSelector(booksSelectors.selectAll);

    const searchFilter = books.filter(book => 
        book.title.toLowerCase().includes(searchValue)
        || book.author.toLowerCase().includes(searchValue)
        || book.typeBook.toLowerCase().includes(searchValue)
    )
    // console.log(`searchFilter`, ...searchFilter);

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
            // Action for alert state when success delete book data
            dispatch(
                alertAction.createAlert({
                    message: "Successfully Deleted Book Data!",
                    type: "danger"
                })
            );
            setPopup({
                show: false,
                id: null,
            });
        }
    };

    // Function for validate the search value to return book data
    const datas = () => {
        if (searchValue === null) {
            return books
        } else {
            return searchFilter
        }
    }

    return(
        <>
            <table className="table table-bordered">
                <thead className="table-light text-center">
                    <tr>
                    <th scope="col">No</th>
                    <th scope="col">Book Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Type Book</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>

                {/* Conditional rendering for checking is Book data exists */}
                {(books.length > 0 && searchFilter.length > 0)
                ? <tbody className='align-middle'>
                    {datas().map((book, index) => (
                        <tr key={book.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.typeBook}</td>
                            <td>
                                {/* Conditional rendering for Status Book based on book.status */}
                                {(book.status === "Tersedia" || book.status === undefined) 
                                ? <span className="badge text-bg-success">Tersedia</span>
                                : <span className="badge text-bg-danger">Dipinjam</span>}
                            </td>
                            <td>
                                {/* Link Detail */}
                                <Link to={`/books/${book.id}`} className="me-1 text-decoration-none" >
                                    Detail
                                </Link>

                                {/* Link Edit */}
                                <Link to={`/books/edit/${book.id}`} className="me-1 text-decoration-none" >
                                    Edit
                                </Link>

                                {/* Link Delete with conditional rendering based on book.status */}
                                {(book.status === "Tersedia" || book.status === undefined )
                                ?
                                // <Link onClick={() => dispatch(deleteBook(book.id))}>Delete</Link>
                                <Link onClick={() => handleDelete(book)} data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='text-decoration-none'>
                                    Delete
                                </Link>
                                : null}
                            </td>
                        </tr>
                    ))}
                </tbody>
                
                // Conditional rendering if the Book data is empty or not found
                :<tbody>
                    <tr>
                        <td colSpan={6} className="text-center"><b>Data is not found!</b></td>
                    </tr>
                </tbody>
                }
            </table>

            {/* Modal Popup Component for delete data */}
            {popup && <DeletePopup handleDeleteTrue={handleDeleteTrue} title={popup.paramBook}/>}
        </>
    )
}