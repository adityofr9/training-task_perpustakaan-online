import React from 'react';

// Export Functional Component
export { Loading };

function Loading() {

    return(
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '90vh',}}>
            <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}