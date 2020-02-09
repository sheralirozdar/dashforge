import React, { Component } from 'react'
import SoundToggle from '../components/soundToggler'
import { Row, Col } from 'antd'
class CalendarSetting extends Component {

    state = {
        syncGoogle: false,
        syncOutlook: true,
    }

    setSound = (value, type) => {
        this.setState({
            [type]: value,
        })
    }
    render() {
        const { syncGoogle, syncOutlook } = this.state
        return (
            <div >
                <p> - Toggle Calendar Sync State </p>
                <Row gutter={4} className = {"notifications-ant-row"}>
                    <Col span={6}><SoundToggle value={syncGoogle} setValue={this.setSound} title={"Sync Google"} type="syncGoogle" /></Col>
                    <Col span={6}><SoundToggle value={syncOutlook} setValue={this.setSound} title={"Sync Outlook"} type="syncOutlook" /></Col>
                </Row>
            </div>
        )
    }
}

export default CalendarSetting