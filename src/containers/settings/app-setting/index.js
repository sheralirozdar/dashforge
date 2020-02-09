import React, { Component } from 'react'
import { Card} from 'antd'
import { connect } from 'react-redux'
import { setCurrentRoute } from '../../../config/commanActions'
import PerfectScrollbar from 'react-perfect-scrollbar'
import EmailSetting from './email'
import CalendarSetting from './calendar'

class AppSetting extends Component{

    state = {
        currentTab: "email"
    }

    componentDidMount = () => {
        this.props.setCurrentRoute('applicationsettings');
    }

    render(){
        const { currentTab } = this.state
        return(
            <PerfectScrollbar className="content-body ps ps--active-y">
                <div className="container application-setting pd-x-0 pd-lg-x-10 pd-xl-x-0">
                    <div className="notification-header">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-style1 mg-b-10">
                                <li className="breadcrumb-item"><a href="#">Settings</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Application Setting</li>
                            </ol>
                        </nav>
                        <h4 className="mg-b-0 tx-spacing--1">Application Setting</h4>
                    </div>

                    <div>
                        <Card className = "notification-tabs"
                            style={{ width: '100%' }}
                            tabList={[ 
                                {key: "email", tab: "Email"}, 
                                {key: "contacts", tab: "Contact"}, 
                                {key: "cloudstorage", tab: "Cloud Storage"}, 
                                {key: "calendar", tab: "Calendar"},
                                {key: "integration", tab: "Integration"}
                            ]}
                            activeTabKey={currentTab}
                            onTabChange={key => this.setState({ currentTab: key })}
                        >
                            {   
                                currentTab == "email" ? <EmailSetting /> : 
                                currentTab == "contacts" ? null :
                                currentTab == "cloudstorage" ? null :
                                currentTab == "integration" ? null : <CalendarSetting />  
                            }
                        </Card>
                    </div>
                </div>
            </PerfectScrollbar >
        )
    }
}

export default connect(null, { setCurrentRoute })(AppSetting)