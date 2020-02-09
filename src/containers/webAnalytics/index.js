import React, { Component } from 'react'
import { connect } from 'react-redux'
import Head from './head'
import AudienceMeter from './webSiteAudience'
import Sessions from './channelSessions'
import Acquisition from './acquisition'
import DeviceSessions from './deviceSessions'
import Traffic from './trafficSource'
import ADsAnalytics from './adAnalytics'
import Visits from './Visits'
import PageVisit from './pagesVisit'
import BrowserUsed from './browserUsed'
import Summary from './summaryTable'
import { setCurrentRoute } from '../../config/commanActions'
import PerfectScrollbar from 'react-perfect-scrollbar'

class WebAnalytics extends Component {

    componentDidMount = () => {
        this.props.setCurrentRoute("analytics");
    }

    render() {
        return (
            <PerfectScrollbar className="content-body">
                <div className="container pd-x-0"  style={{ maxWidth: "100%" }}>
                    <Head />
                    <div className="row row-xs">
                        <AudienceMeter />
                        <Sessions />
                        <Acquisition />
                        <DeviceSessions />
                        <Traffic totalTraffic={29834} />
                        <ADsAnalytics title={"Click Through"} number={3605} id={0} />
                        <ADsAnalytics title={"View Through"} number={3205} id={1} />
                        <ADsAnalytics title={"Total Conversa"} number={8605} id={2} />
                        <Visits title="Total Visits">
                            <PageVisit />
                        </Visits>
                        <Visits title="Browser Used By Users">
                            <BrowserUsed />
                        </Visits>
                        <Summary />
                    </div>
                </div>
            </PerfectScrollbar >
        )
    }
}

export default connect(null, { setCurrentRoute })(WebAnalytics);