import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentRoute } from '../../config/commanActions'
import FeatherIcon from 'feather-icons-react';
import $ from 'jquery';
import CurrentStatus from './currentStatus'
import HelpdeskJquery from './helpdeskJquery'
import Request from './request'
import CustomerSatisfaction from './customerSatisfaction';
import RecentActivities from './recentActivities'
import AgentPerfomance from './agentPerformance';
import Time from './time'
import Complaints from './Complaints'
import Ratings from './rating'
import Transaction from './transactionHistory';
import PerfectScrollbar from 'react-perfect-scrollbar'

class HelpDesk extends Component {

    componentDidMount = () => {
        $(HelpdeskJquery())
        this.props.setCurrentRoute("helpdesk");
    }

    render() {
        return (
            <PerfectScrollbar className="content-body">
                <div className="container pd-x-0 pd-lg-x-10 pd-xl-x-0"  style={{ maxWidth: "100%" }}>
                    <div className="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-30">
                        <div>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-style1 mg-b-10">
                                    <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Helpdesk Management</li>
                                </ol>
                            </nav>
                            <h4 className="mg-b-0 tx-spacing--1">Welcome to Dashboard</h4>
                        </div>
                        <div className="d-none d-md-block">
                            <button className="btn btn-sm pd-x-15 btn-white btn-uppercase"><FeatherIcon icon="save" className="wd-10 mg-r-5"></FeatherIcon> Save</button>
                            <button className="btn btn-sm pd-x-15 btn-white btn-uppercase mg-l-5"><FeatherIcon icon="share-2" className="wd-10 mg-r-5"></FeatherIcon> Share</button>
                            <button className="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5"><FeatherIcon icon="plus" className="wd-10 mg-r-5"></FeatherIcon> Add New Ticket</button>
                        </div>
                    </div>
                    <div className="row row-xs">
                        <div className="col-lg-8">
                            <CurrentStatus />
                            <div className="row row-xs mg-t-10">
                                <Request />
                                <CustomerSatisfaction />
                                <RecentActivities />
                                <AgentPerfomance />
                            </div>
                        </div>
                        <div className="col-lg-4 mg-t-10 mg-lg-t-0">
                            <div className="row row-xs">
                                <Time title="Time to Resolve Complaint" description="The average time taken to resolve complaints."
                                    time="7m:32m" totalTime="8m:0s" achieved="56%" id={0} />
                                <Time title="Time to Resolve Complaint" description="The average time taken to resolve complaints."
                                    time="7m:32m" totalTime="8m:0s" achieved="86%" id={1} />
                                <Complaints />
                                <Ratings />
                                <Transaction />
                            </div>
                        </div>
                    </div>
                </div>
            </PerfectScrollbar>
        )
    }
}

export default connect(null, { setCurrentRoute })(HelpDesk );