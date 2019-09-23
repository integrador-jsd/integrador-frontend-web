import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createSection } from '../../../actions/sectionActions';

class CreateSection extends Component {

    state = { sectionName: '', logisticUnit: this.props.email.split('@')[0], first: true, visibleSelectOptions: false };

    // componentDidMount() {
    //     const logisticUnit = this.props.email.split('@')[0];
    //     this.props.getRooms(this.props.idToken, logisticUnit);
    // }

    createSection = (event) => {
        this.props.createSection(this.props.idToken, this.state.logisticUnit, this.state.sectionName);
        event.preventDefault();
    }

    // setVisibleSelectOptions = () => {
    //     console.log(this.state.visibleSelectOptions);

    //     this.setState({ visibleSelectOptions: !this.state.visibleSelectOptions });

    //     <div className="field">
    //                     <label>Gender</label>
    //                     <div onClick={this.setVisibleSelectOptions} className="ui selection dropdown">
    //                         <div className="default text">Select</div>
    //                         <i className="dropdown icon"></i>
    //                         <input type="hidden" name="gender" />
    //                         <div  className={`menu transition ${this.state.visibleSelectOptions ? 'visible' : ''}`}>
    //                             <div className="item" data-value="male">Male</div>
    //                             <div className="item" data-value="female">Female</div>
    //                         </div>
    //                     </div>
    //                 </div>
    // }

    render() {
        return (
            <div className="ui form">
                <form className="two fields" onSubmit={this.createSection}>
                    <div className="field">
                        <label>Nombre</label>
                        <input type="text" placeholder="Nombre del sector" onChange={(e) => this.setState({ sectionName: e.target.value })} />
                    </div>
                    <div className="field">
                        <label style={{ visibility: 'hidden' }}>_</label>
                        <button type="submit" className="ui green basic submit button">Crear</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        idToken: state['user']['idToken'],
        email: state['user']['email'],
        sections: state['section']['list']
    }
}

export default connect(mapStateToProps, { createSection })(CreateSection);