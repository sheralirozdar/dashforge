import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MemberList extends Component{

    render(){

        return(
            <div className="chat-sidebar-right ">
                    {
                        <div className="pd-y-20 pd-x-10">
                            <div className="tx-10 tx-uppercase tx-medium tx-color-03 tx-sans tx-spacing-1 pd-l-10">Members List</div>
                            <div className="chat-member-list">
                                <Link to="#" className="media">
                                    <div className="avatar avatar-sm avatar-online">
                                        <span className="avatar-initial rounded-circle">b</span>
                                    </div>
                                    <div className="media-body mg-l-10">
                                        <h6 className="mg-b-0">dfbot</h6>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    }
                </div>
        )
    }
}

export default MemberList