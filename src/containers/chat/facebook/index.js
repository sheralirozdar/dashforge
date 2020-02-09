import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentRoute } from '../../../config/commanActions'
import $ from 'jquery';
import ChatSideBar from '../chatSidebar'
import ChatHead from '../chatHead'
import MessageCard from '../messageCard'
import ChatJquery from '../jqueryChat'
import ChatFooter from '../chatFooter';
import Attachments from '../attachments';
import PerfectScrollbar from 'react-perfect-scrollbar'
import Emojis from '../emojis';

class Facebook extends Component {

    componentDidMount = () => {
        // $(ChatJquery())
        this.props.setCurrentRoute("facebook");
    }

    // componentWillUnmount = () => {
    //     $('#mailSidebar').off('click');
    //     $("#showMemberList").off('click');
    //     $("#chatDirectMsg .media").off('click');
    //     $('#allChannels div').off('click');
    // }

    state = {
        typedMessage: "",
        textAreaHeight: 60,
        ghostMode: false,
        toggleAttachment: false,
        toggleEmojis: false,
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
                time: "November 24, 2019 at 2:00pm",
                body: "hey how are you ",
                nameInitial: "S",
                onlineStatus: true,
                ghostMessage: true
            },
            {
                sender: "me",
                name: "Rameez Raja",
                time: "November 24, 2019 at 2:00pm",
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
                time: "November 24, 2019 at 2:00pm",
                body: "Good",
                nameInitial: "S",
                onlineStatus: true,
                ghostMessage: false
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

        return (
            <div className="content-body pd-0">
                <div className="chat-wrapper chat-wrapper-two">

                    <ChatSideBar Chats={ChatList} User={User} />
                    <div className="chat-content">
                        <ChatHead User={User} backgroundColor={'#3b5997'} toggleMode={this.toggleMode} ghostMode={ghostMode} />
                        <PerfectScrollbar className="chat-content-body">



                            <div className="chat-group background-image facebook" style={{ backgroundImage: "url('assets/image/facebook.png')" }} >

                                {
                                    Chats.map((item) => (
                                        <MessageCard data={item} backgroundColor={'#3b5997'} />
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

export default connect(mapStateToProps, { setCurrentRoute })(Facebook);