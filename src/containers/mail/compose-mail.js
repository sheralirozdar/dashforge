import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactQuill from 'react-quill'; 
import FeatherIcon from 'feather-icons-react';
import { connect } from 'react-redux'
import { setModel } from '../../config/commanActions';

class Compose extends Component{

  state = {
    shrink : false,
    minimize : false
  }

  onShrink = () => {
    const { shrink } = this.state
    this.setState({
      shrink : !shrink
    })
  }

  onMinimize = () => {
    const { minimize } = this.state
    this.setState({
      minimize : !minimize
    })
  }

    render(){
        const { shrink, minimize } = this.state
        return(
            <div id="mailCompose" className={ shrink ? "mail-compose show shrink" : minimize ? "mail-compose minimize show" : "mail-compose show"}>
            <div className="mail-compose-dialog">
              <div className="mail-compose-header">
                <h6 className="mail-compose-title tx-white">New Message</h6>
                <nav className="nav nav-icon-only">
                  <div onClick={ this.onMinimize } className="nav-link nav-link-minimize d-none d-lg-block">
                    <FeatherIcon icon="minus"></FeatherIcon>
                    <FeatherIcon icon="square"></FeatherIcon>
                  </div>
                  <div onClick={ this.onShrink } className="nav-link nav-link-shrink d-none d-lg-block">
                    <FeatherIcon icon="minimize-2"></FeatherIcon>
                    <FeatherIcon icon="maximize-2"></FeatherIcon>
                  </div>
                  <div onClick={ () => this.props.setModel(null) } className="nav-link nav-link-close">
                    <FeatherIcon icon="x"></FeatherIcon>
                  </div>
                </nav>
              </div>
              <div className="mail-compose-body">
                <div className="form-row align-items-center">
                  <div className="col-sm">Recipient:</div>
                  <div className="col-sm-10">
                    <input type="text" className="form-control bd-0 pd-x-0" placeholder="Enter recipient's email address" />
                  </div>
                </div>
                <hr className="mg-y-10" />
                <div className="form-row align-items-center">
                  <div className="col-sm">Subject:</div>
                  <div className="col-sm-10">
                    <input type="text" className="form-control bd-0 pd-x-0" placeholder="Enter subject" />
                  </div>
                </div>
                <div id="editor-container2" className="ht-150 mg-t-15">
                  <ReactQuill />

                </div>
                <div className="d-sm-flex align-items-center justify-content-between mg-t-25">
                  <div className="tx-13 mg-t-15 mg-sm-t-0">
                    <button className="btn btn-white mg-r-5">Save as Draft</button>
                    <button className="btn btn-primary">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default connect(null, { setModel })(Compose);