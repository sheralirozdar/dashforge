import React, { Component } from 'react'
import Slider from '../components/slider'
import SoundToggle from '../components/soundToggler'
import { Row, Col } from 'antd'
class WebChatSetting extends Component {

    state = {
        notificationRate: 4,
        sound: false
    }

    setNotificationRate = (value) => {
        this.setState({
            notificationRate: value,
        })
    }

    setSound = (value, type) => {
        this.setState({
            [type]: value,
        })
    }
    render() {
        const { notificationRate, sound } = this.state
        return (
            <div className="webchat-setting">
                <p> - Set Notification Rate </p>
                <Slider value={notificationRate} setValue={this.setNotificationRate} />

                <p> - Toggle Sounds for Diffrenet Notifications</p>
                <Row gutter={4} className = {"notifications-ant-row"}>
                    <Col span={6}><SoundToggle value={sound} setValue={this.setSound} title={"Sound"} type="sound" /></Col>
                </Row>
            </div>
        )
    }
}

export default WebChatSetting