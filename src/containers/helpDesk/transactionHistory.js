import React, { Component } from 'react'

const Transaction = () => {
    return (
        <li className="list-group-item d-flex pd-sm-x-20">
            <div className="avatar d-none d-sm-block"><span className="avatar-initial rounded-circle bg-indigo op-5"><i className="icon ion-md-return-left"></i></span></div>
            <div className="pd-sm-l-10">
                <p className="tx-medium mg-b-2">Process refund to #00910</p>
                <small className="tx-12 tx-color-03 mg-b-0">Mar 21, 2019, 1:00pm</small>
            </div>
            <div className="mg-l-auto text-right">
                <p className="tx-medium mg-b-2">-$16.50</p>
                <small className="tx-12 tx-success mg-b-0">Completed</small>
            </div>
        </li>
    )
}

class Transactions extends Component {

    render() {

        return (
            <div className="col-12 col-md-6 col-lg-12 mg-t-10">
                <div className="card">
                    <div className="card-header d-flex align-items-center justify-content-between">
                        <h6 className="mg-b-0">Transaction History</h6>
                        <div className="d-flex tx-18">
                            <a href="" className="link-03 lh-0"><i className="icon ion-md-refresh"></i></a>
                            <a href="" className="link-03 lh-0 mg-l-10"><i className="icon ion-md-more"></i></a>
                        </div>
                    </div>
                    <ul className="list-group list-group-flush tx-13">
                        <Transaction />
                        <Transaction />
                    </ul>
                    <div className="card-footer text-center tx-13">
                        <a href="" className="link-03">View All Transactions <i className="icon ion-md-arrow-down mg-l-5"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Transactions