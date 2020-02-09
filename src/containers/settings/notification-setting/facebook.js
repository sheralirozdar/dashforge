import React, { Component } from 'react'
import Slider from '../components/slider'
import SoundToggle from '../components/soundToggler'
import IncrementalAnalytics from '../components/incrementalAnalytics'
import { Row, Col } from 'antd'
class FacebookSetting extends Component {

    state = {
        notificationRate: 2,
        sound: true,
        messages: false,
        groupmessages: true,
        likes : false,
        comments: false,
        storymention : false,
        taggedphotos : false,
        likesLimit : 199, 
        commentsLimit: 200,
        storymentionLimit: 123,
        taggedphotosLimit: 435
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
        const { notificationRate, sound, messages, groupmessages, likes,
             comments, storymention, taggedphotos, likesLimit, commentsLimit ,storymentionLimit ,taggedphotosLimit  } = this.state
        return (
            <div className="facebook-setting">
                <p> - Set Notification Rate </p>
                <Slider value={notificationRate} setValue={this.setNotificationRate} />

                <p> - Toggle Sounds for Diffrenet Notifications</p>
                <Row gutter={4} className = {"notifications-ant-row"}>
                    <Col span={6}><SoundToggle value={sound} setValue={this.setSound} title={"Sound"} type="sound" /></Col>
                    <Col span={6}><SoundToggle value={messages} setValue={this.setSound} title={"Message"} type="messages" /></Col>
                    <Col span={6}><SoundToggle value={groupmessages} setValue={this.setSound} title={"Group Message"} type="groupmessages" /></Col>
                </Row>

                <Row gutter={4} className = {"notifications-ant-row"}>
                    <Col span={6}><SoundToggle value={likes} setValue={this.setSound} title={"Likes"} type="likes" /></Col>
                    <Col span={6}><SoundToggle value={comments} setValue={this.setSound} title={"Comments"} type="comments" /></Col>
                    <Col span={6}><SoundToggle value={storymention} setValue={this.setSound} title={"Story mentions"} type="storymention" /></Col>
                    <Col span={6}><SoundToggle value={taggedphotos} setValue={this.setSound} title={"Tagged Photos"} type="taggedphotos" /></Col>
                </Row>

                <p> - Notifications when Analytics reached certain number  </p>
                <Row gutter={4} className = {"notifications-ant-row"}>
                    <Col span={6}><IncrementalAnalytics value={likesLimit} setValue={this.setSound} title={"Likes"} type="likesLimit" /></Col>
                    <Col span={6}><IncrementalAnalytics value={commentsLimit} setValue={this.setSound} title={"Comments"} type="commentsLimit" /></Col>
                    <Col span={6}><IncrementalAnalytics value={storymentionLimit} setValue={this.setSound} title={"Story mentions"} type="storymentionLimit" /></Col>
                    <Col span={6}><IncrementalAnalytics value={taggedphotosLimit} setValue={this.setSound} title={"Tagged Photos"} type="taggedphotosLimit" /></Col>
                </Row>
                

            </div>
        )
    }
}

export default FacebookSetting