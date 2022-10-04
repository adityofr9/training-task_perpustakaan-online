import React from 'react';

// Export Functional Component
export { DeletePopup };

function DeletePopup({handleDeleteTrue, title}) {
    return(
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Are you sure to delete the book?</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center">
                        Book with the title <span className='fw-semibold'>"{title}"</span> will be deleted.
                        <br/><br/>
                        <span className='text-danger'><b>⚠ Warning!</b>
                        <br/>The transasction data that involved will also be deleted.</span>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" onClick={handleDeleteTrue} data-bs-dismiss="modal">Yes</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                    </div>
                </div>
            </div>
        </div>
    )
}