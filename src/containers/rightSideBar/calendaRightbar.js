import React, { Component } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

class Calendar extends Component {

    render() {
        return (
            <div className="calendar">
                <div className="head">
                    <h4>
                        Calendar
                    </h4>
                </div>
                <hr />
                <div className="body">
                    <p>You're almost there! To display and manage your calendar in Front,
                        connect your account below:</p>

                    <div className="btn-wapper">
                            <Button className="ant-btn blue-text" icon={"google"} size={"large"}>
                                Login with Google 
                            </Button>
                            <Button className="ant-btn red-text" icon={"office"} size={"large"}>
                                Login with office 365
                            </Button>
                   
                    </div>

                    <div className="subtitle">
                        <div className="questions"> 
                            <p>Questions? </p>
                            <Link className="link" >Contact Support.</Link>
                        </div>
                        <div className="policy">
                            <Link className="link">Privacy Policy  </Link>
                            <i className="fas fa-circle "></i>
                            <Link className="link">  Terms of Use</Link>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Calendar;