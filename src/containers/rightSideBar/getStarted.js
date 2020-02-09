import React, { Component } from 'react'
import { Progress } from 'antd';
import FeatherIcon from 'feather-icons-react';


const GuideCard = () => {

    return (
        <div className={"guideCard"}>
            <div className="icon">
                <FeatherIcon icon="globe"></FeatherIcon>
            </div>

            <div className="text">
                <h4>
                    Downlaod
                </h4>
                <p>{ "<" + " 30sec"} </p>
            </div>
        </div>
    )
}

class GetStarted extends Component {

    state = {
        openDropdown: false
    }
    render() {
        const { openDropdown } = this.state
        return (
            <div className="get-started">
                <div className="head">
                    <h4>Get Started</h4>
                </div>
                <hr />
                <div className="body">
                        
                    <div className="tracker">
                        <div className="progress" style={{ width: "25%", background: "#0168fa", height:"100%"}}></div> 
                        <p>25% done - almost there!  </p>
                    </div>

                   
                        <div className="greetings">
                            <h4>Hi, Rameez</h4>
                            <p>Let's get your team setup for success.</p>
                        </div>
                        <GuideCard />
                        <GuideCard />

                        <div className="taskDropdown">
                            <div className="d-flex align-items-center justify-content-between mg-b-2 mg-t-2"
                                data-toggle="collapse" onClick={() => { this.setState({ openDropdown: !openDropdown }) }}>
                                <h6 className="tx-semibold mg-b-0">Completed Task</h6>
                                <FeatherIcon icon="chevron-down"></FeatherIcon>
                            </div >

                            <div className={openDropdown ? "collapse show" : "collapse"} >
                                <ul className="mg-b-0">
                                    <li > <p>Create your account</p></li>
                                    <li > <p className="line-through">Add a team inbox</p></li>
                                    <li > <p>Add a teammate</p></li>
                                    <li > <p>Create a canned responce</p></li>
                                </ul>
                            </div>
                        </div>


                    
                </div>
                <div className="footer">
                    <div className="footer-link-wrapper">
                    <i className="fas fa-external-link-alt"></i>
                        <p>More on our <strong> Trial Guide </strong> </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default GetStarted