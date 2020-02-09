import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentRoute } from '../../config/commanActions'
import LeftBar from './leftbar';
import ContactList from './contact-list'
import ContactInfo from './contact-info'
import $ from 'jquery';
import ConatctJquery from './contactsJquery'
import Export from './export'

class Conatct extends Component {
    state = {
        Conatcts: [
            {
                FirstName: "Abid",
                MiddleName: "Christensen",
                LastName: "Johnson",
                MobilePhone: "+57 4265743594",
                HomePhone: "+12 3454334",
                WorkPhone: "+34 45253452",
                EmailAddress: "me@gmail.com",
                Company: "ThemePixle",
                JobPosition: "President",
                HomeAddress: "4658 Kenwood Place Pompano Beach, FL 33060, United States",
                WorkAdress: "819 Waldeck Street Farmers Branch, TX 75244, United States",
                PersonalWebsite: "http://themepixels.me",
                Notes: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                Social: {
                    Facebook: "facebook.com",
                    twitter: "twitter.com",
                    instagram: "instagram.com",
                    github: "github.com"
                },
                onlineStatus: false
            },
            {
                FirstName: "Sher",
                MiddleName: "Christensen",
                LastName: "Johnson",
                MobilePhone: "+57 4265743594",
                HomePhone: "+12 3454334",
                WorkPhone: "+34 45253452",
                EmailAddress: "me@gmail.com",
                Company: "ThemePixle",
                JobPosition: "President",
                HomeAddress: "4658 Kenwood Place Pompano Beach, FL 33060, United States",
                WorkAdress: "819 Waldeck Street Farmers Branch, TX 75244, United States",
                PersonalWebsite: "http://themepixels.me",
                Notes: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                Social: {
                    Facebook: "facebook.com",
                    twitter: "twitter.com",
                    instagram: "instagram.com",
                    github: "github.com"
                },
                onlineStatus: true
            }
        ]
    }

    componentDidMount = () => {
        // $(ConatctJquery())
        this.props.setCurrentRoute("contacts");
        document.body.classList.add('app-contact')
        document.body.classList.add('contact-content-visible')
        document.body.classList.remove('contact-content-show')
    }

    // componentWillUnmount = () => {
    //     $('.contact-list .media').off('click');
    //     $("#contactContentHide").off('click');
    //     $("#contactOptions").off('click');
    //     $('#mailSidebar').off('click');
    //     // $('.aside-menu-link').off('click');
    // }

    renderTab = (dataType) => {
        this.setState({
            dataType
        })
    }

    render() {
        const contacts = this.state.Conatcts
        const dataType = this.state.dataType
        return (
            <div className="content-body pd-0">
            <div className="contact-wrapper contact-wrapper-two">
                <LeftBar renderTab = { this.renderTab }/> 
                {
                    dataType == "export" ? <Export /> : <ContactList Contacts={contacts} type={ dataType } />
                }    
                <ContactInfo />
            </div>
            </div>
        )
    }
}

export default connect(null, { setCurrentRoute })(Conatct);;