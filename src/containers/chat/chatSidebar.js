import React, { Component } from 'react'
import { Link } from "react-router-dom"
import FeatherIcon from 'feather-icons-react';
import { Button } from 'antd'
import ChatList from './ChatList';
import ChannelListing from './channels/ChannelList'
import UserInfo from './userInfo'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Avatar from '../../config/avatar';

class ChatSideBar extends Component {

    state = {
        currentTab: "direct",
        
    }

    render() {
        const { Chats, User, Channels, ChannelList } = this.props
        const { currentTab } = this.state

        const styleForCurrentTab = {
            background: 'white',
            color: 'grey'
        }

        return (
            <div className="chat-sidebar">
                <div className="chat-sidebar-header">
                    <Link to="#" data-toggle="dropdown" className="dropdown-link">
                        <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm mg-r-8">
                                <Avatar />
                            </div>
                            <span className="tx-color-01 tx-semibold">TeamName</span>
                        </div>
                        <span><FeatherIcon icon="chevron-down"></FeatherIcon></span>
                    </Link>

                    <div className="dropdown-menu dropdown-menu-right tx-13">
                        <Link to="" className="dropdown-item"><FeatherIcon icon="user-plus"></FeatherIcon> Invite People</Link>
                        <a className="dropdown-item"><FeatherIcon icon="plus-square"></FeatherIcon> Create Channel</a>
                        <Link to="" className="dropdown-item"><FeatherIcon icon="server"></FeatherIcon> Server Settings</Link>
                        <Link to="" className="dropdown-item"><FeatherIcon icon="bell"></FeatherIcon> Notification Settings</Link>
                        <Link to="" className="dropdown-item"><FeatherIcon icon="zap"></FeatherIcon> Privacy Settings</Link>
                        <div className="dropdown-divider"></div>
                        <Link to="" className="dropdown-item"><FeatherIcon icon="edit-3"></FeatherIcon> Edit Team Details</Link>
                        <Link to="" className="dropdown-item"><FeatherIcon icon="shield-off"></FeatherIcon> Hide Muted Channels</Link>
                    </div>
                </div>


                <PerfectScrollbar className="chat-sidebar-body">
                    <div className="flex-fill pd-y-20 pd-x-10 bd-t">
                        { !Channels && <div className="chat-sidebar-buttons">
                            <Button className={ currentTab == "direct" ? "chat-sidebar-button active" : "chat-sidebar-button" } onClick={(e)=>{ this.setState({ currentTab: "direct" }) }} style={ currentTab == "direct" ? styleForCurrentTab : null } >Direct</Button>
                            <Button  className={ currentTab == "group" ? "chat-sidebar-button active" : "chat-sidebar-button" } onClick={(e)=>{ this.setState({ currentTab: "group" }) }} style={ currentTab == "group" ? styleForCurrentTab : null } >Groups</Button>
                        </div>}

                        {
                            Channels == true ? 
                                <ChannelListing Channels={ChannelList}/> : 
                                <ChatList Chats={Chats} />
                        }
                    </div>
                </PerfectScrollbar >

                <UserInfo data={User} />

            </div>
        )
    }
}

export default ChatSideBar