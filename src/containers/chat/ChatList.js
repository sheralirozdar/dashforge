import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from '../../config/avatar';
import { toggleBackButton } from '../../config/commanActions'

class ChatList extends Component {


    state = {
        selectedConversation : 1
    }

    selectConversation = (id) => {
        if(window.innerWidth < 1199){
            this.props.toggleBackButton(true);
            document.body.classList.add('app-chat')
            document.body.classList.add('chat-content-show')
        }
        this.setState({
            selectedConversation : id
        })
    }
    render() {
        const { Chats } = this.props;
        return (
            <React.Fragment>
                <p className="tx-10 tx-uppercase tx-medium tx-color-03 tx-sans tx-spacing-1 pd-l-10 mg-b-10">Direct Messages</p>
                <div id="chatDirectMsg" className="chat-msg-list">
                    {
                        Chats.map((item, key) => {
                            const { id, name, timeAgo, newMessages, userOnline } = item;
                            let avatar = "";
                            userOnline ? avatar = "avatar avatar-sm avatar-online" : avatar = "avatar avatar-sm avatar-offline"
                            return <div key={id} className={this.state.selectedConversation == id ? "media active" : "media "} onClick={() => this.selectConversation(id)}>
                                <div className={avatar}>
                                    <Avatar />
                                </div>
                                <div className="media-body mg-l-10">
                                    <h6 className="mg-b-0">{name}</h6>
                                    <small className="d-block tx-color-04">{timeAgo}</small>
                                </div>
                                {newMessages > 0 && <span className="badge" style={{ background: '#e5e9f2' }}>{newMessages}</span>}
                            </div>
                        })
                    }
                </div>
            </React.Fragment>
        )
    }

}

export default connect( null ,{ toggleBackButton } )(ChatList)