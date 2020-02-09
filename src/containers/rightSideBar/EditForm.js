import React, { Component } from 'react'
import { Button } from 'antd'
const InputAndLabel = (props) => {
    const { label, value, type, placeholder } = props
    return (
        <div className="input-wrapper">
                <label for={label} className="inputlabel">{label}</label>
                <input id={label} className="input" type={type} placeholder={placeholder} 
                    value={value} onChange={ props.onChange }/>
        </div>
    )
}

class EditForm extends Component {

    state = {
            Name: null,
            Description : null,
            Email : null,
            Twitter : null,
            Phone : null,
            Link : null
    }

    onTextFiledChanged = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    onSave = () => {
        console.log( this.state )
    }

    render() {
        const { Name, Description, Email, Twitter, Phone, Link } = this.state
        return (
            <div className="edit-from">
                <div className="image-input-wrapper">
                    <label for="imageinput" className="imagelabel" > 
                        <input id="imageinput" type="file" className="imageinput"/>
                        <strong>+</strong>
                    </label > 
                </div>
                <InputAndLabel label="Name" value={Name} type={"text"} placeholder="Name" onChange={ this.onTextFiledChanged }/>
                <InputAndLabel label="Description" value={Description} type={"text"} placeholder="Description" onChange={ this.onTextFiledChanged }/>
                <InputAndLabel label="Email" value={Email} type={"email"} placeholder="Email address" onChange={ this.onTextFiledChanged }/>
                <InputAndLabel label="Twitter" value={Twitter} type={"text"} placeholder="Twitter username" onChange={ this.onTextFiledChanged }/>
                <InputAndLabel label="Phone" value={Phone} type={"tel"} placeholder="+1" onChange={ this.onTextFiledChanged }/>
                <InputAndLabel label="Link" value={Link} type={"url"} placeholder="URL" onChange={ this.onTextFiledChanged }/>
                <Button type="primary" onClick={ this.onSave } >Save</Button>
            </div>
        )
    }
}

export default EditForm;