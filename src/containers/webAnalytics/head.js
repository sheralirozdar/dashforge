import React from 'react'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react';


const title = () => {

    return (
        
            <div className="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
                <div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb breadcrumb-style1 mg-b-10">
                            <li className="breadcrumb-item"><Link href="#">Dashboard</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Website Analytics</li>
                        </ol>
                    </nav>
                    <h4 className="mg-b-0 tx-spacing--1">Welcome to Dashboard</h4>
                </div>
                <div className="d-none d-md-block">
                    <button className="btn btn-sm pd-x-15 btn-white btn-uppercase"><FeatherIcon icon="save" className="wd-10 mg-r-5"/> Save</button>
                    <button className="btn btn-sm pd-x-15 btn-white btn-uppercase mg-l-5"><FeatherIcon icon="upload" className="wd-10 mg-r-5"/> Export</button>
                    <button className="btn btn-sm pd-x-15 btn-white btn-uppercase mg-l-5"><FeatherIcon icon="share-2" className="wd-10 mg-r-5"/> Share</button>
                    <button className="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5"><FeatherIcon icon="sliders" className="wd-10 mg-r-5"/> Settings</button>
                </div>
               
            </div>
            
    )
}

export default title;