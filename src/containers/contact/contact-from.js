import React, { Component } from 'react'
import { connect } from "react-redux";
import { setModel } from "../../config/commanActions"

class ContactForm extends Component {

  state = {
    FirstName: null,
    LastName: null,
    MobilePhone: null,
    EmailAddress: null,
    Notes: null
  }

  onTextFieldChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  onSave = () => {
    console.log("form a data ", this.state);
  }

  componentDidMount = () => {
    const { modelName, modelOpen } = this.props
    const { FirstName, LastName, MobilePhone, EmailAddress, Notes } = this.props.contactDetail;
    modelName && this.setState({
      FirstName, LastName, MobilePhone, EmailAddress, Notes
    })
  }

  render() {
    const {  modelName } = this.props
    const { FirstName, LastName, MobilePhone, EmailAddress, Notes } = this.state;
    return (
     <div className="modal fade effect-scale show" id="modalNewContact" tabindex="-1" role="dialog" aria-hidden="true"
        style={{ display: "block", paddingRight: "17px", backgroundColor: "rgba(15, 21, 32, 0.7)" }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body pd-20 pd-sm-30">
              <button type="button" className="close pos-absolute t-15 r-20" data-dismiss="modal" aria-label="Close"
                onClick={this.props.setModel}>
                <span aria-hidden="true">&times;</span>
              </button>
              {

                 modelName === "contactEditForm" ? <h5 className="tx-18 tx-sm-20 mg-b-20">Edit Contact</h5> :
                  <h5 className="tx-18 tx-sm-20 mg-b-20">Create New Contact</h5>
              }

              {/* <p className="tx-13 tx-color-03 mg-b-30">You can add more information than what you see here, such as address and birthday by clicking <span className="tx-color-02">Add More Fields</span> button below to bring up more options.</p> */}

              <div className="d-sm-flex">
                <div className="mg-sm-r-30">
                  <div className="pos-relative d-inline-block mg-b-20">

                    <div className="avatar avatar-xxl">
                      <span className="avatar-initial rounded-circle bg-gray-700 tx-normal">
                        <i className="icon ion-md-person"></i>
                      </span>
                    </div>
                    <div className="contact-edit-photo"><i data-feather="edit-2"></i></div >
                  </div>
                </div>
                <div className="flex-fill">
                  <h6 className="mg-b-10">Personal Information</h6>
                  <div className="form-group mg-b-10">
                    {
                       modelName === "contactEditForm" ?
                        <input type="text" id="FirstName" className="form-control" placeholder="Firstname" value={FirstName} onChange={this.onTextFieldChange} /> :
                        <input type="text" id="FirstName" className="form-control" placeholder="Firstname" onChange={this.onTextFieldChange} />
                    }

                  </div>
                  <div className="form-group mg-b-10">
                    {
                       modelName === "contactEditForm" ? <input type="text" id="LastName" className="form-control" placeholder="Lastname" value={LastName} onChange={this.onTextFieldChange} /> :
                        <input type="text" id="LastName" className="form-control" placeholder="Lastname" onChange={this.onTextFieldChange} />
                    }
                  </div>

                  <h6 className="mg-t-20 mg-b-10">Contact Information</h6>

                  <div className="form-group mg-b-10">
                    {
                       modelName === "contactEditForm" ? <input type="text" id="MobilePhone" className="form-control" placeholder="Phone number" value={MobilePhone} onChange={this.onTextFieldChange} /> :
                        <input type="text" className="form-control" id="MobilePhone" placeholder="Phone number" onChange={this.onTextFieldChange} />
                    }
                  </div>
                  <div className="form-group mg-b-10">
                    {
                       modelName === "contactEditForm" ? <input type="email" id="EmailAddress" className="form-control" placeholder="Email address" value={EmailAddress} onChange={this.onTextFieldChange} /> :
                        <input type="email" className="form-control" id="EmailAddress" placeholder="Email address" onChange={this.onTextFieldChange} />
                    }
                  </div>

                  <h6 className="mg-t-20 mg-b-10">Notes</h6>
                  {
                     modelName === "contactEditForm" ? <textarea id="Notes" className="form-control" rows="2" placeholder="Add notes" value={Notes} onChange={this.onTextFieldChange}></textarea> :
                      <textarea id="Notes" className="form-control" rows="2" placeholder="Add notes" onChange={this.onTextFieldChange}></textarea>
                  }
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="wd-100p d-flex flex-column flex-sm-row justify-content-end">
                {/* <div className="dropup mg-b-15 mg-sm-b-0 mg-sm-r-auto">
                      <button type="button" className="btn btn-block bd bd-gray-300" data-toggle="dropdown">Add More Fields <i className="icon ion-ios-arrow-up mg-l-5"></i></button>
                      <div className="dropdown-menu tx-13">
                        <a href="" className="dropdown-item">Email</a>
                        <a href="" className="dropdown-item">Phone</a>
                        <a href="" className="dropdown-item">Address</a>
                        <a href="" className="dropdown-item">Custom</a>
                      </div>
                    </div> */}
                <button type="button" className="btn btn-primary mg-b-5 mg-sm-b-0" onClick={this.onSave} >Save Contact</button>
                <button type="button" className="btn btn-secondary mg-sm-l-5" data-dismiss="modal" onClick={this.props.setModel} >Discard</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contactDetail: state.contact.contactDetail,
    modelName: state.commonReducer.modelName
  }
}

export default connect(mapStateToProps, { setModel })(ContactForm);