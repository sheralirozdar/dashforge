import React from 'react'

const ProgressBar = (props) => {
    const {  title, goal, reached, percentage} = props.data
    const itemNumber = props.itemNumber;
    let classes = "";
    itemNumber == 0 ? classes="col-sm-6 col-lg-12" : classes="col-sm-6 col-lg-12 mg-t-30 mg-sm-t-0 mg-lg-t-30";
    return (
        <div className={classes}>
            <div className="d-flex align-items-center justify-content-between mg-b-5">
                <h6 className="tx-uppercase tx-10 tx-spacing-1 tx-color-02 tx-semibold mg-b-0">{title}</h6>
                <span className="tx-10 tx-color-04">{ percentage } goal reached</span>
            </div>
            <div className="d-flex align-items-end justify-content-between mg-b-5">
                <h5 className="tx-normal tx-rubik lh-2 mg-b-0">{ reached }</h5>
                <h6 className="tx-normal tx-rubik tx-color-03 lh-2 mg-b-0">{ goal }</h6>
            </div>
            <div className="progress ht-4 mg-b-0 op-5">
                <div className="progress-bar bg-teal wd-65p" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    )
}

export default ProgressBar;