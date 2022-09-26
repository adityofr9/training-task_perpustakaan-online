import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";

// Import slice
import { getBooks, booksSelectors, deleteBook } from "../../../features/booksSlice";

// Import Component
import { Loading } from "../../loading";

export { DetailBooks };

function DetailBooks() {    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const {id} = useParams()

    const book = useSelector((state) => booksSelectors.selectById(state, id));

    // State for show component
    const [show, setShow] = useState(false)

    // Asynchronous funtion for loading component
    const load = async () => {
        const promise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                setShow(true)
                resolve()
            }, 200)
        })
        await promise
    }

    useEffect(() => {
        dispatch(getBooks())
        load()
    },[dispatch])

    // No error but will run every time the page is refreshed
    // useEffect(() => {
    //     if (!book) {
    //         navigate('/books')
    //         return
    //     }
    // }, [])
    
    // This work but stil got error
    if (!book) {
        navigate('/books')
        return
    }

    if (!show) {
        return <Loading/>
    } else {
        return (
            <>
                {/* Conditional rendering if data is exist */}
                <div className="justify-content-between align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Book Details {/*(book)? book.title.substr(0, 45) + "..." : null*/}</h1>
                    <h2 className="h5">{book?.title}</h2>
                </div>

                {/* Book Navigation Button */}
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    {/* Link Back Button */}
                    <div className="flex-grow-1" >
                        <Link to="/books/" type="button" className="btn btn-outline-danger">Back</Link>
                    </div>
                    {/* Link Edit Button */}
                    <div>
                        <Link to={`/books/edit/${id}`} type="button" className="btn btn-outline-danger me-1">Edit Books</Link>
                    </div>

                    {/* Link Delete with conditional rendering based on book.status */}
                    {(book.status === "Tersedia" || book.status === undefined )
                    ?
                    <div className="ms-3">
                        <Link onClick={() => dispatch(deleteBook(book.id))} type="button" className="btn btn-outline-danger">Delete</Link>
                    </div>
                    : null}
                </div>
                
                {/* Book Detail Content */}
                <div className="card p-3">
                    <div className="row mt-2 mb-1 mx-5">
                        <div className="col-lg-2 col-3 fw-semibold">Book Title</div>
                        <div className="col-lg-1 col-1 fw-semibold">:</div>
                        <div className="col-lg-9 col-8 fw-semibold">{book.title}</div>
                    </div>
                    <div className="row mb-1 mx-5">
                        <div className="col-lg-2 col-3 fw-semibold">Author</div>
                        <div className="col-lg-1 col-1 fw-semibold">:</div>
                        <div className="col-lg-9 col-8 fw-semibold">{book.author}</div>
                    </div>
                    <div className="row mb-1 mx-5">
                        <div className="col-lg-2 col-3 col-sm fw-semibold">Year Publication</div>
                        <div className="col-lg-1 col-1 fw-semibold">:</div>
                        <div className="col-lg-9 col-8 fw-semibold">{book.yearPubc}</div>
                    </div>
                    <div className="row mb-1 mx-5">
                        <div className="col-lg-2 col-3 fw-semibold">Publisher</div>
                        <div className="col-lg-1 col-1 fw-semibold">:</div>
                        <div className="col-lg-9 col-8 fw-semibold">{book.publisher}</div>
                    </div>
                    <div className="row mb-1 mx-5">
                        <div className="col-lg-2 col-3 fw-semibold">Book Type</div>
                        <div className="col-lg-1 col-1 fw-semibold">:</div>
                        <div className="col-lg-9 col-8 fw-semibold">{book.typeBook}</div>
                    </div>
                    <div className="row mb-1 mx-5">
                        <div className="col-lg-2 col-3 fw-semibold">Book Input Date</div>
                        <div className="col-lg-1 col-1 fw-semibold">:</div>
                        <div className="col-lg-9 col-8 fw-semibold">{book.inputDate}</div>
                    </div>
                    <div className="row mb-1 mx-5">
                        <div className="col-lg-2 col-3 fw-semibold">Book Source</div>
                        <div className="col-lg-1 col-1 fw-semibold">:</div>
                        <div className="col-lg-9 col-8 fw-semibold">{book.source}</div>
                    </div>
                    <div className="row mb-1 mx-5">
                        <div className="col-lg-2 col-3 fw-semibold">Old Book</div>
                        <div className="col-lg-1 col-1 fw-semibold">:</div>
                        <div className="col-lg-9 col-8 fw-semibold">{book.oldBook}</div>
                    </div>
                    <div className="row mb-1 mx-5">
                        <div className="col-lg-2 col-3 fw-semibold">Bookshelf</div>
                        <div className="col-lg-1 col-1 fw-semibold">:</div>
                        <div className="col-lg-9 col-8 fw-semibold">{book.bookshelf}</div>
                    </div>
                    <div className="row mb-1 mx-5">
                        <div className="col-lg-2 col-3 fw-semibold">Status</div>
                        <div className="col-lg-1 col-1 fw-semibold">:</div>
                        <div className="col-lg-9 col-8">
                            {/* Conditional rendering for Status Book based on book.status */}
                            {(book.status === "Tersedia" || book.status === undefined) 
                            ? <span className="badge text-bg-success fs-6">Tersedia</span>
                            : <span className="badge text-bg-danger fs-6">Dipinjam</span>}
                        </div>
                    </div>
                </div>
            </>
        );
    }
    
}