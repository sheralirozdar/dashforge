import React, { Component } from 'react';
import SideBar from './sidebar';
import moment from 'moment'
import { connect } from 'react-redux'
import $ from 'jquery';
import 'moment/min/moment.min.js';

// import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar/dist/fullcalendar.js';
import { setModel, setCurrentRoute } from '../../config/commanActions'

class Calendar extends Component {

  state = {
    sideBarStatus: false,
    height: null,
    calendarEvents: {
      id: 1,
      backgroundColor: 'rgba(1,104,250, .15)',
      borderColor: '#0168fa',
      events: [
        {
          id: '1',
          start: 2019 + '-' + 10 + '-08T08:30:00',
          end: 2019 + '-' + 10 + '-08T13:00:00',
          title: 'ThemeForest Meetup',
          description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
        }, {
          id: '2',
          start: 2019 + '-' + 10 + '-10T09:00:00',
          end: 2019 + '-' + 10 + '-10T17:00:00',
          title: 'Design Review',
          description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
        }, {
          id: '3',
          start: 2019 + '-' + 10 + '-13T12:00:00',
          end: 2019 + '-' + 10 + '-13T18:00:00',
          title: 'Lifestyle Conference',
          description: 'Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi...'
        }, {
          id: '4',
          start: 2019 + '-' + 10 + '-15T07:30:00',
          end: 2019 + '-' + 10 + '-15T15:30:00',
          title: 'Team Weekly Brownbag',
          description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
        }, {
          id: '5',
          start: 2019 + '-' + 10 + '-17T10:00:00',
          end: 2019 + '-' + 10 + '-19T15:00:00',
          title: 'Music Festival',
          description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
        }, {
          id: '6',
          start: 2019 + '-' + 10 + '-08T13:00:00',
          end: 2019 + '-' + 10 + '-08T18:30:00',
          title: 'Attend Lea\'s Wedding',
          description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
        }
      ]
    },

    // Birthday Events Source
    birthdayEvents: {
      id: 2,
      backgroundColor: 'rgba(16,183,89, .25)',
      borderColor: '#10b759',
      events: [
        {
          id: '7',
          start: 2019 + '-' + 10 + '-01T18:00:00',
          end: 2019 + '-' + 10 + '-01T23:30:00',
          title: 'Socrates Birthday',
          description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
        },
        {
          id: '8',
          start: 2019 + '-' + 10 + '-21T15:00:00',
          end: 2019 + '-' + 10 + '-21T21:00:00',
          title: 'Reynante\'s Birthday',
          description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
        },
        {
          id: '9',
          start: 2019 + '-' + 10 + '-23T15:00:00',
          end: 2019 + '-' + 10 + '-23T21:00:00',
          title: 'Pauline\'s Birthday',
          description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
        }
      ]
    },


    holidayEvents: {
      id: 3,
      backgroundColor: 'rgba(241,0,117,.25)',
      borderColor: '#f10075',
      events: [
        {
          id: '10',
          start: 2019 + '-' + 10 + '-04',
          end: 2019 + '-' + 10 + '-06',
          title: 'Feast Day'
        },
        {
          id: '11',
          start: 2019 + '-' + 10 + '-26',
          end: 2019 + '-' + 10 + '-27',
          title: 'Memorial Day'
        },
        {
          id: '12',
          start: 2019 + '-' + 10 + '-28',
          end: 2019 + '-' + 10 + '-29',
          title: 'Veteran\'s Day'
        }
      ]
    },

    discoveredEvents: {
      id: 4,
      backgroundColor: 'rgba(0,204,204,.25)',
      borderColor: '#00cccc',
      events: [
        {
          id: '13',
          start: 2019 + '-' + 10 + '-17T08:00:00',
          end: 2019 + '-' + 10 + '-18T11:00:00',
          title: 'Web Design Workshop Seminar'
        }
      ]
    },

    meetupEvents: {
      id: 5,
      backgroundColor: 'rgba(91,71,251,.2)',
      borderColor: '#5b47fb',
      events: [
        {
          id: '14',
          start: 2019 + '-' + 10 + '-03',
          end: 2019 + '-' + 10 + '-05',
          title: 'UI/UX Meetup Conference'
        },
        {
          id: '15',
          start: 2019 + '-' + 10 + '-18',
          end: 2019 + '-' + 10 + '-20',
          title: 'Angular Conference Meetup'
        }
      ]
    },


    otherEvents: {
      id: 6,
      backgroundColor: 'rgba(253,126,20,.25)',
      borderColor: '#fd7e14',
      events: [
        {
          id: '16',
          start: 2019 + '-' + 10 + '-06',
          end: 2019 + '-' + 10 + '-08',
          title: 'My Rest Day'
        },
        {
          id: '17',
          start: 2019 + '-' + 10 + '-29',
          end: 2019 + '-' + 10 + '-31',
          title: 'My Rest Day'
        }
      ]
    }
  }
  componentDidMount() {
    const { calendar } = this.refs;

    const eventCalendar = $(calendar).fullCalendar({
      height: 'parent',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listWeek'
      },
      navLinks: true,
      selectable: true,
      selectLongPressDelay: 100,
      editable: true,
      nowIndicator: true,
      defaultView: 'month',
      views: {
        agenda: {
          columnHeaderHtml: function (mom) {
            return '<span>' + mom.format('ddd') + '</span>' +
              '<span>' + mom.format('DD') + '</span>';
          }
        },
        day: { columnHeader: false },
        listMonth: {
          listDayFormat: 'ddd DD',
          listDayAltFormat: false
        },
        listWeek: {
          listDayFormat: 'ddd DD',
          listDayAltFormat: false
        },
        agendaThreeDay: {
          type: 'agenda',
          duration: { days: 3 },
          titleFormat: 'MMMM YYYY'
        }
      },

      eventSources: [this.state.calendarEvents, this.state.birthdayEvents, this.state.holidayEvents, this.state.discoveredEvents, this.state.meetupEvents, this.state.otherEvents],
      eventAfterAllRender: function (view) {
        if (view.name === 'listMonth' || view.name === 'listWeek') {
          var dates = view.el.find('.fc-list-heading-main');
          dates.each(function () {
            var text = $(this).text().split(' ');
            var now = moment().format('DD');

            $(this).html(text[0] + '<span>' + text[1] + '</span>');
            if (now === text[1]) { $(this).addClass('now'); }
          });
        }

        console.log(view.el);
      },
      eventRender: function (event, element) {

        if (event.description) {
          element.find('.fc-list-item-title').append('<span class="fc-desc">' + event.description + '</span>');
          element.find('.fc-content').append('<span class="fc-desc">' + event.description + '</span>');
        }

        var eBorderColor = (event.source.borderColor) ? event.source.borderColor : event.borderColor;
        element.find('.fc-list-item-time').css({
          color: eBorderColor,
          borderColor: eBorderColor
        });

        element.find('.fc-list-item-title').css({
          borderColor: eBorderColor
        });

        element.css('borderLeftColor', eBorderColor);
      },
      eventClick:  (e, jsEvent, view) => {
        this.props.setModel("eventDescription", e.id)
      },
      dayClick: (e, jsEvent, view) => {
        this.props.setModel("createEvent", e._d)
      }
    });

