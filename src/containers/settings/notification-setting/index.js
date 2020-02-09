import React, { Component } from 'react'
import { Card,Slider, Row, Col } from 'antd'
import { connect } from 'react-redux'
import { setCurrentRoute } from '../../../config/commanActions'
import InstagramSetting from './instagram'
import PerfectScrollbar from 'react-perfect-scrollbar'
import FacebookSetting from './facebook'
import WhatsappSetting from './whatsapp'
import WebchatSetting from './webchat'
import CalendarSetting from './calendar'

class NotificationSetting extends Component {
    state = {
        currentTab : "instagram"
    }

    componentDidMount = () => {
        this.props.setCurrentRoute('notificationsettings');
    }

    render() {
        const { currentTab } = this.state
        return (
            <PerfectScrollbar className="content-body ps ps--active-y">
                <div className="container notifications-setting pd-x-0 pd-lg-x-10 pd-xl-x-0">
                    <div className="notification-header">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-style1 mg-b-10">
                                <li className="breadcrumb-item"><a href="#">Settings</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Notifications</li>
                            </ol>
                        </nav>
                        <h4 className="mg-b-0 tx-spacing--1">Notifications</h4>
                    </div>

                    <div>
                        <Card className = "notification-tabs"
                            style={{ width: '100%' }}
                            tabList={[ {key: "instagram", tab: "Instagram"}, 
                                {key: "facebook", tab: "Facebook"}, 
                                {key: "whatsapp", tab: "Whats App"}, 
                                {key: "webchat", tab: "WebSite Chat"}, 
                                {key: "calendar", tab: "Calendar"}
                            ]}
                            activeTabKey={currentTab}
                            onTabChange={key => this.setState({ currentTab: key })}
                        >
                            {   
                                currentTab == "instagram" ? <InstagramSetting /> : 
                                currentTab == "facebook" ? <FacebookSetting /> :
                                currentTab == "whatsapp" ? <WhatsappSetting /> :
                                currentTab == "webchat" ? <WebchatSetting /> : <CalendarSetting />  
                            }
                        </Card>
                    </div>
                </div>
            </PerfectScrollbar >
        )
    }
}

export default connect(null, { setCurrentRoute })(NotificationSetting)