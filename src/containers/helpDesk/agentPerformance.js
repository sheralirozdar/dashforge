import React, { Component } from 'react';

const AgentDetail = (props) => {
    const { name, profession, level, points, image, margin } = props
    return (
        <div className={"media " + margin }>
            <div className="avatar"><img src={image} className="rounded-circle" alt="" /></div>
            <div className="media-body mg-l-15">
                <h6 className="tx-13 mg-b-2">{name}</h6>
                <p className="tx-color-03 tx-12 mg-b-10">{profession}</p>
                <div className="progress ht-4 op-7 mg-b-5">
                    <div className="progress-bar wd-85p" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="d-flex justify-content-between tx-12">
                    <span className="tx-color-03">{level} Level</span>
                    <strong className="tx-medium">{points} points</strong>
                </div>
            </div>
        </div>
    )
}

class AgentPerfomance extends Component {
    render() {
        return (
            <div className="col-md-6 mg-t-10">
                <div className="card">
                    <div className="card-header pd-b-0 pd-x-20 bd-b-0">
                        <h6 className="mg-b-0">Agent Performance Points</h6>
                    </div>
                    <div className="card-body pd-t-25">
                        <AgentDetail name="Sher" profession="Front-End dev" level="Expert" points="1234" image="a.jpg" margin=""/>
                        <AgentDetail name="Sher" profession="Front-End dev" level="Expert" points="1234" image="a.jpg" margin="mg-t-20"/>
                        <AgentDetail name="Sher" profession="Front-End dev" level="Expert" points="1234" image="a.jpg" margin="mg-t-20"/>
                        <AgentDetail name="Sher" profession="Front-End dev" level="Expert" points="1234" image="a.jpg" margin="mg-t-20"/>   
                    </div>
                </div>
            </div>
        );
    }
}

export default AgentPerfomance