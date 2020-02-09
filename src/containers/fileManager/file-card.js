import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { setModel } from "../../config/commanActions"
import FeatherIcon from 'feather-icons-react';

class FileCard extends Component {

    state = {
        important: false
    }

    setImportant = () => {
        this.setState({
            important: !this.state.important
        })
    }

    render() {
        const { name, size, accessedDate, format } = this.props.data
        const { recentAccess } = this.props
        return (
            <div className="col-6 col-sm-4 col-md-3 col-xl mg-t-10 mg-xl-t-0">
                <div className="card card-file">
                    {this.state.important && <div class="marker-icon marker-warning pos-absolute t--1 l--1"><FeatherIcon icon="star"></FeatherIcon></div>}
                    <div className="dropdown-file">
                        <Link to="" className="dropdown-link" data-toggle="dropdown"><FeatherIcon icon="more-vertical"></FeatherIcon></Link>
                        <div className="dropdown-menu dropdown-menu-right">
                            <div onClick={() => this.props.setModel("viewFileDetails", this.props.data)} className="dropdown-item details"><FeatherIcon icon="info"></FeatherIcon>View Details</div>

                            {!this.state.important ? <div className="dropdown-item important" onClick={this.setImportant}><FeatherIcon icon="star"></FeatherIcon>Mark as Important</div>
                                : <div className="dropdown-item important" onClick={this.setImportant}><FeatherIcon icon="star"></FeatherIcon>Unmark as Important</div>}
                            <div onClick={() => this.props.setModel("shareFile", this.props.data)} className="dropdown-item share"><FeatherIcon icon="share"></FeatherIcon>Share</div>
                            <div onClick={() => this.props.setModel("Download", this.props.data)} className="dropdown-item download"><FeatherIcon icon="download"></FeatherIcon>Download</div>
                            <Link onClick={() => this.props.setModel("copyMoveFile", this.props.data)} data-toggle="modal" className="dropdown-item copy"><FeatherIcon icon="copy"></FeatherIcon>Copy to</Link>
                            <Link onClick={() => this.props.setModel("copyMoveFile", this.props.data)} data-toggle="modal" className="dropdown-item move"><FeatherIcon icon="folder"></FeatherIcon>Move to</Link>
                            <Link className="dropdown-item rename"><FeatherIcon icon="edit"></FeatherIcon>Rename</Link>
                            <Link className="dropdown-item delete"><FeatherIcon icon="trash"></FeatherIcon>Delete</Link>
                        </div>
                    </div>
                    <div className="card-file-thumb tx-primary">
                        <i className={"far fa-file-" + format}></i>
                    </div>
                    {
                        recentAccess ?
                            <div className="card-body">
                                <h6><Link to="" className="link-02">{name}</Link></h6>
                                <span>{size}</span>
                                <div className="card-footer"><span className="d-none d-sm-inline">Last accessed: </span>{accessedDate} </div>
                            </div> :
                            <div className="card-body">
                                <h6><Link to="" className="link-02">{name}</Link></h6>
                                <p>{format} File</p>
                                <span>{size}</span>
                            </div>
                    }


                </div>
            </div>
        )
    }
}


export default connect(null, { setModel })(FileCard);