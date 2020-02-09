import React, { Component } from 'react';
import { connect } from "react-redux";
import { setModel } from "../../config/commanActions"
import { Link } from "react-router-dom"
import FeatherIcon from 'feather-icons-react';

class CopyFile extends Component {

    state = {
        Folders : [
            { name: "Downloads"},
            { name: "Personal Stuff"},
            { name: "Recordings"},
        ]
    }
    render() {
        const { modelName } = this.props
        const fileDetails = this.props.fileDetails
        const Folders = this.state.Folders

            return <div className="modal fade effect-scale show" id="modalCopy" tabindex="-1" role="dialog" aria-hidden="true"
            style={{ display: "block", paddingRight: "17px" ,backgroundColor: "rgba(15, 21, 32, 0.7)"}}>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-body pd-20 pd-sm-30">
                  <button type="button" onClick={ () => this.props.setModel() } className="close pos-absolute t-15 r-20" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
      
                  { modelName == "Move" ? <h5 className="tx-18 tx-sm-20 mg-b-0">Move Item to</h5> : 
                    <h5 className="tx-18 tx-sm-20 mg-b-0">Copy Item to</h5>}
                  
                  <p className="mg-b-25 tx-color-03">Please select a folder</p>
      
                  <div className="bd bg-ui-01 pd-10">
                    <ul className="nav nav-sidebar flex-column tx-13"> 
                      {
                          Folders.map( (item)=> (
                                <li className="nav-item"><Link to="" className="nav-link"><FeatherIcon icon="folder"></FeatherIcon>{ item.name}</Link></li>
                          ))
                      }
                    </ul>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" onClick={ () => this.props.setModel() } className="btn btn-secondary mg-sm-r-5" data-dismiss="modal">Close</button>
                  { modelName == "Move" ? <button type="button" className="btn btn-primary">Move</button> : 
                    <button type="button" className="btn btn-primary">Copy</button>}
                  
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

export default connect(mapStateToProps, { setModel })(CopyFile);