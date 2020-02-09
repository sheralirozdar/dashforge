import React, { Component } from 'react'
import FeatherIcon from 'feather-icons-react'

const ListItem = (props) => {
    const { name, id } = props 
    return (
        <li className="list-group-item d-flex pd-sm-x-20">
            <div className="avatar"><span className="avatar-initial rounded-circle bg-gray-600">s</span></div>
            <div className="pd-l-10">
                <p className="tx-medium mg-b-0">{name}</p>
                <small className="tx-12 tx-color-03 mg-b-0">Customer ID#{id}</small>
            </div>
            <div className="mg-l-auto d-flex align-self-center">
                <nav className="nav nav-icon-only">
                    <a href="" className="nav-link d-none d-sm-block"><FeatherIcon icon="mail"></FeatherIcon></a>
                    <a href="" className="nav-link d-none d-sm-block"><FeatherIcon icon="slash"></FeatherIcon></a>
                    <a href="" className="nav-link d-none d-sm-block"><FeatherIcon icon="user"></FeatherIcon></a>
                    <a href="" className="nav-link d-sm-none"><FeatherIcon icon="more-vertical"></FeatherIcon></a>
                </nav>
            </div>
        </li>
    )
}

class NewCustomer extends Component {

    render() {
        return (
            <div className="col-md-6 col-xl-4 mg-t-10">
                <div className="card ht-100p">
                    <div className="card-header d-flex align-items-center justify-content-between">
                        <h6 className="mg-b-0">New Customers</h6>
                        <div className="d-flex align-items-center tx-18">
                            <a href="" className="link-03 lh-0"><i className="icon ion-md-refresh"></i></a>
                            <a href="" className="link-03 lh-0 mg-l-10"><i className="icon ion-md-more"></i></a>
                        </div>
                    </div>
                    <ul className="list-group list-group-flush tx-13">
                       <ListItem name="rameez raja" id={1}/>
                       <ListItem name="sher ali" id={2}/>
                    </ul>
                    <div className="card-footer text-center tx-13">
                        <a href="" className="link-03">View More Customers <i className="icon ion-md-arrow-down mg-l-5"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewCustomer