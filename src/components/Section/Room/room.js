import React, { Component } from 'react'
import { Accordion, Grid } from 'semantic-ui-react'
import './room.scss'

class Room extends Component {

    level1Panels = () => [
        { key: 'panel-1a', title: 'Level 1A', content: 'Level 1A Contents' },
        { key: 'panel-ba', title: 'Level 1B', content: 'Level 1B Contents' },
    ];

    level1Content = () => (
        <div>
            Welcome to level 1
          <Accordion.Accordion panels={this.level1Panels()} />
        </div>
    );

    level2Panels = () => [
        { key: 'panel-2a', title: 'Level 2A', content: 'Level 2A Contents' },
        { key: 'panel-2b', title: 'Level 2B', content: 'Level 2B Contents' },
    ];

    level2Content = () => (
        <div>
            Welcome to level 2
          <Accordion.Accordion panels={this.level2Panels()} />
        </div>
    );

    rootPanels = () => [
        { key: 'panel-1', title: 'Level 1', content: { content: this.level1Content() } },
        { key: 'panel-2', title: 'Level 2', content: { content: this.level2Content() } },
    ];

    render() {
        return (
            <Grid centered columns={1}>
                <Grid.Row>
                    <h2 className="ui teal image header"> Espacios </h2>
                </Grid.Row>
                <Grid.Row className="row">
                    <Accordion defaultActiveIndex={[0, 2]} panels={this.rootPanels()}
                        exclusive={false} styled />
                </Grid.Row>
            </Grid>
        );
    }
}

export default Room;
