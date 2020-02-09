import React, { Component } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { connect } from 'react-redux'
import { setCurrentRoute } from '../../../config/commanActions'
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    DatePicker,
    Radio,
} from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const CustomInput = (props) => {
    const { label, icon } = props
    return <Row className="ant-form-item">
        <Col span={6}>
            <label >{label}</label>
        </Col>
        <Col span={18}>
            {
                label == "Password" ? 
                    <Input.Password prefix={<Icon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder={label}/> : label == "Birthday" ? <DatePicker /> 
                : label == "Gender" ?
                    <Radio.Group>
                        <Radio value="male">Male</Radio>
                        <Radio value="female">Female</Radio>
                        <Radio value="gay">Rather Not say</Radio>
                    </Radio.Group> :
                    <Input
                        prefix={<Icon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder={label}
                    />
            }

        </Col>
    </Row>
}

class PersonalInfo extends Component {

    componentDidMount = () => {
        this.props.setCurrentRoute('personalinformation');
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>,
        );

        return (
            <PerfectScrollbar className="content-body">
                <div className="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
                    <div className="personalinfo-header">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-style1 mg-b-10">
                                <li className="breadcrumb-item"><a href="#">Settings</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Personal Info</li>
                            </ol>
                        </nav>
                        <h4 className="mg-b-0 tx-spacing--1">Personal Info</h4>
                    </div>


                    <Form onSubmit={this.handleSubmit}>
                        <div className="form-personalinfo round-border">
                            <div className="mg-b-20">
                                <h4 className="mg-b-10 tx-spacing--1">Profile</h4>
                                <p className="mg-b-10 tx-spacing--1" >Here You can View and Edit Yout Personal Information</p>
                            </div>

                            <CustomInput label={"User Name"} icon="user" />
                            <CustomInput label={"First Name"} icon="user" />
                            <CustomInput label={"Last Name"} icon="user" />
                            <CustomInput label={"Birthday"} icon={null} />
                            <CustomInput label={"Gender"} icon={null} />
                            <CustomInput label={"Password"} icon="lock" />
                            <div className="ant-form-item buttons">
                                <Button type="primary" >
                                    Save
                                </Button>
                            </div >
                        </div>

                        <div className="form-contact round-border">
                            <div className="mg-b-20">
                                <h4 className="mg-b-10 tx-spacing--1">Contact Info</h4>
                                <p className="mg-b-10 tx-spacing--1" >Here You can View and Edit Yout Contact Information</p>
                            </div>

                            <CustomInput label={"Email"} icon="mail" />
                            <CustomInput label={"Phone"} icon="phone" />

                            <div className="ant-form-item buttons">
                                <Button type="primary" >
                                    Save
                                </Button>
                            </div >
                        </div>
                    </Form>
                </div>
            </PerfectScrollbar >
        )
    }
}

export default connect(null, { setCurrentRoute })(Form.create()(PersonalInfo))