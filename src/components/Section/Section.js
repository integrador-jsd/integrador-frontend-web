import React, { Component } from 'react';

import './Section.scss';

import ShowSection from './ShowSection/showSection';
import CreateSection from './CreateSection/createSection';
import { Tab } from 'semantic-ui-react'

class Section extends Component {

    render() {
        return (
            <div>
                <h2 className="ui teal image header"> Sectores </h2>
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