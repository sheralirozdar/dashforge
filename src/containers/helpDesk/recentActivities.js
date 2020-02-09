import React, { Component } from 'react'
import FeatherIcon from 'feather-icons-react';

const Activities = (props) => {
    const { user, Activity, page,icon } = props
    return (
        <li className="activity-item">
            <div className="activity-icon bg-primary-light tx-primary">
                <FeatherIcon icon={icon}></FeatherIcon>
            </div>
            <div className="activity-body">
                <p className="mg-b-2"><strong>{user}</strong> added a {Activity} to the ticket <a href="" className="link-02"><strong>{page}</strong></a></p>
                <small className="tx-color-03">2 hours ago</small>
            </div>
        </li>
    )
}

class RecentActivities extends Component {

    render() {
        return (
            <div className="col-md-6 mg-t-10">
                <div className="card">
                    <div className="card-header pd-b-0 pd-x-20 bd-b-0">
                        <div className="d-sm-flex align-items-center justify-content-between">
                            <h6 className="mg-b-0">Recent Activities</h6>
                            <p className="tx-12 tx-color-03 mg-b-0">Last activity: 2 hours ago</p>
                        </div>
                    </div>
                    <div className="card-body pd-20">
                        <ul className="activity tx-13">
                            <Activities user={"Sher"} Activity={"time entry"} page={"Payments"} icon="clock"/>
                            <Activities user={"Sher"} Activity={"attachment"} page={"Payments"} icon="paperclip"/>
                            <Activities user={"Sher"} Activity={"time entry"} page={"Payments"} icon="circle"/>
                            <Activities user={"Sher"} Activity={"time entry"} page={"Payments"} icon="share"/>
                            <Activities user={"Sher"} Activity={"time entry"} page={"Payments"} icon="paperclip"/>  
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecentActivities 