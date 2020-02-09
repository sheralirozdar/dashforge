import React, { Component } from 'react'
import { connect } from "react-redux";
import { setModel } from "../../config/commanActions"

class CreateEvent extends Component {

  state = {
      title : null,
      type: "event",
      eventStartDate: new Date(),
      eventStartTime: null,
      eventEndDate: new Date(),
      eventEndTime: null,
      note: null
  }

  onTextFieldChange = (e) => {
    if( e.target.id == "eventStartDate" || e.target.id == "eventEndDate"){
      this.setState({
        [e.target.id]: new Date(e.target.value)
      })
    }else{
      this.setState({
        [e.target.id]: new Date(e.target.value)
      })
    }
    
  }

  onSave = () => {
    console.log("form a data ", this.state);
  }

  componentDidMount = () => {
    const { date } = this.props
    this.setState({ eventStartDate : new Date(date) }) 
  }

  render() {
    console.log( this.props.modalData ,"data " );
    const { title, type, eventStartDate, eventEndDate, note, eventStartTime, eventEndTime } = this.state;
    return (
      <div className={"modal calendar-modal-create fade effect-scale show" } 
        id="modalCreateEvent" role="dialog" aria-hidden="true" 
        style={{ display : "block" , paddingRight: "17px",backgroundColor: "rgba(15, 21, 32, 0.7)" }}> >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body pd-20 pd-sm-30">
              <button type="button" className="close pos-absolute t-20 r-20" data-dismiss="modal" 
                  aria-label="Close" onClick={ this.props.setModel }>
                <span aria-hidden="true"><i data-feather="x"></i></span>
              </button>

              <h5 className="tx-18 tx-sm-20 mg-b-20 mg-sm-b-30">Create New Event</h5>

              <form id="formCalendar" method="post" action="app-calendar.html">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Add title" 
                    id="title" value={title} onChange={this.onTextFieldChange}/>
                </div>
                <div className="form-group d-flex align-items-center">
                  <div className="custom-control custom-radio">
                    <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"
                      onClick={ () => this.setState({ type : "event" })  }/>
                    { type == "event" && <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"
                      onClick={ () => this.setState({ type : "event" }) } checked/> }
                    <label className="custom-control-label" for="customRadio1">Event</label>
                  </div>
                  <div className="custom-control custom-radio mg-l-20">
                    <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"
                      onClick={ () => this.setState({ type : "reminder" }) }/>
                    { type == "reminder" &&  <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"
                      onClick={ () => this.setState({ type : "reminder" }) }/>}
                    <label className="custom-control-label" for="customRadio2">Reminder</label>
                  </div>
                </div>
                <div className="form-group mg-t-30">
                  <label className="tx-uppercase tx-sans tx-11 tx-medium tx-spacing-1 tx-color-03">Start Date</label>
                  <div className="row row-xs">
                    <div className="col-7">
                      <input id="eventStartDate" type="date" value="" className="form-control" placeholder="Select date" 
                        value={eventStartDate.toISOString().substr(0, 10)} onChange={this.onTextFieldChange}/>
                    </div>
                    <div className="col-5">
                      <input id="eventStartTime" type="time" value="" className="form-control" placeholder="Select date" 
                          value={eventStartTime} onChange={this.onTextFieldChange}/>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="tx-uppercase tx-sans tx-11 tx-medium tx-spacing-1 tx-color-03">End Date</label>
                  <div className="row row-xs">
                    <div className="col-7">
                      <input id="eventEndDate" type="date" value="" className="form-control" placeholder="Select date" 
                        value={eventEndDate.toISOString().substr(0, 10)} onChange={this.onTextFieldChange}/>
                    </div>
                    <div className="col-5">
                      <input id="eventEndTime" type="time" value="" className="form-control" placeholder="Select date" 
                            value={eventEndTime} onChange={this.onTextFieldChange}/>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea id="note" className="form-control" rows="2" placeholder="Write some description (optional)"
                        value={note} onChange={this.onTextFieldChange} ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary mg-r-5" onClick={ this.onSave }>Add Event</button>
              <div className="btn btn-secondary" data-dismiss="modal" onClick={ () => this.props.setModel("") }>Discard</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    date : state.commonReducer.modelData
  }
}

export default connect(mapStateToProps, { setModel })(CreateEvent);