import React, { Component } from 'react'
import FeatherIcon from 'feather-icons-react';
import { connect } from 'react-redux'
import { setModel } from '../../../config/commanActions';

class ChannelHead extends Component {

    render() {
        const { Channel, backgroundColor,ghostMode } = this.props
        
        return (
            
            <div className="chat-content-header" style={{ backgroundColor: ghostMode ? "#333333" : backgroundColor }}>
                <h6 id="channelTitle" className="mg-b-0 chat-head-white-item">#{Channel.name}</h6>
                <div className="d-flex">
                  <nav id="channelNav">
                    <a onClick={ () => this.props.setModel("invitePeople")}><span data-toggle="tooltip" title="Invite People"><FeatherIcon icon="user-plus" className="chat-head-white-item"></FeatherIcon></span></a >
                    <a id="showMemberList" href="" data-toggle="tooltip" title="Member list" className="d-flex align-items-center chat-head-white-item">
                      <FeatherIcon icon="users"></FeatherIcon>
                      <span className="tx-medium mg-l-5 chat-head-white-item">{Channel.totalUser}</span>
                    </a>
                  </nav>
                  <nav className="mg-sm-l-10">
                    <a href="" data-toggle="tooltip" title="Channel Settings" data-placement="left"><FeatherIcon icon="more-vertical" className="chat-head-white-item"></FeatherIcon></a>
                  </nav>
              </div>
            </div>
        )
    }
}

export default connect(null, { setModel })(ChannelHead);