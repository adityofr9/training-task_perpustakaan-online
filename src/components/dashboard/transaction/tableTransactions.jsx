import React from 'react';
import '../dashboard.css';

// Export Functional Component
export { TableTransactions };

function TableTransactions() {
    return(
        <>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Judul Buku</th>
                    <th scope="col">Nama Peminjam</th>
                    <th scope="col">Tanggal Pinjam</th>
                    <th scope="col">Estimasi Kembali</th>
                    <th scope="col">Tanggal Kembali</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>09 September 2022</td>
                    <td>09 September 2022</td>
                    <td>09 September 2022</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>09 September 2022</td>
                    <td>09 September 2022</td>
                    <td>09 September 2022</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>The Bird</td>
                    <td>09 September 2022</td>
                    <td>09 September 2022</td>
                    <td>09 September 2022</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}