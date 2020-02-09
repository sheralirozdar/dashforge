import React, { Component } from 'react'
import Card from './contactCard'
import EditForm from './EditForm'

const Overview = (props) => {

    return(
        <div className="overview">
            <div className="image">
                <img src={"./asd.PNG"}/>
            </div>
            <div className="email-wrapper">
                <p className="label"> Email </p>
                <p className="email"> rameezraja275@gmail </p>
            </div>
        </div>
    )
}

class Dropdown extends Component {

    state = {
        dropdownOpen: false,
        EditformOpen : false,
        NewformOpen : false
    }

    toggleDropdown = () => {
        const { dropdownOpen } = this.state
        this.setState({
            dropdownOpen: !dropdownOpen
        })
    }

    toggleAction = (action) => {
        const { EditformOpen, NewformOpen } = this.state
        if(action == "Edit" )
        {
            this.setState({
                dropdownOpen: false,
                EditformOpen : !EditformOpen
            })
        }
        else{
            this.setState({
                dropdownOpen: false,
                NewformOpen : !NewformOpen
            })
        }
  
    }

    render() {
        const { title, action, counter  } = this.props
        const { data }  = this.props
        const { dropdownOpen, EditformOpen, NewformOpen  } = this.state
        return (
            <div className="dropdown">
                <div className="dropdown-head" >
                    <span className="dropdown-title" onClick={this.toggleDropdown}>
                        <div className="toggle-btn">
                            { dropdownOpen ? 
                                <i className="fas fa-arrow-circle-down"></i> :
                                <i className="fas fa-arrow-circle-right"></i>
                            }           
                        </div>
                        <span>{title}</span>
                        { counter && <i className="dropdown-counter">{"(" + counter + ")"}</i> }
                    </span>
                    <div className="dropdown-action" onClick={ () => this.toggleAction(action) }>{action}</div>
                </div>
                <div className="dropdown-body">
                    {
                        title == "Overview" ? dropdownOpen && <Overview>Overview</Overview> : 
                        dropdownOpen && data.map((item)=>(
                            <Card data={ item } cardType={title}/> 
                        ))
                    }
                    {
                        EditformOpen && <EditForm />
                    }
                    {
                        NewformOpen && <Card data={ {userName : "Rameez Raja", image:"as.jpg"} } cardType={"Form"}/>
                    }
                </div>
            </div>
        )
    }
}

export default Dropdown

