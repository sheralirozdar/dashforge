import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { setModel } from "../../config/commanActions"
import FeatherIcon from 'feather-icons-react';

class FolderCard extends Component {

    render() {
        const { name, size, totalFiles } = this.props.data
        return (
            <div className="col-sm-6 col-lg-4 col-xl-3 mg-t-10">
            <div className="media media-folder">
                <FeatherIcon icon="folder"></FeatherIcon>
                <div className="media-body">
                    <h6><Link to="" className="link-02">{ name }</Link></h6>
                    <span>{ totalFiles } file, { size }</span>
                </div>
                <div className="dropdown-file">
                    <Link to="" className="dropdown-link" data-toggle="dropdown"><FeatherIcon icon="more-vertical"></FeatherIcon></Link>
                    <div className="dropdown-menu dropdown-menu-right">
                            <div onClick={ () => this.props.setModel("viewFileDetails",  this.props.data) } data-toggle="modal" className="dropdown-item details"><FeatherIcon icon="info"></FeatherIcon>View Details</div>
                            <div onClick={ () => this.props.setModel("shareFile",  this.props.data) } data-toggle="modal" className="dropdown-item share"><FeatherIcon icon="share"></FeatherIcon>Share</div>
                            <div onClick={() => this.props.setModel("Download", this.props.data)} className="dropdown-item download"><FeatherIcon icon="download"></FeatherIcon>Download</div>
                            <Link onClick={ () => this.props.setModel("copyMoveFile",  this.props.data) } data-toggle="modal" className="dropdown-item copy"><FeatherIcon icon="copy"></FeatherIcon>Copy to</Link>
                            <Link onClick={ () => this.props.setModel("copyMoveFile",  this.props.data) } data-toggle="modal" className="dropdown-item move"><FeatherIcon icon="folder"></FeatherIcon>Move to</Link>
                            <Link to="#" className="dropdown-item rename"><FeatherIcon icon="edit"></FeatherIcon>Rename</Link>
                            <Link to="#" className="dropdown-item delete"><FeatherIcon icon="trash"></FeatherIcon>Delete</Link>
                        </div>
                </div>
            </div>
        </div>
        )
    }
}

export default connect(null, { setModel })(FolderCard);