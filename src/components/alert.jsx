import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { alertAction } from "../features/alertsSlice";

// Export Functional Component
export { AlertMsg };

function AlertMsg() {
    const dispatch = useDispatch()

    // Read notifications state from store
    const alerts = useSelector(state => state.notifications);
    const [alert, setAlert] = useState({ type: "", message: "" });
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (alerts.alert.length > 0) {
            setAlert(alerts.alert[0]);
            setShowAlert(true);
            // Autohide popup message after 30 sec
            setTimeout(() => {
                setShowAlert(false)
                setAlert({ type: "", message: "" })
            }, 30000);
        }
    }, [alerts.alert]);


    // Delete alerts state after assign the object data into new state (alert)
    useEffect(() => {
        dispatch(
            alertAction.deleteAlert()
        );
    },[dispatch])
    // console.log("ini alerts", ...alerts.alert);
    // console.log("kalau ini alert",alert);

    // Set alert state after button close was clicked
    const onClose = () => {
        setShowAlert(false)
        setAlert({ type: "", message: "" })
    };

    // Conditional Attribute value based on type alert message 
    const color = alert.type === "success" ? "success" : "danger";

    // Conditional Attribute value (bootstrap) for show or hide the component
    const display = showAlert ? " show" : " hide";

    return (
        <div className={`toast align-items-center text-bg-${color} border-0 fixed-top fade ${display}`} 
        role="alert" aria-live="assertive" aria-atomic="true" 
        style={{top: 70, right: 20, left: 'unset'}}>
            <div className="d-flex">
                <div className="toast-body">
                    {alert.message || ""}
                </div>
                <button type="button" className="btn-close btn-close-white me-2 m-auto" onClick={onClose} data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    )
}