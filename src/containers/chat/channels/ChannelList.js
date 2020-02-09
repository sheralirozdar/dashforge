import React, { Component } from 'react'
import FeatherIcon from 'feather-icons-react';
import { connect } from 'react-redux'
import { setModel, toggleBackButton } from '../../../config/commanActions';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';

const ChannelCard = (props) => {
    const { id, name, newMessages } = props.data;
    const { selectedConversation } = props
    return (
        <div className={ selectedConversation == id ? "nav-link active" : "nav-link"} onClick={() => props.selectConversation(id)}>
            # {name}
            {newMessages > 0 && <span className="badge badge-danger">{newMessages}</span>}
        </div>
    )
}

class ChannelList extends Component {

    state = {
        selectedConversation : 1
    }

    selectConversation = (id) => {
        console.log("yo")
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
        const { Channels } = this.props;
        return (
            <div className="flex-fill">
                <div className="d-flex align-items-center justify-content-between pd-x-10 mg-b-10">
                    <span className="tx-10 tx-uppercase tx-medium tx-color-03 tx-sans tx-spacing-1">All Channels</span>
                    <a className="chat-btn-add" onClick={() => this.props.setModel("createChannel")}><span data-toggle="tooltip" title="Create Channel"><FeatherIcon icon="plus-circle"></FeatherIcon></span></a>
                </div>
                <nav id="allChannels" className="nav flex-column nav-chat mg-b-20">
                    {
                        Channels.map((item, key) => (
                            <ChannelCard data={item} key={item.id} selectedConversation={this.state.selectedConversation}
                                selectConversation={this.selectConversation } />
                        ))
                    }
                </nav>
            </div>
        )
    }

}

export default connect(null, { setModel, toggleBackButton })(ChannelList);