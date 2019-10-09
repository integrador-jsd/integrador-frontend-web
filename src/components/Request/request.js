import React, { Component } from 'react';

import { Tab, Header } from 'semantic-ui-react'
import ShowRequest from './ShowRequest/showRequest';

class Request extends Component {

    render() {
        return (
            <div>
                <Header as='h2' color='green'><p className="header">Solicitudes</p></Header>
                <Tab panes={
                    [
                        { menuItem: 'Pendientes', render: () => <Tab.Pane><ShowRequest /></Tab.Pane> }
                    ]
                } />
            </div>
        );
    }
}

export default Request;