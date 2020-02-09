import React, { Component } from 'react'
import { Input, Button } from 'antd';

class Card extends Component{

    render(){
        const { senderName, userName, content, time, image  } = this.props.data
        const { cardType } = this.props
        return (
            <div className="card">
                <div className="card-head">
                    { cardType != "Conversations" && <img className="avatar" src={image}></img> }
                    { cardType == "Conversations" ? <h4 className="user-name">{senderName + " > "}
                            <span style={{ color: "#367fee" }}>
                                {userName}
                            </span>
                        </h4> : 
                        <h4 className="user-name">{ userName }</h4>
                    }
                    { cardType == "Notes" && <i className="fas fa-bars more"></i> }
                    <span className="card-time">{time}</span>
                </div>

                { cardType == "Conversations" ? <p className="card-content"> {"Re : " + content} </p> :
                    cardType == "Notes" ? <p className="card-content"> {content} </p> :
                    <div className= "card-content">
                        <Input placeholder="Type your Note" className="new-note"/>
                        <Button type="primary" >Create</Button>
                    </div>   
                }
            </div>
        )
    }   
}

export default Card;