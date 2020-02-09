import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setCurrentRoute } from '../../config/commanActions'
import MailNav from './mail-nav'
import ConversationList from './conversation-list'
import Conversation from './conversation-content'
import $ from 'jquery';
import MailJquery from './mailJquery'

class Mail extends Component {

  componentDidMount = () => {
    // $( MailJquery() )
    this.props.setCurrentRoute("mail");
  }

//   componentWillUnmount = () => {
//     $('.mail-group-body .media').off('click');
// //     $('#mailComposeBtn').off('click');
// //     $("#mailComposeClose").off('click');
// //     $('#mailComposeShrink').off('click');
// //     $('#mailComposeMinimize').off('click');

// //     $('#mailSidebar').off('click');
// //     // $(".aside-menu-link").off('click');
// //     $(document).off('click touchstart');
// //     $('#mailContentClose').off('click');
// }

  render() {
    return (
      <div className="content-body pd-0">
      <div className="mail-wrapper mail-wrapper-two">
        <MailNav />
        <ConversationList />
        <Conversation />
      </div>
      </div>
    );
  }
}

export default connect(null, { setCurrentRoute })(Mail);