    // eventCalendar.on('eventClick', function(calEvent, jsEvent, view){

    //   // var modal = $('#modalCalendarEvent');
    //   console.log("yooo")
    // });

  }

  setCalendarSideBar = () => {
    this.setState({
      sideBarStatus: !this.state.sideBarStatus
    }, () => {
      if (this.state.sideBarStatus) {
        document.body.classList.add('app-calendar')
        document.body.classList.add('calendar-sidebar-show')
      } else {
        document.body.classList.remove('app-calendar')
        document.body.classList.remove('calendar-sidebar-show')
      }
    }


    )

  }

  render() {


    return (
      <div className="content-body pd-0">
        <SideBar setModel={() => this.props.setModel("createEvent")} />
        <div className="calendar-content">
          <div className="revealFullCalBtn" onClick={this.setCalendarSideBar} >
            <i className="fas fa-calendar-week"></i>
          </div>
          <div id="calendar" ref='calendar' className="calendar-content-body">

          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { setModel, setCurrentRoute })(Calendar);








//  with react 
// import React, { Component } from 'react'
// import FullCalendar from 'fullcalendar-reactwrapper';
// import { connect } from 'react-redux'
// import { setCurrentRoute } from '../../config/commanActions'
// import $ from 'jquery'
// import { setModel } from '../../config/commanActions'
// import SideBar from './sidebar';
// // import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'
// import 'fullcalendar/dist/fullcalendar.css';
// class Calendar extends Component {
//   state = {
//     sideBarStatus: false,
//     height: null,
//     calendarEvents: {
//       id: 1,
//       backgroundColor: 'rgba(1,104,250, .15)',
//       borderColor: '#0168fa',
//       events: [
//         {
//           id: '1',
//           start: 2019 + '-' + 10 + '-08T08:30:00',
//           end: 2019 + '-' + 10 + '-08T13:00:00',
//           title: 'ThemeForest Meetup',
//           description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
//         }, {
//           id: '2',
//           start: 2019 + '-' + 10 + '-10T09:00:00',
//           end: 2019 + '-' + 10 + '-10T17:00:00',
//           title: 'Design Review',
//           description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
//         }, {
//           id: '3',
//           start: 2019 + '-' + 10 + '-13T12:00:00',
//           end: 2019 + '-' + 10 + '-13T18:00:00',
//           title: 'Lifestyle Conference',
//           description: 'Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi...'
//         }, {
//           id: '4',
//           start: 2019 + '-' + 10 + '-15T07:30:00',
//           end: 2019 + '-' + 10 + '-15T15:30:00',
//           title: 'Team Weekly Brownbag',
//           description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
//         }, {
//           id: '5',
//           start: 2019 + '-' + 10 + '-17T10:00:00',
//           end: 2019 + '-' + 10 + '-19T15:00:00',
//           title: 'Music Festival',
//           description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
//         }, {
//           id: '6',
//           start: 2019 + '-' + 10 + '-08T13:00:00',
//           end: 2019 + '-' + 10 + '-08T18:30:00',
//           title: 'Attend Lea\'s Wedding',
//           description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
//         }
//       ]
//     },

//     // Birthday Events Source
//     birthdayEvents: {
//       id: 2,
//       backgroundColor: 'rgba(16,183,89, .25)',
//       borderColor: '#10b759',
//       events: [
//         {
//           id: '7',
//           start: 2019 + '-' + 10 + '-01T18:00:00',
//           end: 2019 + '-' + 10 + '-01T23:30:00',
//           title: 'Socrates Birthday',
//           description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
//         },
//         {
//           id: '8',
//           start: 2019 + '-' + 10 + '-21T15:00:00',
//           end: 2019 + '-' + 10 + '-21T21:00:00',
//           title: 'Reynante\'s Birthday',
//           description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
//         },
//         {
//           id: '9',
//           start: 2019 + '-' + 10 + '-23T15:00:00',
//           end: 2019 + '-' + 10 + '-23T21:00:00',
//           title: 'Pauline\'s Birthday',
//           description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
//         }
//       ]
//     },


//     holidayEvents: {
//       id: 3,
//       backgroundColor: 'rgba(241,0,117,.25)',
//       borderColor: '#f10075',
//       events: [
//         {
//           id: '10',
//           start: 2019 + '-' + 10 + '-04',
//           end: 2019 + '-' + 10 + '-06',
//           title: 'Feast Day'
//         },
//         {
//           id: '11',
//           start: 2019 + '-' + 10 + '-26',
//           end: 2019 + '-' + 10 + '-27',
//           title: 'Memorial Day'
//         },
//         {
//           id: '12',
//           start: 2019 + '-' + 10 + '-28',
//           end: 2019 + '-' + 10 + '-29',
//           title: 'Veteran\'s Day'
//         }
//       ]
//     },

//     discoveredEvents: {
//       id: 4,
//       backgroundColor: 'rgba(0,204,204,.25)',
//       borderColor: '#00cccc',
//       events: [
//         {
//           id: '13',
//           start: 2019 + '-' + 10 + '-17T08:00:00',
//           end: 2019 + '-' + 10 + '-18T11:00:00',
//           title: 'Web Design Workshop Seminar'
//         }
//       ]
//     },

//     meetupEvents: {
//       id: 5,
//       backgroundColor: 'rgba(91,71,251,.2)',
//       borderColor: '#5b47fb',
//       events: [
//         {
//           id: '14',
//           start: 2019 + '-' + 10 + '-03',
//           end: 2019 + '-' + 10 + '-05',
//           title: 'UI/UX Meetup Conference'
//         },
//         {
//           id: '15',
//           start: 2019 + '-' + 10 + '-18',
//           end: 2019 + '-' + 10 + '-20',
//           title: 'Angular Conference Meetup'
//         }
//       ]
//     },


//     otherEvents: {
//       id: 6,
//       backgroundColor: 'rgba(253,126,20,.25)',
//       borderColor: '#fd7e14',
//       events: [
//         {
//           id: '16',
//           start: 2019 + '-' + 10 + '-06',
//           end: 2019 + '-' + 10 + '-08',
//           title: 'My Rest Day'
//         },
//         {
//           id: '17',
//           start: 2019 + '-' + 10 + '-29',
//           end: 2019 + '-' + 10 + '-31',
//           title: 'My Rest Day'
//         }
//       ]
//     }


//   }

//   // componentWillUnmount = () => {

//   //   $('#calendarSidebarShow').off('click');
//   //   $('div.revealFullCalBtn').off('click');
//   //   // $('.aside-menu-link').off('click');
//   // }

//   setCalendarSideBar = () => {
//     this.setState({
//       sideBarStatus: !this.state.sideBarStatus
//     }, () => {
//       if (this.state.sideBarStatus) {
//         document.body.classList.add('app-calendar')
//         document.body.classList.add('calendar-sidebar-show')
//       } else {
//         document.body.classList.remove('app-calendar')
//         document.body.classList.remove('calendar-sidebar-show')
//       }
//     }


//     )

//   }

//   componentDidMount = () => {
//     this.props.setCurrentRoute("calendar");

//     // $('#calendarSidebarShow').on('click', function (e) {
//     //   e.preventDefault()
//     //   $('body').toggleClass('calendar-sidebar-show');

//     //   $(this).addClass('d-none');
//     //   $('#mainMenuOpen').removeClass('d-none');
//     // });

//     // let calBtn = $('div.revealFullCalBtn');
//     // let cal = $('#your-custom-ID');

//     // calBtn.appendTo(cal.find('.fc-left > .fc-button-group'));

//     // $('div.revealFullCalBtn').on('click', function (e) {

//     //   e.preventDefault();

//     //   let cal2 = $('.content-body > .calendar-sidebar');

//     //   cal2.toggleClass('revealCal');

//     // });
//   }

//   render() {

//     const { calendarEvents, birthdayEvents, holidayEvents, discoveredEvents, meetupEvents, otherEvents } = this.state
//     let view = ""
//     view = window.innerWidth > 700 ? "month" : "list"

//     return (

//       <div className="content-body pd-0">
//         <SideBar setModel={() => this.props.setModel("createEvent")} />
//         <div className="calendar-content">
//           <div id="calendar" className="calendar-content-body">
//             <div className="revealFullCalBtn" onClick={this.setCalendarSideBar} >
//               <i className="fas fa-calendar-week"></i>
//             </div>
//             <FullCalendar
//               id="your-custom-ID"
//               header={{
//                 left: 'prev,next today',
//                 center: 'title',
//                 right: 'month,basicWeek,basicDay,list'
//               }}
//               defaultDate={new Date()}
//               navLinks={true}
//               editable={true}
//               eventLimit={true}
//               eventSources={[calendarEvents, birthdayEvents, holidayEvents, discoveredEvents, meetupEvents, otherEvents]}
//               eventClick={(e) => this.props.setModel("eventDescription", e.id)}
//               dayClick={(e) => this.props.setModel("createEvent", e._d)}
//               defaultView={view}
//             />
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default connect(null, { setModel, setCurrentRoute })(Calendar);



