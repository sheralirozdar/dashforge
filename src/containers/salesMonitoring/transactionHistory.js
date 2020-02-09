import React, { Component } from 'react'

const ListItem = (props) => {
    const { userId, amount, status, date, activity } = props
    return (
        <li className="list-group-item d-flex pd-sm-x-20">
            <div className="avatar d-none d-sm-block"><span className="avatar-initial rounded-circle bg-teal"><i className="icon ion-md-checkmark"></i></span></div>
            <div className="pd-sm-l-10">
                <p className="tx-medium mg-b-0">{activity} from #{userId}</p>
                <small className="tx-12 tx-color-03 mg-b-0">{date}</small>
            </div>
            <div className="mg-l-auto text-right">
                <p className="tx-medium mg-b-0">${ amount}</p>
                <small className="tx-12 tx-success mg-b-0">{status}</small>
            </div>
        </li>
    )
}

class TransactionHistory extends Component {

    render() {
        return (
            <div className="col-md-6 col-xl-4 mg-t-10">
                <div className="card ht-100p">
                    <div className="card-header d-flex align-items-center justify-content-between">
                        <h6 className="mg-b-0">Transaction History</h6>
                        <div className="d-flex tx-18">
                            <a href="" className="link-03 lh-0"><i className="icon ion-md-refresh"></i></a>
                            <a href="" className="link-03 lh-0 mg-l-10"><i className="icon ion-md-more"></i></a>
                        </div>
                    </div>
                    <ul className="list-group list-group-flush tx-13">
                        <ListItem userId="12" amount={2143} status={"Completed"} date="Dec 12 2019" activity="Payment" />
                        <ListItem userId="132" amount={2143} status={"Declined"} date="Dec 12 2019" activity="Refund" />
                        <ListItem userId="131" amount={2143} status={"Completed"} date="Dec 12 2019" activity="Payment failed" />
                    </ul>
                    <div className="card-footer text-center tx-13">
                        <a href="" className="link-03">View All Transactions <i className="icon ion-md-arrow-down mg-l-5"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default TransactionHistory