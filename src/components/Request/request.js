import React, { Component } from 'react';

import { Tab } from 'semantic-ui-react'

class Request extends Component {

    render() {
        return (
            <div>
                <h2 className="ui teal image header"> Solicitudes </h2>
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