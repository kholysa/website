import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';
import '../Style/Boxes.css';

class Box extends Component {

    constructor (props) {
        super(props);
        this.state = {
            modal: false
        }
    }
    handleBoxClick = () => {
        this.setState({modal: !this.state.modal})
    };

    render() {
        return (
        <div onClick={this.handleBoxClick} className="Box">
            <div className="Box-title">
                <h4>{this.props.BoxTitle}</h4>
            </div>
            <br/>
            <div className="Box-blurb">
                {this.props.BoxBlurb}
            </div>
            <div className="Box-image">
                <img className="image" src={this.props.BoxImage} alt={this.props.BoxBlurb}/>
            </div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.handleBoxClick}>{this.props.BoxTitle}</ModalHeader>
                <ModalBody>
                    {this.props.BoxModal}
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.handleBoxClick}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
        )
    }
}

export default Box;
