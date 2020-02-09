import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import FeatherIcon from 'feather-icons-react';
import $ from 'jquery';
import { DatePicker, Radio, Button, Badge } from 'antd';
import jqueryNav from './jqueryNav'
import { toggleBackButton } from '../../config/commanActions'
import NavFooter from './navFooter'
const { RangePicker } = DatePicker;
const ButtonGroup = Button.Group;

const MenuItem = (props) => {
  const { title, active, name, darkMode } = props;
  const [hover, onHover] = useState(false);
  return (
    <li className={active == name ? "nav-item active" : "nav-item"} onMouseEnter={() => onHover(true)} onMouseLeave={() => onHover(false)}>
      <Link to={name != "helpdesk" ? "/" + name : "/"} className="nav-link">
        {
          active == name ? <img src={"./assets/icons/" + name + ".svg"} className="original-icon" /> :
            hover ? <img src={"./assets/icons/" + name + ".svg"} className="original-icon" /> :
              darkMode ? <img src={"./assets/icons/" + name + "-light.svg"} className="original-icon" /> :
                <img src={"./assets/icons/" + name + "-dark.svg"} className="original-icon" />
        }
        <span>{title}</span>
      </Link >
    </li>
  )
}

class NavBar extends Component {

  state = {
    currenttab: "apps",
    lastTab: "setting",
    asideStatus: false,
    asideHover: false,
    screenWidth: null
  }

  asideHover = (flag) => {
    console.log("hover ", flag)
    this.setState({
      asideHover: flag
    })
  }

  toggleAside = () => {
    this.setState({
      asideStatus: !this.state.asideStatus
    })
  }

  moveBack = () => {

    // app-contact model-open contact-content-show
    // document.body.classList.add(contact-content-show)
    if (document.body.className.match("contact-content-show")) {
      document.body.classList.remove("contact-content-show")
      document.body.classList.add("contact-content-visbile")
    } else if (document.body.className.match("mail-content-show")) {
      // app-mail mail-content-show
      document.body.classList.remove("app-mail")
      document.body.classList.remove("mail-content-show")
    } else {
      document.body.classList.remove('chat-content-show');
    }
    this.props.toggleBackButton(false);
  }

  changeTab = (tab) => {
    this.setState({
      currenttab: tab,
      lastTab: "setting",
    })
  }

  toogleSetting = (tab) => {
    this.setState({
      currenttab: this.state.lastTab,
      lastTab: this.state.currenttab,

    })
  }

  componentDidMount = () => {
    // $(jqueryNav())
    this.setState({
      screenWidth: window.innerWidth
    })
  }

  componentDidUpdate = (prevProps) => {

    console.log("this is old", prevProps.currentRoute);
    console.log("this is new ", this.props.currentRoute);

    if (this.props.currentRoute != prevProps.currentRoute) {

      if (this.props.currentRoute == "helpdesk" || this.props.currentRoute == "analytics" || this.props.currentRoute == "salemonitoring") {
        console.log("set ", true)
        this.setState({
          asideStatus: true
        })
      }
      else {
        this.setState({
          asideStatus: false
        })
      }
    }

  }

