import React, { Component } from 'react';
import { connect } from "react-redux";
import { setModel } from "../../config/commanActions"
import { Link } from "react-router-dom"
import FeatherIcon from 'feather-icons-react';

class ShareFile extends Component {

    render() {
        const fileDetails = this.props.fileDetails
            return <div className="modal fade effect-scale show" id="modalShare" tabindex="-1" role="dialog" aria-hidden="true"
                style={{ display: "block", paddingRight: "17px",backgroundColor: "rgba(15, 21, 32, 0.7)" }}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body pd-20 pd-sm-30">
                            <button type="button" onClick={ () => this.props.setModel("") } className="close pos-absolute t-15 r-20" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>

                            <h5 className="tx-18 tx-sm-20 mg-b-30">Share With Others</h5>

                            <div className="mg-t-20">
                                <label className="d-block">Other users:</label>
                                <input className="form-control" placeholder="Enter names or email addresses" />
                                <div className="dropdown mg-t-10">
                                    Rights: <Link to="" className="dropdown-link" data-toggle="dropdown" >Allow editing <i className="icon ion-chevron-down tx-12"></i></Link>
                                </div>
                                <hr />
                                <label className="d-block">More:</label>
                                <nav className="nav nav-social">
                                    <Link to="" className="nav-link"><FeatherIcon icon>="facebook"></FeatherIcon></Link>
                                    <Link to="" className="nav-link"><FeatherIcon icon>="twitter"></FeatherIcon></Link>
                                </nav>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Share</button>
                        </div>
                    </div>
                </div>
            </div>

    }
}

const mapStateToProps = (state) => {

    return {
        fileDetails: state.file.modelData,
    }
}

export default connect(mapStateToProps, { setModel })(ShareFile);