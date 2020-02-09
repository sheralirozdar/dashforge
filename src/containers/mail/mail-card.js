import React from 'react'
import { Input, Card, Row, Col, Menu, Dropdown, Button } from 'antd';
import Avatar from '../../config/avatar';

const MailView = (props) => {

    const style = {
        margin: "20px",
        borderRadius: "25px",
        borderColor: "rgba(0, 0, 0, 0.08)",
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 6px, rgba(0, 0, 0, 0) 0px 4px 30px"
    }

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <span>
                    Reply
                </span>
            </Menu.Item>
        </Menu>
    )
    const header = (
        <Row className="mail-header">
            <Col span={2}>
                <div className="avatar avatar-sm avatar-online">
                    <Avatar /> 
                </div>
            </Col>
            <Col span={18}>
                <div>
                    <p style={{ fontSize: "small" }}>{"Rashid"}<span style={{ marginLeft: "5px" }}>{"(someone@xyz.com)"}</span></p>
                    <p style={{ fontSize: "small" , fontWeight: 400}}>To : <span>{"Rameez Raja"}</span></p>
                    <p style={{ fontSize: "small" , fontWeight: 400}}>Subject : <span>{"this is  Subject"}</span></p>
                </div>
            </Col  >
            <Col span={3}>
                <p style={{ fontSize: "small" , fontWeight: 400}}>{"3 days"}</p>
            </Col >
            <Col span={1}>
                <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft">

                    <i className="fas fa-ellipsis-v"></i>

                </Dropdown>
            </Col>
        </Row >
    )
    return (
        <Card title={header} style={style}>
        
            <h6 className="tx-semibold mg-b-0">Ms. Katherine Lumaad</h6>
            <span className="tx-color-03">ThemePixels, Inc.</span>
            <p className="tx-color-03">San Francisco, CA, United States</p>

            <p>Greetings!</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
            <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. </p>
            <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem.</p>
            <p>
                <span>Sincerely yours,</span><br />
                <strong>Envato Design Team</strong>
            </p>

            {/* <button className="btn btn-primary" onClick={props.openReply}>Reply</button> */}
            <Button type="primary" shape="round" icon="rollback" size={"medium"} onClick={props.openReply}>
                Reply
            </Button>
        </Card>
       
    )
}

export default MailView