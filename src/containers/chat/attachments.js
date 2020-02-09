import React from 'react'
import FeatherIcon from 'feather-icons-react';

const Attachments = () => {

    return (
        <div className="attachment-wrapper">
            <div className="attachment-options">
                <div className="attachment-option" style={{ background: "#ce64de" }}>
                    <FeatherIcon icon="file"></FeatherIcon>
                </div>
                <div className="attachment-option" style={{ background: "#5f66cd" }}>
                    <FeatherIcon icon="image"></FeatherIcon>
                </div>
            </div>
        </div>
    )
}

export default Attachments