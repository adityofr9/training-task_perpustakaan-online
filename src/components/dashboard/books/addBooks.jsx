import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

// Import slice
import { saveBook } from "../../../features/booksSlice";
import { alertAction } from "../../../features/alertsSlice";

// Import Book Options Array
import { optionsType, optionsShelf } from "../../../utils/optionsBook";

export { AddBooks };

function AddBooks() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [publisher, setPublisher] = useState('')
    const [yearPubc, setYearPubc] = useState('')
    const [typeBook, setTypeBook] = useState('')
    const [source, setSource] = useState('')
    const [oldBook, setOldBook] = useState('')
    const [bookshelf, setBookshelf] = useState('')
    const [status] = useState('Available')
    const [inputDate, setInputDate] = useState('')
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const createBook = async (e) => {
        e.preventDefault();
        const paramBook = { title, author, publisher, yearPubc, typeBook, source, oldBook, bookshelf, status, inputDate};
        await dispatch(saveBook(paramBook));
        // Action for alert state when success input book data
        await dispatch(
            alertAction.createAlert({
                message: "Successfully Input Book Data!",
                type: "success"
            })
        );
        navigate('/books')
    }

    // Variable for get number of this year
    let thisYear = new Date().getFullYear();

    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Book Input Form</h1>
            </div>
            
            {/* Form Input */}
            <form onSubmit={createBook} className="row g-3 col-10 mx-auto">
                <div className="col-12">
                    <label htmlFor="inputTitle" className="form-label">Book Title</label>
                    <input type="text" className="form-control border-danger border-opacity-25" id="inputTitle" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAuthor" className="form-label">Author</label>
                    <input type="text" className="form-control border-danger border-opacity-25" id="inputAuthor" 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPublisher" className="form-label">Publisher</label>
                    <input type="text" className="form-control border-danger border-opacity-25" id="inputPublisher" 
                    value={publisher}
                    onChange={(e) => setPublisher(e.target.value)}
                    required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputYearPubc" className="form-label">Publication Year</label>
                    <input type="number" className="form-control border-danger border-opacity-25" min="1900" max={thisYear} step="1" 
                    placeholder={`ex: ${thisYear}`}
                    value={yearPubc}
                    onChange={(e) => setYearPubc(e.target.value)}
                    required />
                </div>
                <div className="col-md-5">
                    <label htmlFor="inputBookType" className="form-label">Book Type</label>
                    <select id="inputBookType" className="form-select border-danger border-opacity-25"
                    defaultValue={""}
                    onChange={(e) => setTypeBook(e.target.value)}
                    required>
                        <option value="" disabled>Choose Book Type</option>
                        {/* Transforming options array into lists of option elements */}
                        {optionsType.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>

                </div>
                <div className="col-md-5">
                    <label htmlFor="inputBookSrc" className="form-label">Source Book</label>
                    <input type="text" className="form-control border-danger border-opacity-25" placeholder="ex: Collection" id="inputBookSrc" 
                    value={source}
                    onChange={(e) => setSource(e.target.value)} />
                </div>
                <div className="col-md-2">
                    <label htmlFor="inlineRadio" className="form-label">Old Book</label>
                    <div className="mt-1" onChange={(e) => setOldBook(e.target.value)}>
                        <div className=" form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="radioOptions" id="inlineRadioYes" value="Yes" required/>
                                <label className="form-check-label" htmlFor="inlineRadioYes">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="radioOptions" id="inlineRadioNo" value="No"/>
                                <label className="form-check-label" htmlFor="inlineRadioNo">No</label>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputBookshelf" className="form-label">Bookshelf</label>
                    <select id="inputBookshelf" className="form-select border-danger border-opacity-25"
                    defaultValue={""}
                    onChange={(e) => setBookshelf(e.target.value)}
                    required>
                        <option value="" disabled>Choose Bookshelf</option>
                        {/* Transforming options array into lists of option elements */}
                        {optionsShelf.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputState" className="form-label">Input Date</label>
                    <input type="date" className="form-control border-danger border-opacity-25" id="inputAddDate" name="added_date" 
                    // Date range validation
                    min="2020-01-01" max={new Date().toISOString().split("T")[0]} 
                    value={inputDate}
                    onChange={(e) => setInputDate(e.target.value)}
                    required />
                </div>
                <div className="mt-4">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    {/* Link Back Button */}
                    <Link to="/books" >
                        <button type="button" className="btn btn-danger mx-1">Back</button>
                    </Link>
                </div>
            </form>
        </>
    );
}