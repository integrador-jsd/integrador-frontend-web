import React, { Component } from 'react';

import { Tab, Header } from 'semantic-ui-react'

class Request extends Component {

    render() {
        return (
            <div>
                <Header as='h2' color='green'>Solicitudes</Header>
                <Tab panes={
                    [
                        { menuItem: 'Pendientes', render: () => <Tab.Pane>Works</Tab.Pane> },
                        { menuItem: 'Historial', render: () => <Tab.Pane>Works</Tab.Pane> }
                    ]
                } />
            </div>
        );
    }
}

export default Request;