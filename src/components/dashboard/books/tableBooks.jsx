import React from 'react';
import { useSelector } from 'react-redux';
import '../dashboard.css';

// Export Functional Component
export { TableBooks };

function TableBooks() {
    const {
        title,
        author,
        // publisher,
        // yearPubc,
        // typeBook,
        // source,
        // oldBook,
        // bookshelf,
        status,
        // inputDate
    } = useSelector(state => state.books)
    return(
        <>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Judul Buku</th>
                    <th scope="col">Penulis</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td>
                        {(status === "Tersedia") 
                        ? <span className="badge text-bg-success">Tersedia</span>
                        : <span class="badge text-bg-danger">Dipinjam</span> }
                    </td>
                    <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}