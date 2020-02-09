import React, { Component } from 'react'
import CalendarTimePicker from 'react-calendar';
import FeatherIcon from 'feather-icons-react';
import PerfectScrollbar from 'react-perfect-scrollbar'

class SideBar extends Component {

    render() {

        return (
            <div className="calendar-sidebar">
                    <div className="calendar-sidebar-header">
                        <i data-feather="search"></i>
                        <div className="search-form">
                            <input type="search" className="form-control" placeholder="Search calendar" />
                        </div>
                        <div className="btn btn-sm btn-primary btn-icon calendar-add" onClick={ () => this.props.setModel(new Date())}>
                            <div data-toggle="tooltip" title="Create New Event"><FeatherIcon icon="plus"></FeatherIcon></div>
                        </div>
                    </div>
                    <PerfectScrollbar id="calendarSidebarBody" className="calendar-sidebar-body">
                        <div className="calendar-inline">
                            <div id="calendarInline" >
                            <CalendarTimePicker
                                // onChange={this.onChange}
                                // value={this.state.date}
                            />
                            </div>
                        </div>

                        <div className="pd-y-20 pd-x-15">
                            <label className="tx-uppercase tx-sans tx-10 tx-medium tx-spacing-1 tx-color-03 pd-l-10 mg-b-10">My Calendar</label>
                            <nav className="calendar-nav">
                                <a href="" className="calendar show"><span></span> Calendar Events</a>
                                <a href="" className="birthday show"><span></span> Birthday Events</a>
                                <a href="" className="holiday show"><span></span> Holiday Calendar</a>
                                <a href="" className="discover show"><span></span> Discovered Events</a>
                                <a href="" className="meetup show"><span></span> Meetup Events</a>
                                <a href="" className="other show"><span></span> Other Events</a>
                            </nav>
                        </div>

                        <div className="pd-20 mg-b-20">
                            <label className="tx-uppercase tx-sans tx-10 tx-medium tx-spacing-1 tx-color-03 mg-b-15">Upcoming Events</label>
                            <div className="schedule-group">
                                <a href="#" className="schedule-item bd-l bd-2 bd-danger">
                                    <h6>Company Standup Meeting</h6>
                                    <span>8:00am - 9:00am, Engineering Room</span>
                                </a>
                                <a href="#" className="schedule-item bd-l bd-2 bd-success">
                                    <h6>Start Dashboard Concept</h6>
                                    <span>9:30am - 11:30am, Office Desk</span>
                                </a>
                                <a href="#" className="schedule-item bd-l bd-2 bd-primary">
                                    <h6>Chat Design Presentation</h6>
                                    <span>2:30pm - 3:00pm, Visual Room</span>
                                </a>
                            </div>
                        </div>
                    </PerfectScrollbar >
                </div>
        )
    }
}

export default SideBar;