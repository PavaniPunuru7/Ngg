import React from 'react';

const CallButton = () => {
    const handleCall = () => {
        window.location.href = 'tel:+123456789';
    };

    return (
        <button className="call-button" onClick={handleCall}>
            Call
        </button>
    );
};

export default CallButton;
