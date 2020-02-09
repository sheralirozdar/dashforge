import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Input, Dropdown, Button, Icon, Divider } from 'antd';

import ComposeReply from './campose-replay'
import ComposeComment from './compose-comment'
import MailCard from './mail-card'
import Emojis from '../chat/emojis'
import CommentCard from '../chat/messageCard'
import Avatar from '../../config/avatar';
const { Search } = Input;
class Conversation extends Component {

  state = {
    reply: false,
    toggleEmojis: false,
    visible: false,
  }

  handleVisibleChange = (flag) => {
    this.setState({ visible: flag });
  }

  openReply = () => {
    this.setState({
      reply: true
    })
  }

  toggleEmojis = () => {
    const { toggleEmojis } = this.state
    this.setState({
      toggleEmojis: !toggleEmojis
    })
  }



  render() {
    const menu = (
      <div className="assigend-dropdown">
        <h4> Assigned </h4>
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
        />
        <Divider />
        <ul>
          <li>
            <div className="avatar avatar-sm">
              <Avatar />
            </div>
            {"Unassigned"}
          </li>

          <li>
            <div className="avatar avatar-sm">
              <Avatar />
            </div>
            {"Rammez Raja"}
            <Icon type="check" />
          </li>
        </ul>
      </div>


    );
    const item = {
      sender: "other",
      user: "Rameez",
      newMessages: 2,
      userOnline: true,
      name: "Sher ali",
      time: "November 24, 2019 at 2:00pm",
      body: "hey how are you ",
      nameInitial: "S",
      onlineStatus: true,
      ghostMessage: true
    }
    const item2 = {
      sender: "me",
      user: "Rameez",
      newMessages: 2,
      userOnline: true,
      name: "Sher ali",
      time: "November 24, 2019 at 2:00pm",
      body: "hey how are you ",
      nameInitial: "S",
      onlineStatus: true,
      ghostMessage: true
    }
    return (
      <div className="mail-content">
        <div className="mail-content-header ">
          <Link to="" id="mailContentClose" className="link-02 d-none d-lg-block d-xl-none mg-r-20"><FeatherIcon icon="arrow-left"></FeatherIcon></Link>
          <div className="media">
            <div className="avatar avatar-sm">
              <Avatar />
            </div>
            <div className="media-body mg-l-10">
              <h6 className="mg-b-2 tx-13">Reynante Labares</h6>
              <span className="d-block tx-11 tx-color-03">Today, 11:40am</span>
            </div>
          </div>
          <nav className="nav nav-icon-only mg-l-auto">

            <Dropdown overlay={menu} 
              onVisibleChange={this.handleVisibleChange}
              visible={this.state.visible}>
              <Button>
                <div className="avatar avatar-sm">
                  <Avatar />
                </div>
                {"Rammez Raja"}
                <Icon type="down" />
              </Button>
            </Dropdown>
            <Link to="" data-toggle="tooltip" title="Archive" className="nav-link d-none d-sm-block"><FeatherIcon icon="archive"></FeatherIcon></Link>
            <Link to="" data-toggle="tooltip" title="Report Spam" className="nav-link d-none d-sm-block"><FeatherIcon icon="slash"></FeatherIcon></Link>
            <Link to="" data-toggle="tooltip" title="Mark Unread" className="nav-link d-none d-sm-block"><FeatherIcon icon="mail"></FeatherIcon></Link>
            {/* <Link to="" data-toggle="tooltip" title="Add Label" className="nav-link d-none d-sm-block"><FeatherIcon icon="folder"></FeatherIcon></Link>
            <Link to="" data-toggle="tooltip" title="Add Tag" className="nav-link d-none d-sm-block"><FeatherIcon icon="tag"></FeatherIcon></Link>
            <Link to="" data-toggle="tooltip" title="Mark Important" className="nav-link d-none d-sm-block"><FeatherIcon icon="star"></FeatherIcon></Link> */}
            <Link to="" data-toggle="tooltip" title="Trash" className="nav-link d-none d-sm-block"><FeatherIcon icon="trash"></FeatherIcon></Link>
            <Link to="" data-toggle="tooltip" title="Print" className="nav-link d-none d-sm-block"><FeatherIcon icon="printer"></FeatherIcon></Link>
            <Link to="" data-toggle="tooltip" title="Options" className="nav-link d-sm-none"><FeatherIcon icon="more-vertical"></FeatherIcon></Link>
          </nav>
        </div>
        <PerfectScrollbar className="mail-content-body">

          <MailCard openReply={this.openReply} />
          <CommentCard data={item} backgroundColor={'#3b5997'} Channels={true} />
          <CommentCard data={item2} backgroundColor={'#3b5997'} Channels={true} />
          {this.state.reply && <ComposeReply value={"Type your Reply Here. . . "} ontextUpdate={() => { }}
            onClose={() => this.setState({ reply: false })} />}


        </PerfectScrollbar >
        {
          this.state.toggleEmojis && <Emojis />
        }
        <div className="mail-content-footer">
          <ComposeComment value={"Type your Comment Here. . . "} ontextUpdate={() => { }} toggleEmojis={this.toggleEmojis} />
        </div>



      </div>
    )
  }
}

export default Conversation;