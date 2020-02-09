import React from 'react'
import { Card,Slider, Row, Col, InputNumber } from 'antd'

const CustomSlider = (props) => {
    const { value, setValue } = props 
    return (
        <Row className="slider">
            <Col span={6} > Notification rate </Col>
            <Col span={10}>
                <Slider
                    min={1}
                    max={5}
                    onChange={ setValue }
                    value={value}
                /> 
            </Col>
            <Col span={6}>
                <InputNumber
                    min={1}
                    max={5}
                    style={{ marginLeft: 16 }}
                    value={value}
                    onChange={ setValue }
                />
            </Col>
        </Row>
    )
}

export default CustomSlider 