import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { connect } from 'react-redux'
import { setModel } from '../../config/commanActions';

class MailNav extends Component {

  render() {
    return (
      <div className="mail-sidebar">
        <PerfectScrollbar className="mail-sidebar-body">
          <div className="pd-20">
            <button onClick={ () => this.props.setModel("composeMail")} className="btn btn-primary btn-block tx-uppercase tx-10 tx-medium tx-sans tx-spacing-4">Compose</button>
          </div>
          <div className="pd-b-10 pd-x-10">
            <nav className="nav nav-sidebar tx-13">
              <Link to="" className="nav-link active"><FeatherIcon icon="inbox"></FeatherIcon> <span>Inbox</span> <span className="badge">20</span></Link >
              <Link to="" className="nav-link"><FeatherIcon icon="monitor"></FeatherIcon> <span>Starred</span> <span className="badge">3</span></Link >
              <Link to="" className="nav-link"><FeatherIcon icon="clock"></FeatherIcon> <span>Important</span> <span className="badge">10</span></Link >
              <Link to="" className="nav-link"><FeatherIcon icon="star"></FeatherIcon> <span>Sent Mail</span> <span className="badge">8</span></Link >
              <Link to="" className="nav-link"><FeatherIcon icon="file"></FeatherIcon> <span>Drafts</span> <span className="badge">15</span></Link >
              <Link to="" className="nav-link"><FeatherIcon icon="slash"></FeatherIcon> <span>Spam</span> <span className="badge">128</span></Link >
              <Link to="" className="nav-link"><FeatherIcon icon="trash"></FeatherIcon> <span>Trash</span> <span className="badge">6</span></Link >
            </nav>
          </div>
          <div className="pd-10">
            <label className="tx-sans tx-uppercase tx-medium tx-10 tx-spacing-1 tx-color-03 pd-l-10">Label</label>
            <nav className="nav nav-sidebar tx-13">
              <Link to="" className="nav-link"><FeatherIcon icon="folder"></FeatherIcon> <span>Social</span></Link >
              <Link to="" className="nav-link"><FeatherIcon icon="folder"></FeatherIcon> <span>Promotions</span></Link >
              <Link to="" className="nav-link"><FeatherIcon icon="folder"></FeatherIcon> <span>Updates</span></Link >
              <Link to="" className="nav-link"><FeatherIcon icon="folder"></FeatherIcon> <span>Business</span></Link >
              <Link to="" className="nav-link"><FeatherIcon icon="folder"></FeatherIcon> <span>Finance</span></Link >
            </nav>
          </div>

          <div className="pd-y-15 pd-x-10">
            <label className="tx-sans tx-uppercase tx-medium tx-10 tx-spacing-1 tx-color-03 pd-l-10">Tags</label>
            <nav className="nav nav-sidebar tx-13">
              <Link to="" className="nav-link"><FeatherIcon icon="tag"></FeatherIcon> <span>Facebook</span></Link >
              <Link to="" className="nav-link"><FeatherIcon icon="tag"></FeatherIcon> <span>Twitter</span></Link >
            </nav>
          </div>
        </PerfectScrollbar >
      </div>
    )
  }
}

export default connect(null, { setModel })(MailNav);