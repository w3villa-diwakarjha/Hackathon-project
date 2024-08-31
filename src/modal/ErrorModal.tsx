import React,{useEffect} from 'react';
import '../css/ErrorModal.css'

const ErrorModal: React.FC = ({ message, onClose }) => {
    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         onClose();
    //     }, 2000);
    //     return () => clearTimeout(timeout);
    // }, [onClose]);
    return (
        <>
            <div className="alert-popup">
                <span className="close-button" onClick={onClose}>&times;</span>
                Hello
            </div>
        </>
    )
}

export default ErrorModal;
