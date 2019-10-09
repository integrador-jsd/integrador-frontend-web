import React, { Component } from 'react';

import './Section.scss';

import ShowSection from './ShowSection/showSection';
import CreateSection from './CreateSection/createSection';
import { Tab, Header } from 'semantic-ui-react'

class Section extends Component {

    render() {
        return (
            <div>
                <Header as='h2' color='green'><p className="header">Sectores</p></Header>
                <Tab panes={
                    [
                        { menuItem: 'Crear', render: () => <Tab.Pane><CreateSection /></Tab.Pane> },
                        { menuItem: 'Listar', render: () => <Tab.Pane><ShowSection /></Tab.Pane> }
                    ]
                } />
            </div>
        );
    }
}

export default Section;