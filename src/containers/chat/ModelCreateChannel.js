import React, { Component } from 'react';
import FeatherIcon from 'feather-icons-react';
import { connect } from "react-redux"
import { setModel } from '../../config/commanActions';

class CreateChannel extends Component {

    render() {
        return (
            <div className="modal fade effect-scale show" tabindex="-1" role="dialog" aria-hidden="true" style={{display: "block", background: "rgba(15, 21, 32, 0.7)"}}> 
                <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
                    <div className="modal-content">
                        <div className="modal-body pd-20">
                            <button onClick={ () => this.props.setModel("") } type="button" className="close pos-absolute t-15 r-15" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><FeatherIcon icon="x" className="wd-20"></FeatherIcon></span>
                            </button>

                            <h6 className="tx-uppercase tx-spacing-1 tx-semibold mg-b-20">Create Channel</h6>
                            <input type="text" className="form-control" placeholder="Channel name" value="" />
                        </div>
                        <div className="modal-footer pd-x-20 pd-b-20 pd-t-0 bd-t-0">
                            <button onClick={ () => this.props.setModel("") } type="button" className="btn btn-secondary tx-13" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary tx-13">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(null, { setModel })(CreateChannel);