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

    const [show, setShow] = useState(false)

    const load = async () => {
        const promise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                setShow(true)
                resolve()
            }, 500)
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

                {/*  */}
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    {/* Link Back Button */}
                    <Link to="/books/" className="flex-grow-1" >
                        <button type="button" className="btn btn-outline-danger">Back</button>
                    </Link>
                    {/* Link Add Button */}
                    <Link to={`/books/edit/${id}`} >
                        <button type="button" className="btn btn-outline-danger me-1">Edit Books</button>
                    </Link>

                    {/* Link Delete with conditional rendering based on book.status */}
                    {(book.status === "Tersedia" || book.status === undefined )
                    ?
                    <Link onClick={() => dispatch(deleteBook(book.id))}>
                        <button type="button" className="btn btn-outline-danger">Delete</button>
                    </Link>
                    : null}
                </div>
                
                {/*  */}
                <div className="container">
                    <div className="row mb-1 mx-5">
                        <div className="col-3">Book Title</div>
                        <div className="col-1">:</div>
                        <div className="col-8">{book.title}</div>
                    </div>
                    <div className="row mb-1 mx-5">
                        <div className="col-3">Author</div>
                        <div className="col-1">:</div>
                        <div className="col-8">{book.author}</div>
                    </div>
                    <div className="row mb-1 mx-5">
                        <div className="col-3">Year Publication</div>
                        <div className="col-1">:</div>
                        <div className="col-8">{book.yearPubc}</div>
                    </div>
                    <div className="row mb-1 mx-5">
                        <div className="col-3">Publisher</div>
                        <div className="col-1">:</div>
                        <div className="col-8">{book.publisher}</div>
                    </div>
                    <div className="row mb-1 mx-5">
                        <div className="col-3">Book Type</div>
                        <div className="col-1">:</div>
                        <div className="col-8">{book.typeBook}</div>
                    </div>
                    <div className="row mb-1 mx-5">
                        <div className="col-3">Book Input Date</div>
                        <div className="col-1">:</div>
                        <div className="col-8">{book.inputDate}</div>
                    </div>
                    <div className="row mb-1 mx-5">
                        <div className="col-3">Book Source</div>
                        <div className="col-1">:</div>
                        <div className="col-8">{book.source}</div>
                    </div>
                    <div className="row mb-1 mx-5">
                        <div className="col-3">Old Book</div>
                        <div className="col-1">:</div>
                        <div className="col-8">{book.oldBook}</div>
                    </div>
                    <div className="row mb-1 mx-5">
                        <div className="col-3">Bookshelf</div>
                        <div className="col-1">:</div>
                        <div className="col-8">{book.bookshelf}</div>
                    </div>
                    <div className="row mb-1 mx-5">
                        <div className="col-3">Status</div>
                        <div className="col-1">:</div>
                        <div className="col-8">
                            {/* Conditional rendering for Status Book based on book.status */}
                            {(book.status === "Tersedia" || book.status === undefined) 
                            ? <span className="badge text-bg-success">Tersedia</span>
                            : <span className="badge text-bg-danger">Dipinjam</span>}
                        </div>
                    </div>
                </div>
            </>
        );
    }
    
}