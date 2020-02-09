import React, { Component } from 'react'
import FeatherIcon from 'feather-icons-react';
import { connect } from 'react-redux'
import { setModel } from '../../config/commanActions';

class InvitePeople extends Component {

    render() {
        return (
            <div className="modal fade effect-scale show"  tabindex="-1" role="dialog" aria-hidden="true" style={{ display: "block" , background: "rgba(15, 21, 32, 0.7)"}}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body pd-20 pd-sm-30">
                            <button onClick={ () => this.props.setModel("") } type="button" className="close pos-absolute t-20 r-20" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><FeatherIcon icon="x" className="wd-20"></FeatherIcon></span>
                            </button>

                            <h6 className="tx-18 tx-sm-20 mg-b-5">Invite People</h6>
                            <p className="tx-color-03 mg-b-20">Share this link to your friend to grant access and join to this channel</p>
                            <div className="input-group mg-b-5">
                                <input type="text" className="form-control" value="http://themepixels.me/dashforge" readonly />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-light" type="button" id="button-addon2">Copy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { setModel })(InvitePeople);