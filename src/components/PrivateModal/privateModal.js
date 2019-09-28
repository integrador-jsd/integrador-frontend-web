import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react'

class PrivateModal extends Component {

    state = { appName: 'UdeAulas' };
    lastProps = {};

    close = () => this.setState({ open: false })

    componentDidUpdate() {
        if (this.lastProps !== this.props.modal) {
            const { size, open, closeOnEscape, closeOnDimmerClick } = this.props.modal;
            this.setState({ size, open, closeOnEscape, closeOnDimmerClick });
            this.lastProps = this.props.modal;
        }
    }

    render() {
        const { open, size, closeOnEscape, closeOnDimmerClick } = this.state
        return (
            <div>
                <Modal size={size} open={open}
                    closeOnEscape={closeOnEscape}
                    closeOnDimmerClick={closeOnDimmerClick}>
                    <Modal.Header>{this.props.header}</Modal.Header>
                    <Modal.Content>
                        {this.props.children}
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { modal: state['modal'] }
}

export default connect(mapStateToProps)(PrivateModal);