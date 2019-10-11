import React, { Component } from 'react';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import dayListPlugin from '@fullcalendar/list'

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

class Turns extends Component {

    handleEventClick = () => {
        console.log('jeje')
    }

    render() {
        return (
            <div id='calendar'>
                <FullCalendar
                    header={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay"
                    }}
                    defaultView="timeGridWeek"
                    plugins={[ dayGridPlugin, dayListPlugin, interactionPlugin ]}
                    selectable={true}
                    events={[
                        { title: "event 1", date: "2019-10-10" },
                        { title: "event 2", date: "2019-10-11" }
                      ]}
                    eventRender={this.handleEventRender}
                    eventClick={this.handleEventClick}
                />
            </div>
        );
    }
}

export default Turns;