  render() {
    const active = this.props.currentRoute
    const { currenttab, openUserinfo, asideStatus, asideHover, screenWidth } = this.state
    console.log(this.state.screenWidth);
    let classes = ""
    if (screenWidth < 1000) {
      classes = "aside aside-fixed"
      asideStatus ? document.body.classList.add('show-aside') : document.body.classList.remove('show-aside');
      if (asideStatus) {
        const backdrop = document.createElement('div')
        backdrop.setAttribute('class', "aside-backdrop")
        document.body.appendChild(backdrop)
      }
    }
    else {
      classes = asideStatus ? "aside aside-fixed" : asideHover ? "aside aside-fixed minimize maximize" : "aside aside-fixed minimize"
    }

    const { darkMode, backButtonStatus } = this.props;
    console.log("back", backButtonStatus)
    return (
      <aside className={classes}>

        <div className="aside-header" >
          <Link to="/" className="aside-logo">
            {
              darkMode ? <img src={"./assets/icons/dashsync.svg"} width="95px" /> :
                <img src={"./assets/icons/dashsync-dark.svg"} width="95px" />
            }

          </Link >

          <div onClick={this.toggleAside} className="hamburger" >
            {!this.state.asideStatus ? <FeatherIcon icon="menu"></FeatherIcon> :
              <FeatherIcon icon="x"></FeatherIcon>}
          </div >

          <div onClick={this.moveBack} className={backButtonStatus ? "burger-menu" : "burger-menu d-none"}>
            <FeatherIcon icon="arrow-left"></FeatherIcon>
          </div >

        </div>

        <div className="aside-body " onMouseEnter={() => this.asideHover(true)} onMouseLeave={() => this.asideHover(false)} >
          <div className="aside-loggedin" >
            <div className="d-flex align-items-center justify-content-start">
              <Link to="" className="avatar"><img src="https://via.placeholder.com/500" className="rounded-circle" alt="" /></Link >
              <div className="aside-alert-link">

                {/* <ButtonGroup>
                  <Badge count={2}>
                    <Button icon="message" />
                  </Badge >
                  <Badge >
                    <Button icon="bell" />
                  </Badge >
                  <Button icon="logout" /> */}
                <Link to="" className="new" data-toggle="tooltip" title="You have 2 unread messages"><FeatherIcon icon="message-square"></FeatherIcon></Link >
                <Link to="" className="new" data-toggle="tooltip" title="You have 4 new notifications"><FeatherIcon icon="bell"></FeatherIcon></Link >
                <Link to="" data-toggle="tooltip" title="Sign out"><FeatherIcon icon="log-out"></FeatherIcon></Link >
                {/* </ButtonGroup> */}

                {/* <Link to="" className="new" data-toggle="tooltip" title="You have 2 unread messages"><FeatherIcon icon="message-square"></FeatherIcon></Link >
                <Link to="" className="new" data-toggle="tooltip" title="You have 4 new notifications"><FeatherIcon icon="bell"></FeatherIcon></Link >
                <Link to="" data-toggle="tooltip" title="Sign out"><FeatherIcon icon="log-out"></FeatherIcon></Link > */}
              </div>
            </div>
            <div className="aside-loggedin-user" /*onClick={this.toggleUserInfo}*/>
              <div className="d-flex align-items-center justify-content-between mg-b-2" data-toggle="collapse">
                <h6 className="tx-semibold mg-b-0">Katherine Pechon</h6>
                <div onClick={() => this.toogleSetting("settings")}>
                  {
                    currenttab != "setting" ? <FeatherIcon icon="settings"></FeatherIcon> :
                      <FeatherIcon icon="x"></FeatherIcon>
                  }
                </div>

              </div >
              <p className="tx-color-03 tx-12 mg-b-0">Administrator</p>
            </div>
            {/* {openUserinfo && <div className="collapse" style={{ display: "block" }}>
              <ul className="nav nav-aside mg-b-0">
                <li className="nav-item"><Link  className="nav-link"><FeatherIcon icon="edit"></FeatherIcon> <span>Edit Profile</span></Link ></li>
                <li className="nav-item"><Link  className="nav-link"><FeatherIcon icon="user"></FeatherIcon> <span>View Profile</span></Link ></li>
                <li className="nav-item"><Link  className="nav-link"><FeatherIcon icon="settings"></FeatherIcon> <span>Account Settings</span></Link ></li>
                <li className="nav-item"><Link className="nav-link"><FeatherIcon icon="help-circle"></FeatherIcon> <span>Help Center</span></Link ></li>
                <li className="nav-item"><Link className="nav-link"><FeatherIcon icon="log-out"></FeatherIcon> <span>Sign Out</span></Link ></li>
              </ul>
            </div>} */}
          </div>
          <ul className="nav nav-aside">
            {currenttab == "apps" &&
              <React.Fragment>
                <li className="nav-label mg-t-25">Applications</li>
                <MenuItem title="Mail" active={active} name="mail" darkMode={darkMode} />
                <MenuItem title="Contacts" active={active} name="contacts" darkMode={darkMode} />
                <MenuItem title="Calendar" active={active} name="calendar" darkMode={darkMode} />
                <MenuItem title="Cloud Storage" active={active} name="cloud" darkMode={darkMode} />
                <li className="nav-label mg-t-25">Chats</li>
                <MenuItem title="SMS" active={active} name="textmessaging" darkMode={darkMode} />
                <MenuItem title="WhatsApp" active={active} name="whatsapp" darkMode={darkMode} />
                <MenuItem title="Facebook" active={active} name="facebook" darkMode={darkMode} />
                <MenuItem title="Instagram" active={active} name="instagram" darkMode={darkMode} />
                <MenuItem title="Twitter" active={active} name="twitter" darkMode={darkMode} />
                <MenuItem title="Chat" active={active} name="websitechat" darkMode={darkMode} />
                <MenuItem title="Team Discussions" active={active} name="teamdiscussions" darkMode={darkMode} />
              </React.Fragment>
            }

            {currenttab == "integartions" &&
              <React.Fragment>
                <li className="nav-label mg-t-25">Insights</li>
                <MenuItem title="Helpdesk Management" active={active} name="helpdesk" darkMode={darkMode} />
                <MenuItem title="Website Analytics" active={active} name="analytics" darkMode={darkMode} />
                <MenuItem title="Sale Monitorings" active={active} name="salemonitoring" darkMode={darkMode} />

                <li className="nav-label mg-t-25">Filters</li>
                <RangePicker
                  className="ant-calendar-insight-filter"
                  showTime={{ format: 'HH:mm' }}
                  format="YYYY-MM-DD HH:mm"
                  placeholder={['Start Time', 'End Time']}
                  onChange={() => { }}
                  onOk={() => { }}
                />

                <Radio.Group className="ant-radio-insight-filter" onChange={() => { }} >
                  <Radio.Button value="last24hours">Last 24 Hours</Radio.Button>
                  <Radio.Button value="last7days">Last 7 Days</Radio.Button>
                  <Radio.Button value="last90days">Last 90 Days</Radio.Button>
                  <Radio.Button value="last6months">Last 6 Months</Radio.Button>
                  <Radio.Button value="lastoneyear">Last 1 year</Radio.Button>
                  <Radio.Button value="currentyear">Current Year</Radio.Button>
                  <Radio.Button value="alltime">All Time</Radio.Button>
                </Radio.Group>

              </React.Fragment>
            }

            {currenttab == "sequence" &&
              <h2></h2>

            }

            {currenttab == "support" &&
              <h2></h2>
            }

            {currenttab == "setting" &&
              <React.Fragment>
                <li className="nav-label mg-t-25">Settings</li>
                <MenuItem title="Personal Information" active={active} name="personalinformation" darkMode={darkMode} />
                <MenuItem title="Security" active={active} name="security" darkMode={darkMode} />
                <MenuItem title="Application Settings" active={active} name="applicationsettings" darkMode={darkMode} />
                <MenuItem title="Notification Settings" active={active} name="notificationsettings" darkMode={darkMode} />
              </React.Fragment>
            }

          </ul>
        </div>


        <NavFooter changeTab={this.changeTab} currenttab={this.state.currenttab} asideHover={this.asideHover} />

      </aside>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentRoute: state.commonReducer.currentRoute,
    darkMode: state.commonReducer.darkMode,
    backButtonStatus: state.commonReducer.backButtonStatus
  }
}

export default connect(mapStateToProps, { toggleBackButton })(NavBar);