import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FileCard from './file-card'
import FolderCard from './folder-card'
import FeatherIcon from 'feather-icons-react';
import PerfectScrollbar from 'react-perfect-scrollbar'

class Content extends Component {
    state = {
        Folders: [
            {
                name: "Support",
                size: "12 mb",
                totalFiles: 2,
                createdDate: "Monday, July 02, 2018 9:34am",
                modifiedDate: "Monday, July 02, 2018 9:34am",
                accessedDate: "Monday, July 02, 2018 9:34am",
                description : " "
            },
            {
                name: "Interviews",
                size: "500 mb",
                totalFiles: 15,
                createdDate: "Monday, July 02, 2018 9:34am",
                modifiedDate: "Monday, July 02, 2018 9:34am",
                accessedDate: "Monday, July 02, 2018 9:34am",
                description : " "
            }
        ],
        Files: [
            {
                name: "Job Requirements.docs",
                size: "12kb",
                format: "word",
                createdDate: "Monday, July 02, 2018 9:34am",
                modifiedDate: "Monday, July 02, 2018 9:34am",
                accessedDate: "Monday, July 02, 2018 9:34am",
                description : " "
            },
            {
                name: "Job Requirements.docs",
                size: "12kb",
                format: "word",
                createdDate: "Monday, July 02, 2018 9:34am",
                modifiedDate: "Monday, July 02, 2018 9:34am",
                accessedDate: "Monday, July 02, 2018 9:34am",
                description : " "
            },
            {
                name: "Job Requirements.docs",
                size: "12kb",
                format: "word",
                createdDate: "Monday, July 02, 2018 9:34am",
                modifiedDate: "Monday, July 02, 2018 9:34am",
                accessedDate: "Monday, July 02, 2018 9:34am",
                description : " "
            }
        ]
    }

    render() {
        const { Files, Folders } = this.state;
        return (
            <div className="filemgr-content">
                <div className="filemgr-content-header">
                    <h4 className="mg-b-0">All Files</h4>
                    <nav className="nav d-none d-sm-flex mg-l-auto">
                        <Link to="" className="nav-link"><FeatherIcon icon="list"></FeatherIcon></Link>
                        <Link to="" className="nav-link"><FeatherIcon icon="alert-circle"></FeatherIcon></Link>
                        <Link to="" className="nav-link"><FeatherIcon icon="settings"></FeatherIcon></Link>
                    </nav>
                </div>
                <PerfectScrollbar className="filemgr-content-body">
                    <div className="pd-20 pd-lg-25 pd-xl-30">

                        <label className="d-block tx-medium tx-10 tx-uppercase tx-sans tx-spacing-1 tx-color-03 mg-b-15">Recently Accessed Files</label>
                        <div className="row row-xs">
                            {
                                Files.map((item, key) => (
                                    <FileCard data={item} recentAccess={true}/>
                                ))
                            }
                        </div>

                        <hr className="mg-y-40 bd-0" />
                        <label className="d-block tx-medium tx-10 tx-uppercase tx-sans tx-spacing-1 tx-color-03 mg-b-15">Folders</label>
                        <div className="row row-xs">
                            {
                                Folders.map((item, key) => (
                                    <FolderCard data={item} />
                                ))
                            }

                        </div>

                        <hr className="mg-y-40 bd-0" />
                        <label className="d-block tx-medium tx-10 tx-uppercase tx-sans tx-spacing-1 tx-color-03 mg-b-15">Files</label>
                        <div className="row row-xs">
                            {
                                Files.map((item, key) => (
                                    <FileCard data={item} recentAccess={false} />
                                ))
                            }
                            <div className="col-6 col-sm-4 col-md-3 col-xl mg-t-10">
                            </div>
                        </div>
                    </div>
                </PerfectScrollbar >
            </div>
        )
    }
}

export default Content