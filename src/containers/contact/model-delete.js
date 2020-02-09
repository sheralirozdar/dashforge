import React, { Component } from 'react'
import { connect } from "react-redux";
import { deleteContact } from './actions'
import { setModel } from '../../config/commanActions'

class DeleteModel extends Component {

    render() {
        return (
            <div className="modal fade effect-scale show" style={{ display : "block", background: "rgba(15, 21, 32, 0.7)" }} tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title">Delete Contact</h6>
                            <button onClick={ () => this.props.setModel(null) } type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p className="mg-b-0">Do you really want to delete this contact?</p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={ () => this.props.setModel(null) } type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" onClick={ this.props.deleteContact }>Continue Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default connect(null, { deleteContact, setModel  })( DeleteModel );