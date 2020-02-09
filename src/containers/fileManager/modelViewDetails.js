import React, { Component } from 'react'
import { connect } from "react-redux";
import { setModel } from "../../config/commanActions"

class ViewDetails extends Component {
  render() {
    const fileDetails = this.props.fileDetails
    return (<div className={"modal fade effect-scale show"}  tabindex="-1" role="dialog" aria-hidden="true"
      style={{ display: "block", paddingRight: "17px", backgroundColor: "rgba(15, 21, 32, 0.7)" }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body pd-20 pd-sm-30">
            <button type="button" onClick={() => this.props.setModel("")} className="close pos-absolute t-15 r-20" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>

            <h5 className="tx-18 tx-sm-20 mg-b-30">View Details</h5>

            <div className="row mg-b-10">
              <div className="col-4">Filename:</div>
              <div className="col-8">{fileDetails.name}</div>
            </div>
            <div className="row mg-b-10">
              <div className="col-4">File type:</div>
              <div className="col-8">{fileDetails.format}</div>
            </div>
            <div className="row mg-b-10">
              <div className="col-4">File Size:</div>
              <div className="col-8">{fileDetails.size}</div>
            </div>
            <div className="row mg-b-10">
              <div className="col-4">Created:</div>
              <div className="col-8">{fileDetails.createdDate}</div>
            </div>
            <div className="row mg-b-10">
              <div className="col-4">Modified:</div>
              <div className="col-8">{fileDetails.modifiedDate}</div>
            </div>
            <div className="row mg-b-10">
              <div className="col-4">Accessed:</div>
              <div className="col-8">{fileDetails.accessedDate}</div>
            </div>
            <div className="row mg-b-10">
              <div className="col-4">Description:</div>
              <div className="col-8">
                <textarea className="form-control mg-t-5" rows="2" placeholder="Add description"></textarea>
              </div>
            </div>

          </div>
          <div className="modal-footer">
            <button type="button" onClick={() => this.props.setModel("")} className="btn btn-secondary mg-sm-l-5" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>)

  }
}

const mapStateToProps = (state) => {
  return {
    fileDetails: state.commonReducer.modelData,
  }
}

export default connect(mapStateToProps, { setModel })(ViewDetails);