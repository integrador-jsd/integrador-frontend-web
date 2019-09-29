import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react'

import { createSection } from '../../../actions/sectionActions';
import { openModal, closeModal } from '../../../actions/modalActions';
import PrivateModal from '../../PrivateModal/privateModal';

class CreateSection extends Component {

    state = {
        sectionName: '', logisticUnit: this.props.email.split('@')[0], first: true,
        visibleSelectOptions: false
    };

    createSection = (event) => {
        event.preventDefault();
        if (this.state.sectionName) {
            this.setState({ header: '¡Hecho!', content: `El sector "${this.state.sectionName}" se ha creado satisfactoriamente`, actions: this.getActions('green', 'checkmark') });
            this.props.createSection(this.props.idToken, this.state.logisticUnit, this.state.sectionName);
        } else {
            this.setState({ header: '¡Cuidado!', content: 'El sector debe de tener un nombre', actions: this.getActions('yellow', 'warning sign') });
        }
        this.props.openModal({ size: 'tiny', open: true });
    }

    closeModal = () => {
        this.props.closeModal();
        this.setState({ sectionName: '' });
    }

    getButtonColor = () => this.state.buttonColor;

    getActions = (color, icon) => {
        return (
            <Button color={color} onClick={() => this.closeModal()}>
                <Icon name={icon} /> Continuar
            </Button>)
    }

    render() {
        return (
            <div className="ui form">
                <PrivateModal header={this.state.header} content={this.state.content}
                    actions={this.state.actions} />
                <form className="two fields" onSubmit={this.createSection}>
                    <div className="field">
                        <label>Nombre</label>
                        <input type="text" placeholder="Nombre del sector" onChange={(e) => this.setState({ sectionName: e.target.value })} value={this.state.sectionName} />
                    </div>
                    <div className="field">
                        <label style={{ visibility: 'hidden' }}>_</label>
                        <Button color='green' > Crear </Button>
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

export default connect(mapStateToProps, { createSection, openModal, closeModal })(CreateSection);