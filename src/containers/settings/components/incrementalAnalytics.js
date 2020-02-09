import React from 'react'
import { InputNumber, Row, Col, Icon } from 'antd'

const IncrementalAnalytics = (props) => {
    const { value, setValue, title, type } = props 
    return (
        <Row>
            <Col span={4} > {title} </Col>
            <Col span={10}>
                <InputNumber
                    min={1}
                    max={10000}
                    style={{ marginLeft: 16 }}
                    value={value}
                    onChange={ (value) => setValue(value, type) }
                />
            </Col>
        </Row>
    )
}

export default IncrementalAnalytics