import React, { Component } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { connect } from 'react-redux'
import { setCurrentRoute } from '../../../config/commanActions'
import { Skeleton, Switch, Card, Icon, Avatar, Row, Col } from 'antd';

const { Meta } = Card;

class SecuritySetting extends Component {
    componentDidMount = () => {
        this.props.setCurrentRoute('security');
    }
    render() {
        
        return (
            <PerfectScrollbar className="content-body">
                <div className="container security-setting pd-x-0 pd-lg-x-10 pd-xl-x-0">
                    <div className="setting-header">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-style1 mg-b-10">
                                <li className="breadcrumb-item"><a href="#">Settings</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Security</li>
                            </ol>
                        </nav>
                        <h4 className="mg-b-0 tx-spacing--1">Security</h4>
                    </div>

                    <Card
                        actions={[
                            <span>Secure Account</span>,
                        ]}
                    >
                        <div className="card-content">
                            <Row>
                                <Col span={18}>
                                    <h4>Security Issues found</h4>
                                    <p>Protect your account now by resolving these issues</p>
                                </Col>
                                <Col span={6}>
                                    <img className="setting-image" style = {{width:"100%"}} src="https://www.gstatic.com/identity/boq/accountsettingsmobile/securitycheckup_scene_yellow_316x112_8b4f5a4b62762d8765fdb69f5d6b3b76.png" />
                                </Col>
                            </Row>
                        </div>
                    </Card>

                    <Card>
                        <div className="card-content">
                            <Row>
                                <Col span={18}>
                                    <h4>Ways we can verify it's you</h4>
                                    <p>These can be used to make sure it's really you signing in or to reach you if there's suspicious activity in your account</p>
                                </Col>
                                <Col span={6}>
                                    <img className="setting-image" style = {{width:"100%"}} src="https://www.gstatic.com/identity/boq/accountsettingsmobile/recovery_scene_316x112_a71256f365c17ad4f8a1b82c5b03a173.png" />
                                </Col>
                            </Row>
                        </div>

                        <div className="card-footer" >
                            <Row>
                                <Col span={12}>
                                    Recovery Phone
                            </Col>
                                <Col span={12}>
                                    03000000000
                            </Col>
                            </Row>

                            <hr />

                            <Row>
                                <Col span={12}>
                                    Recovery Email
                            </Col>
                                <Col span={12}>
                                    someone@someservice.com
                            </Col>
                            </Row>
                        </div>
                    </Card>

                    <Card
                        actions={[
                            <span>Manage Devices</span>,
                        ]}
                    >
                        <div className="card-content">
                            <Row>
                                <Col span={18}>
                                    <h4>Your devices</h4>
                                    <p>You’re currently signed in to your Google Account on these devices</p>

                                    <ul>
                                        <li>
                                            <Row>
                                                <Col span={2}>
                                                    <img style = {{width:"100%"}}  src="https://www.gstatic.com/identity/boq/accountsettingsmobile/devicesrealistic_laptop_windows_36x36_10a55c035b5267ea366731d746b48c21.png" />
                                                </Col>
                                                <Col span={18}>
                                                    <h5>Windows</h5>
                                                    <p>Pakistan-2:00pm</p>
                                                </Col>
                                            </Row>
                                        </li>
                                    </ul>
                                </Col>
                                <Col span={6}>
                                    <img className="setting-image" style = {{width:"100%"}}  src="https://www.gstatic.com/identity/boq/accountsettingsmobile/securitycheckup_scene_yellow_316x112_8b4f5a4b62762d8765fdb69f5d6b3b76.png" />
                                </Col>
                            </Row>
                        </div>
                    </Card>

                </div>
            </PerfectScrollbar>
        )
    }
}

export default connect(null, { setCurrentRoute })(SecuritySetting)