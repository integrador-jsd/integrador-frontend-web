import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react'
import { closeModal } from '../../actions/modalActions';

class PrivateModal extends Component {

    state = { appName: 'UdeAulas' };
    lastProps = {};

    componentDidUpdate() {
        if (this.lastProps !== this.props.modal) {
            const { size, open } = this.props.modal;
            this.setState({ size: size, open: open });
            this.lastProps = this.props.modal;
        }
    }

    render() {
        const { open, size } = this.state
        return (
            <div>
                <Modal size={size} open={open}>
                    <Modal.Header>
                        {this.props.header}
                    </Modal.Header>
                    <Modal.Content>
                        {this.props.content}
                    </Modal.Content>
                    <Modal.Actions>
                        {this.props.actions}
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { modal: state['modal'] }
}

export default connect(mapStateToProps, { closeModal })(PrivateModal);