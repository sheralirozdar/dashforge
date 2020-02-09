import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react';

class Leftbar extends Component {

    render() {
        return (
            <div className="contact-navleft">
                <nav className="nav flex-column">
                    <div className="nav-link active" data-toggle="tab" onClick={ () => this.props.renderTab("all") }>
                        <span data-toggle="tooltip" title="All Contacts" data-placement="right"><FeatherIcon icon="users"></FeatherIcon></span>
                    </div>
                    <div className="nav-link" data-toggle="tab" onClick={ () => this.props.renderTab("recent") }>
                        <span data-toggle="tooltip" title="Recently Contacted" data-placement="right"><FeatherIcon icon="phone-call"></FeatherIcon></span>
                    </div>
                    <div className="nav-link" data-toggle="tab" onClick={ () => this.props.renderTab("favorites") }>
                        <span data-toggle="tooltip" title="Favorites" data-placement="right"><FeatherIcon icon="star"></FeatherIcon></span>
                    </div>
                    <div to="#tabTags" className="nav-link" data-toggle="tab" onClick={ () => this.props.renderTab("label") }>
                        <span data-toggle="tooltip" title="Contact Labels" data-placement="right"><FeatherIcon icon="tag"></FeatherIcon></span>
                    </div>
                    <div className="nav-link" data-toggle="tab" onClick={ () => this.props.renderTab("export") }>
                        <span data-toggle="tooltip" title="Export Contacts" data-placement="right"><FeatherIcon icon="upload"></FeatherIcon></span>
                    </div>
                    <div className="nav-link">
                        <span data-toggle="tooltip" title="Contact Settings" data-placement="right"><FeatherIcon icon="settings"></FeatherIcon></span>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Leftbar;