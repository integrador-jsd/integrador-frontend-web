import React, { Component } from 'react';

import { Grid } from 'semantic-ui-react'
import './loader.scss'

class Loader extends Component {

    render() {
        return (
            <div>
                <Grid centered columns={4}>
                    <Grid.Column>
                        <div className="lds-roller">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Loader;