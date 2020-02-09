import React, { Component } from 'react'
import { connect } from "react-redux";
import FeatherIcon from 'feather-icons-react';
import { setModel } from '../../config/commanActions'
import PerfectScrollbar from 'react-perfect-scrollbar'

const InfoField = (props) => {
    const { label, value, size, classname } = props
    return (
        <div className={"col-sm-" + size + " mg-t-20 mg-sm-t-30"}>
            <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">{label}</label>
            {
                label != "SOCIAL PROFILES" ? <p className={classname}>{value}</p> :
                    <nav className="nav nav-social">
                        <a href="" className="nav-link"><FeatherIcon icon="facebook"></FeatherIcon></a>
                        <a href="" className="nav-link"><FeatherIcon icon="twitter"></FeatherIcon></a>
                        <a href="" className="nav-link"><FeatherIcon icon="instagram"></FeatherIcon></a>
                        <a href="" className="nav-link"><FeatherIcon icon="github"></FeatherIcon></a>
                    </nav>
            }

        </div>
    )
}

class ContactInfo extends Component {

    state = {
        contactoptions: false
    }

    toggleContactOptions = () => {
        const { contactoptions } = this.state
        this.setState({
            contactoptions: !contactoptions
        }, () => {
            if (contactoptions) {
                document.body.classList.add('contact-options-show')
            } else {
                document.body.classList.remove('contact-options-show')
            }
        })
    }

    render() {
        const { FirstName,MiddleName ,LastName,MobilePhone,HomePhone, WorkPhone ,EmailAddress,Company, JobPosition ,HomeAddress, WorkAdress, PersonalWebsite, Social, Notes } = this.props;
        return (
            <div className="contact-content">
                <div className="contact-content-header">
                    <nav className="nav">
                        <div href="#contactInformation" className="nav-link active" data-toggle="tab">Contact Info<span>rmation</span></div>
                        <div href="#contactLogs" className="nav-link" data-toggle="tab"><span>Call &amp; Message </span>Logs</div>
                    </nav>
                    <div onClick={this.toggleContactOptions} className="text-secondary mg-l-auto d-xl-none"><FeatherIcon icon="more-horizontal"></FeatherIcon></div >
                </div>

                <PerfectScrollbar className="contact-content-body">
                    <div className="tab-content">

                        <div id="contactInformation" className="tab-pane show active pd-20 pd-xl-25">
                            <div className="d-flex align-items-center justify-content-between mg-b-25">
                                <h6 className="mg-b-0">Personal Details</h6>
                                <div className="d-flex">
                                    <button onClick={() => this.props.setModel("contactEditForm")} className="btn btn-sm btn-white d-flex align-items-center mg-r-5"><FeatherIcon icon="edit-2"></FeatherIcon><span className="d-none d-sm-inline mg-l-5"> Edit</span></button>
                                    <button onClick={() => this.props.setModel("deleteContact")} className="btn btn-sm btn-white d-flex align-items-center"><FeatherIcon icon="trash"></FeatherIcon><span className="d-none d-sm-inline mg-l-5"> Delete</span></button>
                                </div>
                            </div>

                            <div className="row">
                                <InfoField label="FIRST NAME" value={FirstName} size={4} classname="mg-b-0" />
                                <InfoField label="MIDDLE NAME" value={MiddleName} size={4} classname="mg-b-0" />
                                <InfoField label="LAST NAME" value={LastName} size={4} classname="mg-b-0" />
                            </div>

                            <h6 className="mg-t-40 mg-b-20">Contact Details</h6>

                            <div className="row row-sm">
                                <InfoField label="MOBILE" value={MobilePhone} size={4} classname="tx-primary tx-rubik mg-b-0" />
                                <InfoField label="HOME PHONE" value={HomePhone} size={4} classname="tx-primary tx-rubik mg-b-0" />
                                <InfoField label="WORK PHONE" value={WorkPhone} size={4} classname="tx-primary tx-rubik mg-b-0" />
                                <InfoField label="EMAIL ADDRESS" value={EmailAddress} size={4} classname="tx-primary tx-rubik mg-b-0" />
                                <InfoField label="COMPANY" value={Company} size={4} classname="mg-b-0" />
                                <InfoField label="JOB POSITION" value={JobPosition} size={4} classname="mg-b-0" />
                                <InfoField label="HOME ADDRESS" value={HomeAddress} size={6} classname="mg-b-0" />
                                <InfoField label="WORK ADDRESS" value={WorkAdress} size={6} classname="mg-b-0" />
                                <InfoField label="PERSONAL WEBSITE" value={PersonalWebsite} size={6} classname="tx-primary tx-rubik mg-b-0" />
                                <InfoField label="SOCIAL PROFILES" value={Social} size={6} classname="mg-b-0" />
                                <InfoField label="NOTES" value={Notes} size={12} classname="mg-b-0" />
                            </div>
                        </div>
                        <div id="contactLogs" className="tab-pane pd-20 pd-xl-25">
                            <div className="d-flex align-items-center justify-content-between mg-b-30">
                                <h6 className="tx-15 mg-b-0">Call &amp; Message Logs</h6>
                                <a href="#" className="btn btn-sm btn-white d-flex align-items-center"><i className="icon ion-md-time mg-r-5 tx-16 lh--9"></i> Clear History</a>
                            </div>
                        </div>
                    </div>
                </PerfectScrollbar>

                <PerfectScrollbar className="contact-content-sidebar">
                    <div className="clearfix mg-b-25">
                        <div id="contactAvatar" className="pos-relative float-left">
                            <div className="avatar avatar-xl"><span className="avatar-initial rounded-circle bg-gray-700 tx-normal">A</span></div>
                            <a href="" className="contact-edit-photo" data-toggle="tooltip" title="Upload Photo"><FeatherIcon icon="edit-2"></FeatherIcon></a>
                        </div>
                    </div>
                    <h5 id="contactName" className="tx-18 tx-xl-20 mg-b-5">Abigail Johnson</h5>
                    <p className="tx-13 tx-lg-12 tx-xl-13 tx-color-03 mg-b-20">President &amp; CEO - ThemePixels, Inc.</p>
                    <nav className="contact-call-nav mg-b-20">
                        <a href="#" className="nav-call" data-toggle="tooltip" title="Make a Phone Call"><FeatherIcon icon="phone"></FeatherIcon></a>
                        <a href="#" className="nav-video" data-toggle="tooltip" title="Make a Video Call"><FeatherIcon icon="video"></FeatherIcon></a>
                        <a href="#" className="nav-msg" data-toggle="tooltip" title="Send Message"><FeatherIcon icon="message-square"></FeatherIcon></a>
                    </nav>

                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Biography</label>
                    <p className="tx-13 mg-b-0">Gambler, Tea Drinker, Ultimate Piggie, Replacement President of a Major Soft Drink Manufacturer. When I give out candies, I give people the flavour I don't like. </p>

                    <hr className="mg-y-20" />

                    <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-15">Options</label>
                    <nav className="nav flex-column contact-content-nav mg-b-25">
                        <a href="" className="nav-link"><FeatherIcon icon="share"></FeatherIcon> Share this Contact</a>
                        <a href="" className="nav-link"><FeatherIcon icon="star"></FeatherIcon> Add to Favorites</a>
                        <a href="" className="nav-link"><FeatherIcon icon="slash"></FeatherIcon> Block this Contact</a>
                    </nav>

                </PerfectScrollbar >
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contact.contactDetail
    }
}

export default connect(mapStateToProps, { setModel })(ContactInfo);