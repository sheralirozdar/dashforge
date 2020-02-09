import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react';
import PerfectScrollbar from 'react-perfect-scrollbar'

class Nav extends Component{
    
    render(){
        return(
            <div className="filemgr-sidebar">
                    <div className="filemgr-sidebar-header">
                        <div className="dropdown dropdown-icon flex-fill">
                            <button className="btn btn-xs btn-block btn-white" data-toggle="dropdown">New <FeatherIcon icon="chevron-down"></FeatherIcon></button>
                            <div className="dropdown-menu tx-13">
                                <Link to="" className="dropdown-item"><FeatherIcon icon="folder"></FeatherIcon><span>Folder</span></Link>
                                <Link to="" className="dropdown-item"><FeatherIcon icon="file"></FeatherIcon><span>Notes</span></Link>
                                <div className="dropdown-divider"></div>
                                <Link to="" className="dropdown-item"><FeatherIcon icon="file-text"></FeatherIcon><span>Word Document</span></Link>
                                <Link to="" className="dropdown-item"><FeatherIcon icon="file-text"></FeatherIcon><span>Powepoint</span></Link>
                                <Link to="" className="dropdown-item"><FeatherIcon icon="file-text"></FeatherIcon><span>Excel Spreadsheet</span></Link>
                            </div>
                        </div>
                        <div className="dropdown dropdown-icon flex-fill mg-l-10">
                            <button className="btn btn-xs btn-block btn-primary" data-toggle="dropdown">Upload <FeatherIcon icon="chevron-down"></FeatherIcon></button>
                            <div className="dropdown-menu tx-13">
                                <Link to="" className="dropdown-item"><FeatherIcon icon="file"></FeatherIcon><span>File</span></Link>
                                <Link to="" className="dropdown-item"><FeatherIcon icon="folder"></FeatherIcon><span>Folder</span></Link>
                            </div>
                        </div>
                    </div>
                    <PerfectScrollbar className="filemgr-sidebar-body">
                        <div className="pd-t-20 pd-b-10 pd-x-10">
                            <label className="tx-sans tx-uppercase tx-medium tx-10 tx-spacing-1 tx-color-03 pd-l-10">My Drive</label>
                            <nav className="nav nav-sidebar tx-13">
                                <Link to="" className="nav-link active"><FeatherIcon icon="folder"></FeatherIcon> <span>All Files</span></Link>
                                <Link to="" className="nav-link"><FeatherIcon icon="monitor"></FeatherIcon> <span>My Devices</span></Link>
                                <Link to="" className="nav-link"><FeatherIcon icon="clock"></FeatherIcon> <span>Recents</span></Link>
                                <Link to="" className="nav-link"><FeatherIcon icon="star"></FeatherIcon> <span>Important</span></Link>
                                <Link to="" className="nav-link"><FeatherIcon icon="trash"></FeatherIcon> <span>Deleted Files</span></Link>
                            </nav>
                        </div>
                        <div className="pd-10">
                            <label className="tx-sans tx-uppercase tx-medium tx-10 tx-spacing-1 tx-color-03 pd-l-10">File Library</label>
                            <nav className="nav nav-sidebar tx-13">
                                <Link to="" className="nav-link"><FeatherIcon icon="file"></FeatherIcon> <span>Documents</span></Link>
                                <Link to="" className="nav-link"><FeatherIcon icon="image"></FeatherIcon> <span>Images</span></Link>
                                <Link to="" className="nav-link"><FeatherIcon icon="video"></FeatherIcon> <span>Videos</span></Link>
                                <Link to="" className="nav-link"><FeatherIcon icon="music"></FeatherIcon> <span>Audio</span></Link>
                                <Link to="" className="nav-link"><FeatherIcon icon="package"></FeatherIcon> <span>Zip Files</span></Link>
                            </nav>
                        </div>
                        <div className="pd-y-10 pd-x-20">
                            <label className="tx-sans tx-uppercase tx-medium tx-10 tx-spacing-1 tx-color-03 mg-b-15">Storage Status</label>

                            <div className="media">
                                <FeatherIcon icon="database" className="wd-30 ht-30"></FeatherIcon>
                                <div className="media-body mg-l-10">
                                    <div className="tx-12 mg-b-4">10.2GB used of 50GB</div>
                                    <div className="progress ht-3 mg-b-20">
                                        <div className="progress-bar wd-15p" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <p className="tx-12">Get 2TB (2,000GB) of storage now and get 40% off. Offers ends soon. <Link to="">Learn more</Link></p>
                        </div>
                    </PerfectScrollbar >
                </div>
        )
    }
}

export default Nav