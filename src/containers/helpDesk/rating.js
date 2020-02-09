import React, { Component } from 'react'

const RatingBar = () => {

    return (
        <div className="list-group-item pd-y-5 pd-x-20 d-flex align-items-center">
            <strong className="tx-12 tx-rubik">5.0</strong>
            <div className="tx-16 mg-l-10">
                <i className="icon ion-md-star lh-0 tx-orange"></i>
                <i className="icon ion-md-star lh-0 tx-orange"></i>
                <i className="icon ion-md-star lh-0 tx-orange"></i>
                <i className="icon ion-md-star lh-0 tx-orange"></i>
                <i className="icon ion-md-star lh-0 tx-orange"></i>
            </div>
            <div className="mg-l-auto tx-rubik tx-color-02">4,230</div>
            <div className="mg-l-20 tx-rubik tx-color-03 wd-10p text-right">58%</div>
        </div>
    )
}

class Ratings extends Component {

    render() {

        return (
            <div className="col-12 col-md-6 col-lg-12 mg-t-10">
                <div className="card">
                    <div className="card-header pd-t-20 pd-b-0 bd-b-0">
                        <h6 className="lh-5 mg-b-5">Overall Rating</h6>
                        <p className="tx-12 tx-color-03 mg-b-0">Measures the quality or your support team’s efforts.</p>
                    </div>
                    <div className="card-body pd-0">
                        <div className="pd-t-10 pd-b-15 pd-x-20 d-flex align-items-baseline">
                            <h1 className="tx-normal tx-rubik mg-b-0 mg-r-5">4.2</h1>
                            <div className="tx-18">
                                <i className="icon ion-md-star lh-0 tx-orange"></i>
                                <i className="icon ion-md-star lh-0 tx-orange"></i>
                                <i className="icon ion-md-star lh-0 tx-orange"></i>
                                <i className="icon ion-md-star lh-0 tx-orange"></i>
                                <i className="icon ion-md-star lh-0 tx-gray-300"></i>
                            </div>
                        </div>
                        <div className="list-group list-group-flush tx-13">
                            <RatingBar />
                            <RatingBar />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ratings;