import React, { Component } from 'react'
import DropDown from './dropdown-contacts'

class Contacts extends Component{

    state = {
        conversations : [
            {
                senderName : "SherAli", 
                userName : "Rameez Raja", 
                content : "Call Me", 
                time : "13D"
            },
            {
                senderName : "Faizan", 
                userName : "Rameez Raja", 
                content : "How are you?", 
                time : "12D"
            }
        ],
        notes : [
            {
                userName : "Rameez Raja", 
                image: "asd.jpg",
                content : "Add Content", 
                time : "13D"
            },
            {
                userName : "Rameez Raja", 
                image: "asd.jpg",
                content : "Add Content", 
                time : "13D"
            }
        ]
    }
    render(){
        const { conversations, notes } = this.state
        return(
            <div className="contacts">
                <div className="head">
                    <h4> Contacts </h4>
                </div>
                <div className="body">
                    <hr />
                    <DropDown title="Overview" action="Edit" counter={null} />
                    <DropDown title="Conversations" action={null} counter={2} data={ conversations }/>
                    <DropDown title="Notes" action="New" counter={2} data={ notes }/>
                </div>
            </div>
        )
    }
}

export default Contacts;