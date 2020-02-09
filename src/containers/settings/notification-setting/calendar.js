import React, { Component } from 'react'
import SoundToggle from '../components/soundToggler'
import { Row, Col } from 'antd'
class CalendarSetting extends Component {

    state = {
        sound: false,
        holiday: false, 
        meeting: false,
        birthday: false
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
        const { sound, birthday, holiday, meeting } = this.state
        return (
            <div className="calendar-setting">
                <p> - Toggle Sounds</p>
                <Row gutter={4} className = {"notifications-ant-row"}>
                    <Col span={6}><SoundToggle value={sound} setValue={this.setSound} title={"Sound"} type="sound" /></Col>
                </Row>

                <p> - Toggle Sounds for Diffrenet Events</p>
                <Row gutter={4} className = {"notifications-ant-row"}>
                    <Col span={6}><SoundToggle value={birthday} setValue={this.setSound} title={"Birthday"} type="birthday" /></Col>
                    <Col span={6}><SoundToggle value={meeting} setValue={this.setSound} title={"Meetings"} type="meeting" /></Col>
                    <Col span={6}><SoundToggle value={holiday} setValue={this.setSound} title={"Holidays"} type="holiday" /></Col>
                </Row>
            </div>
        )
    }
}

export default CalendarSetting