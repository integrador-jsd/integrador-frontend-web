import React, { Component } from 'react';

import { Tab, Header } from 'semantic-ui-react'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

// import './main.scss' // webpack must be configured to do this

// import '~@fullcalendar/core/main.css';
// import '~@fullcalendar/daygrid/main.css';

class Turns extends Component {

    render() {
        return (
            <div>
                <Header as='h2' color='green'><p className="header">Turnos del pana</p></Header>
                <Tab panes={
                    [
                        { menuItem: 'Pendientes', render: () => <Tab.Pane>Works</Tab.Pane> },
                        { menuItem: 'Historial', render: () => <Tab.Pane>Works</Tab.Pane> }
                    ]
                } />
                <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
            </div>
        );
    }
}

export default Turns;