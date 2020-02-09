import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const IntegrationCard = (props) => {
    const { title, description, newCard, pinned} = props.data;
    const iconColor = pinned ? "#367fee" : "#dbdee5";
    return (
        <div className="card">
            <div className="icon-wrapper">
                <i className="fas fa-rocket"></i>
            </div>
            <div className="text">
                <p className="title">{ title }</p>
                <p className="discription">{ description }</p>
            </div>
            {
                !newCard && <div className="pin">
                        <i className="fas fa-thumbtack" style={{ color: iconColor }}></i>
                    </div>
            }
        </div>
    )
}


class Integration extends Component {

    state = {
        search: null,
        data : [
            {
                title: "Get Started",
                description: "Front Guide",
                newCard: false,
                pinned: true
            },
            {
                title: "Calendar",
                description: "Essentails",
                newCard: false,
                pinned: false
            },
            {
                title: "Agath Answer",
                description: "Customer Support",
                newCard: true,
                pinned: true
            }
        ]
    }

    render() {
        const { data } = this.state;
        return (
            <div className="integration" >
                <div className="head">
                    <h4 className="title">
                        Integration
                    </h4>
                    <div className="search">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search . . ."
                            onChange={(e) => { this.setState({ search: e.target.value }) }}
                        />
                    </div>
                </div>
                <hr />
                <div className="body">
                    {
                        data.map((card)=>{
                            return !card.newCard && <IntegrationCard data={card}/> 
                        })
                    }
                    
                    <div className="add-new">
                        <div className="add-new-head">
                             <p>Add New</p>
                             <Link>
                                 <p className="link">App Directory</p>
                                 <i className="fas fa-external-link-alt"></i>
                             </Link >
                        </div>
                        {
                            data.map((card)=>{
                                return card.newCard && <IntegrationCard data={card}/>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Integration