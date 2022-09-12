import React from 'react';
import './dashboard.css';

// Export Functional Component
export { Dashboard };

function Dashboard() {
    return(
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
            </div>
        </>
    )
}