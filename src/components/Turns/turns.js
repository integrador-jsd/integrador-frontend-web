import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTurns } from '../../actions/userActions';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import dayListPlugin from '@fullcalendar/list'
import Alert from "sweetalert2";
import moment from "moment/moment"

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

class Turns extends Component {
    calendarRef = React.createRef()

    componentDidMount() {
        const username = this.props.email.split('@')[0];
        this.props.getTurns(username, this.props.idToken);
    }

    render() {
        return (
            <div id='jeje'>
                <FullCalendar ref={this.calendarRef}
                    header={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay"
                    }}

                    plugins={[dayGridPlugin, dayListPlugin, timeGridPlugin, interactionPlugin]}

                    defaultView="timeGridWeek"
                    minTime='06:00:00'
                    maxTime='22:00:00'
                    timeZone='utc'
                    locale='es'
                    contentHeight='auto'

                    selectable={true}
                    selectMirror={true}
                    allDaySlot={false}
                    eventDurationEditable={false}

                    events={formateTurns(this.props.turns)}

                    eventRender={this.eventRender}
                    eventClick={this.eventClick}
                    dateClick={this.dateClick}
                    select={this.select}

                    schedulerLicenseKey='GPL-My-Project-Is-Open-Source'
                />
            </div>
        );
    }

    dateClick = (info) => {
        alert('clicked ' + info.dateStr);
        let calendarApi = this.calendarRef.current.getApi()
        calendarApi.addEvent({ title: "event 3", date: "2019-10-12" })
        calendarApi.rerenderEvents()
    }

    select = (info) => {
        let calendarApi = this.calendarRef.current.getApi()
        let startDate = new Date(info.startStr)
        let endDate = new Date(info.endStr)
        let section = prompt('Digite el ID de un sector');

        startDate = moment(info.startStr).format("YYYY-MM-DD HH:MM:SS")
        endDate = moment(info.endStr).format("YYYY-MM-DD HH:MM:SS")

        calendarApi.addEvent({
            title: 'Supervisión',
            start: startDate,
            end: endDate,
            allDay: false,
            extendedProps: {
                section
            },
        })

        calendarApi.rerenderEvents()
    }

    eventRender = (info) => {
    }

    eventClick = eventClick => {
        Alert.fire({
            title: eventClick.event.title,
            html:
                `<div class="table-responsive">
          <table class="table">
          <tbody>
          <tr >
          <td>Title</td>
          <td><strong>` +
                eventClick.event.title +
                `</strong></td>
          </tr>
          <tr >
          <td>Hora inicio</td>
          <td><strong>
          ` +
            moment(eventClick.event.start).add(5, 'hours').format("YYYY-MM-DD HH:MM:SS")  +
                `
          </strong></td>
          </tr>

          <tr >
          <td>Hora fin</td>
          <td><strong>
          ` +
          moment(eventClick.event.end).add(5, 'hours').format("YYYY-MM-DD HH:MM:SS") +
                `
          </strong></td>
          </tr>

          <tr >
          <td>Ubicación</td>
          <td><strong>
          ` +
                eventClick.event.extendedProps.section +
                `
          </strong></td>
          </tr>
          </tbody>
          </table>
          </div>`,

            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Remove Event",
            cancelButtonText: "Close"
        }).then(result => {
            if (result.value) {
                eventClick.event.remove(); // It will remove event from the calendar
                Alert.fire("Deleted!", "Your Event has been deleted.", "success");
            }
        });
    };
}

const formateTurns = (turns) => {
    return turns.map((turn) => {
        return { title: 'mapped', start: turn.startTime, end: turn.endTime, extendedProps: { section: turn.sectionID } }
    })
}

const mapStateToProps = (state) => {
    return {
        idToken: state['user']['idToken'],
        email: state['user']['email'],
        turns: state['user']['turns']
    }
}

export default connect(mapStateToProps, { getTurns })(Turns);

