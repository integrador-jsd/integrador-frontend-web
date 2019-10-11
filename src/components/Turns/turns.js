import React, { Component } from 'react';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import dayListPlugin from '@fullcalendar/list'
import Alert from "sweetalert2";


import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

class Turns extends Component {


    calendarRef = React.createRef()


    render() {
        return (
            <div id='jeje'>
                <FullCalendar ref={this.calendarRef}
                    header={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay"
                    }}
                    defaultView="timeGridWeek"
                    plugins={[dayGridPlugin, dayListPlugin, timeGridPlugin, interactionPlugin]}
                    selectable={true}
                    events={[
                        { title: "event 1", date: "2019-10-10" },
                        { title: "event 2", date: "2019-10-11" }
                    ]}
                    minTime='06:00:00'
                    maxTime='22:00:00'
                    timeZone='utc'
                    
                    locale='es'
                    contentHeight='auto'
                    eventRender={this.handleEventRender}
                    eventClick={this.eventClick}
                    selectMirror={true}
                    dragScroll={true}
                    eventDurationEditable={false}
                    dateClick={this.dateClick}
                    select={this.select}
                />
            </div>
        );
    }

    dateClick = (info) => {
        alert('clicked ' + info.dateStr);
        let calendarApi = this.calendarRef.current.getApi()
        calendarApi.addEvent({ title: "event 3", date: "2019-10-12" })
        console.log(calendarApi);
    }

    select = (info) => {
        alert('selected ' + info.startStr + ' to ' + info.endStr);

        let calendarApi = this.calendarRef.current.getApi()
        calendarApi.addEvent({ title: "event 3", date: "2019-10-12" })

        let startDate = new Date(info.startStr + 'T00:00:00')
        let endDate = new Date(info.endStr + 'T00:00:00')

        calendarApi.addEvent({
            title: 'dynamic event',
              start: startDate,
              end: endDate,
              allDay: false
        })

        calendarApi.rerenderEvents()
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
          <td>Start Time</td>
          <td><strong>
          ` +
                eventClick.event.start +
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

export default Turns;
