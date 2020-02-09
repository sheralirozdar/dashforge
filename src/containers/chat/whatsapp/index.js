import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentRoute } from '../../../config/commanActions'
import PerfectScrollbar from 'react-perfect-scrollbar'

import $ from 'jquery';
import { Mentions } from 'antd';
import FeatherIcon from 'feather-icons-react';
import ChatSideBar from '../chatSidebar'
import ChatHead from '../chatHead'
import MessageCard from '../messageCard'
import MemberList from '../memberList'
import ChatContent from '../chat-content';
import ChatJquery from '../jqueryChat'
import ChatFooter from '../chatFooter';
import Attachments from '../attachments';
import Emojis from '../emojis';

class Whatsapp extends Component {

    componentDidMount = () => {
        // $(ChatJquery())
        this.props.setCurrentRoute("whatsapp");
    }

    // componentWillUnmount = () => {
    //     $('#mailSidebar').off('click');
    //     $("#showMemberList").off('click');
    //     $("#chatDirectMsg .media").off('click');
    //     $('#allChannels div').off('click');
    //     // $('.aside-menu-link').off('click');
    // }

    state = {
        typedMessage: "",
        textAreaHeight: 60,
        ghostMode: false,
        toggleAttachment: false,
        User: {
            name: "Rameez Raja",
            onlineStatus: true,
            image: "https://via.placeholder.com/500"
        },
        Chats: [
            {
                sender: "other",
                user: "Rameez",
                newMessages: 2,
                userOnline: true,
                name: "Sher ali",
                time: "2:00pm",
                body: "hey how are you ",
                nameInitial: "S",
                onlineStatus: true,
                ghostMessage: true
            },
            {
                sender: "me",
                name: "Rameez Raja",
                time: "2:00pm",
                body: "I am fine",
                nameInitial: "R",
                onlineStatus: false,
                ghostMessage: false
            },
            {
                sender: "other",
                newMessages: 2,
                userOnline: true,
                name: "Sher Ali Gulam",
                time: "2:00pm",
                body: "Good",
                nameInitial: "S",
                onlineStatus: true,
                ghostMessage: true
            }
        ],
        ChatList: [
            {
                id:1,
                name: "Sher Ali",
                timeAgo: "5 days ago",
                newMessages: 2,
                userOnline: true
            },
            {
                id: 2,
                name: "Faizan",
                timeAgo: "5 days ago",
                newMessages: 0,
                userOnline: false
            },
            {
                id: 3,
                name: "Ahmed",
                timeAgo: "5 days ago",
                newMessages: 0,
                userOnline: false
            }
        ]
    }

    toggleMode = (e) => {

        e.preventDefault()
        const { ghostMode } = this.state
        this.setState({
            ghostMode: !ghostMode
        })
    }

    onChange = (e, value) => {
        const totalLine = e.split(/\r\n|\r|\n/).length - 1
       
        this.setState({
            typedMessage: e,
            textAreaHeight: totalLine * 30
        })
    }

    onSelect = (option) => {
        console.log('select', option);
    }

    onKeyUp = (e) => {
        const code = e.keyCode || e.which;
        if (code === 16) {
            e.preventDefault()
            this.shiftKeyStatus = false
        }
    }

    shiftKeyStatus = false;

    onKeyPressed = (e) => {
        const code = e.keyCode || e.which;
        if (code === 16) {
            e.preventDefault()
            this.shiftKeyStatus = true
        }
        if (code === 13) {
            if (this.shiftKeyStatus != true) {
                e.preventDefault();
                console.log("send text")
            }

        }
    }

    toggleAttachment = () => {
        const { toggleAttachment } = this.state
      
        this.setState({
            toggleAttachment: !toggleAttachment
        })
    }


    toggleEmojis = () => {
        const { toggleEmojis } = this.state
        this.setState({
            toggleEmojis: !toggleEmojis
        })
    }

    render() {
        const { ChatList, User, Chats, ghostMode, typedMessage, toggleAttachment, toggleEmojis } = this.state
      
        const { Option } = Mentions;
        let classes = ghostMode ? "ghost-mode" : "normal-mode"
        return (
            <div className="content-body pd-0">
                <div className="chat-wrapper chat-wrapper-two">

                    <ChatSideBar Chats={ChatList} User={User} />

                    <div className="chat-content">
                        <ChatHead User={User} backgroundColor={'#25d366'} toggleMode={this.toggleMode} ghostMode={ghostMode} />
                        <PerfectScrollbar className="chat-content-body">
                            <div className="chat-group background-image" style={{ backgroundImage: "url('assets/image/whatsapp.png')" }} >

                                {/* <div className="chat-group-divider">February 20, 2019</div> */}
                                {
                                    Chats.map((item) => (
                                        <MessageCard data={item} backgroundColor={'#25d366'} />
                                    ))
                                }


                            </div>
                        </PerfectScrollbar >
                        {
                            toggleAttachment && <Attachments />
                        }

                        {
                            toggleEmojis && <Emojis />
                        }
                        <ChatFooter onKeyPressed={this.onKeyPressed} onKeyUp={this.onKeyUp} toggleMode={this.toggleMode} value={typedMessage}
                            onChange={this.onChange} onSelect={this.onSelect} ghostMode={ghostMode} toggleAttachment={this.toggleAttachment}
                            toggleEmojis={this.toggleEmojis} textAreaHeight={this.state.textAreaHeight} />
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, { setCurrentRoute })(Whatsapp);