import React, { Component } from 'react';

import './footer.scss';

class Footer extends Component {

    state = { users: [] };

    render() {
        return (
            <div className="ui secondary pointing footer">Footer Works</div>
        );
    }
}

export default Footer;