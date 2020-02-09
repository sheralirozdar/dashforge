import React, { Component } from 'react'
import { connect } from "react-redux";
import { setModel } from "../../config/commanActions"
import FeatherIcon from 'feather-icons-react';

class EventDescription extends Component {

    render() {
        const { eventDescription  } = this.props
        console.log(eventDescription)
        const {  title, eventStartDate, eventStartTime, eventEndDate, eventEndTime, note} = eventDescription
        return (
            <div className={"modal calendar-modal-event fade effect-scale show"} role="dialog" aria-hidden="true"
            style={{ display: "block", paddingRight: "17px", backgroundColor: "rgba(15, 21, 32, 0.7)" }}> >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header" style={{ backgroundColor : '#3a87ad'}}>
                            <h6 className="event-title">{title}</h6>
                            <nav className="nav nav-modal-event">
                                <div className="nav-link"><FeatherIcon icon="external-link"></FeatherIcon></div>
                                <div className="nav-link"><FeatherIcon icon="trash-2"></FeatherIcon></div>
                                <div className="nav-link" data-dismiss="modal" onClick={ () => this.props.setModel("")}><FeatherIcon icon="x"></FeatherIcon></div>
                            </nav>
                        </div>
                        <div className="modal-body">
                            <div className="row row-sm">
                                <div className="col-sm-6">
                                    <label className="tx-uppercase tx-sans tx-11 tx-medium tx-spacing-1 tx-color-03">Start Date</label>
                                    <p className="event-start-date">{eventStartDate}</p>
                                </div>
                                <div className="col-sm-6">
                                    <label className="tx-uppercase tx-sans tx-11 tx-medium tx-spacing-1 tx-color-03">End Date</label>
                                    <p className="event-end-date">{eventEndDate}</p>
                                </div>
                            </div>

                            <label className="tx-uppercase tx-sans tx-11 tx-medium tx-spacing-1 tx-color-03">Description</label>
                            <p className="event-desc tx-gray-900 mg-b-40">{note}</p>

                            <div className="btn btn-secondary pd-x-20" data-dismiss="modal" onClick={ () => this.props.setModel("")}>Close</div >
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        eventDescription : state.commonReducer.modelData
    }
}

export default connect(mapStateToProps, { setModel })(EventDescription);