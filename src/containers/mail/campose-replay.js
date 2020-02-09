import React, { useCallback } from 'react'
import { Input, Card, Row, Col, Menu, Dropdown, Button } from 'antd';
import ReactQuill from 'react-quill';
import Avatar from '../../config/avatar';
import 'react-quill/dist/quill.snow.css';


const ComposeReply = (props) => {
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
                    <p style={{ fontSize: "small", fontWeight: 400 }}>To : <span>{"Rameez Raja"}</span></p>
                    <p style={{ fontSize: "small", fontWeight: 400 }}>Subject : <span>{"this is  Subject"}</span></p>
                </div>
            </Col  >
            <Col span={3}>
                <p style={{ fontSize: "small", fontWeight: 400 }}>{"3 days"}</p>
            </Col >
            <Col span={1}>
                <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft">

                    <i className="fas fa-ellipsis-v"></i>

                </Dropdown>
            </Col>
        </Row >
    )
    const { value, ontextUpdate } = props
    return (
        <Card title={header} style={style}>

            <div className="tx-13 tx-lg-14 ht-100">
                <ReactQuill placeholder={"Type your reply here . . ."}
                    onChange={ontextUpdate} />
            </div>

            <Button type="primary" shape="round" size={"medium"} onClick={props.openReply}>
                Send
            </Button>
            <Button style={{marginLeft : "5px"}}shape="round" size={"medium"} onClick={props.onClose}>Close</Button>
        </Card>
    )
}

export default ComposeReply