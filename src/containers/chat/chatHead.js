import React, { Component } from 'react'
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom'
import Avatar from '../../config/avatar';
class ChatHead extends Component {

    render() {
        const { User, backgroundColor,ghostMode } = this.props
        
        return (
            
            <div className="chat-content-header" style={{ backgroundColor: ghostMode ? "#333333" : backgroundColor }}>
                <div id="directTitle" >
                    <div className="d-flex align-items-center">
                        <div className="avatar avatar-sm avatar-online">
                            <Avatar />
                        </div>
                        <h6 className="mg-l-10 mg-b-0 chat-head-white-item" >{ User.name }</h6>
                    </div>
                </div>
                <div className="d-flex">
                    <nav id="directNav" >
                        <Link to="" data-toggle="tooltip" title="Call User" ><FeatherIcon icon="phone" className="chat-head-white-item"></FeatherIcon></Link>
                        <Link to="" data-toggle="tooltip" title="User Details"><FeatherIcon icon="info" className="chat-head-white-item"></FeatherIcon></Link>
                        <Link to="" data-toggle="tooltip" title="Add to Favorites"><FeatherIcon icon="star" className="chat-head-white-item"></FeatherIcon></Link>
                        <Link to="" data-toggle="tooltip" title="Flag User"><FeatherIcon icon="flag" className="chat-head-white-item"></FeatherIcon></Link>
                    </nav>
                    <div className="search-form mg-l-15 d-none d-sm-flex">
                        <input type="search" className="form-control" placeholder="Search" />
                        <button className="btn" type="button"><FeatherIcon icon="search" className="chat-head-white-item"></FeatherIcon></button>
                    </div>
                    <nav className="mg-sm-l-10">
                        <Link to="" data-toggle="tooltip" title="Channel Settings" data-placement="left"><FeatherIcon icon="more-vertical" className="chat-head-white-item"></FeatherIcon></Link>
                    </nav>
                </div>
            </div>
        )
    }
}

export default ChatHead