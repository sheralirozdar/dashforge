import React from 'react'
import { Switch, Row, Col, Icon } from 'antd'

const SoundToggle = (props) => {
    const { value, setValue, title, type } = props 
    return (
        <Row>
            <Col span={4} > {title} </Col>
            <Col span={10}>
                {
                    value ? 
                        <Switch
                            checkedChildren={<Icon type="check" />}
                            unCheckedChildren={<Icon type="close" />}
                            onChange={ (value) => setValue(value, type) }
                            defaultChecked
                        />
                    :
                        <Switch
                            checkedChildren={<Icon type="check" />}
                            unCheckedChildren={<Icon type="close" />}
                            onChange={ (value) => setValue(value, type) }
                        />

                }
                
            </Col>
        </Row>
    )
}

export default SoundToggle