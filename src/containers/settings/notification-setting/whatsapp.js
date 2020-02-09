import React, { Component } from 'react'
import Slider from '../components/slider'
import SoundToggle from '../components/soundToggler'
import { Row, Col } from 'antd'
class WhatsAppSetting extends Component {

    state = {
        notificationRate: 3,
        sound: false,
        groupchat: true,
        privatemessgae : false,
        mention : false,
        addedtogroup : false
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
        const { notificationRate, sound, groupchat, privatemessgae, mention, addedtogroup } = this.state
        return (
            <div className="whatsapp-setting">
                <p> - Set Notification Rate </p>
                <Slider value={notificationRate} setValue={this.setNotificationRate} />

                <p> - Toggle Sounds for Diffrenet Notifications</p>
                <Row gutter={4} className = {"notifications-ant-row"}>
                    <Col span={6}><SoundToggle value={sound} setValue={this.setSound} title={"Sound"} type="sound" /></Col>
                    <Col span={6}><SoundToggle value={groupchat} setValue={this.setSound} title={"Group Chat"} type="groupchat" /></Col>
                    <Col span={6}><SoundToggle value={privatemessgae} setValue={this.setSound} title={"Private Message"} type="privatemessgae" /></Col>
                </Row>

                <Row gutter={4} className = {"notifications-ant-row"}>
                    <Col span={6}><SoundToggle value={mention} setValue={this.setSound} title={"Mentions"} type="mention" /></Col>
                    <Col span={6}><SoundToggle value={ addedtogroup} setValue={this.setSound} title={"Added to Group"} type=" addedtogroup" /></Col>
                </Row>

            </div>
        )
    }
}

export default WhatsAppSetting