import React, { Component } from 'react';

import './Section.scss';

import ShowSection from './ShowSection/showSection';

class Section extends Component {

    state = { flag: 1 };

    setFlag = (number) => {
        this.setState({ flag: number });
    }

    render() {
        return (
            <div>
                <div>
                    <h2 className="ui teal image header">
                        <div className="content">
                            Sectores
                        </div>
                    </h2>
                </div>
                <div className="ui top attached tabular menu">
                    <div onClick={() => this.setFlag(1)} className={`item ${this.state.flag === 1 ? 'active' : ''}`} data-tab="flag">Crear</div>
                    <div onClick={() => this.setFlag(2)} className={`item ${this.state.flag === 2 ? 'active' : ''}`} data-tab="second">Listar</div>
                </div>
                <div className={`ui bottom attached tab segment ${this.state.flag === 1 ? 'active' : ''}`} data-tab="flag">
                    First
                </div>
                <div className={`ui bottom attached tab segment ${this.state.flag === 2 ? 'active' : ''}`} data-tab="second">
                    <ShowSection />
                </div>
            </div>
        );
    }
}

export default Section;